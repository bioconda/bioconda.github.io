:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kronos'
.. highlight: bash

kronos
======

.. conda:recipe:: kronos
   :replaces_section_title:
   :noindex:

   Kronos is a highly flexible Python\-based software tool that mainly enables bioinformatics developers\, i.e. bioinformaticians who develop workflows for analyzing genomic data\, to quickly make a workflow.

   :homepage: https://github.com/jtaghiyar/kronos
   :documentation: https://kronos.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`kronos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronos/meta.yaml>`_

   


.. conda:package:: kronos

   |downloads_kronos| |docker_kronos|

   :versions:
      
      

      ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends python: ``<3``
   :depends pyyaml: ``>=3.11``
   :depends ruffus: ``2.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kronos

   and update with::

      conda update kronos

   or use the docker container::

      docker pull quay.io/biocontainers/kronos:<tag>

   (see `kronos/tags`_ for valid values for ``<tag>``)


.. |downloads_kronos| image:: https://img.shields.io/conda/dn/bioconda/kronos.svg?style=flat
   :target: https://anaconda.org/bioconda/kronos
   :alt:   (downloads)
.. |docker_kronos| image:: https://quay.io/repository/biocontainers/kronos/status
   :target: https://quay.io/repository/biocontainers/kronos
.. _`kronos/tags`: https://quay.io/repository/biocontainers/kronos?tab=tags


.. raw:: html

    <script>
        var package = "kronos";
        var versions = ["2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kronos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kronos/README.html