:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coast'
.. highlight: bash

coast
=====

.. conda:recipe:: coast
   :replaces_section_title:
   :noindex:

   Alignment search tool that identifies similar proteomes.

   :homepage: https://gitlab.com/coast_tool/COAST
   :license: MIT / MIT
   :recipe: /`coast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coast/meta.yaml>`_

   Alignment search tool that identifies similar proteomes.



.. conda:package:: coast

   |downloads_coast| |docker_coast|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.78``
   :depends blast: ``>=2.10``
   :depends dominate: 
   :depends pandas: ``>=1.2.0``
   :depends python: 
   :depends requests: ``>=2.25.1``
   :depends seaborn: ``>=0.11.1``
   :depends tabulate: ``>=0.8.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coast

   and update with::

      conda update coast

   or use the docker container::

      docker pull quay.io/biocontainers/coast:<tag>

   (see `coast/tags`_ for valid values for ``<tag>``)


.. |downloads_coast| image:: https://img.shields.io/conda/dn/bioconda/coast.svg?style=flat
   :target: https://anaconda.org/bioconda/coast
   :alt:   (downloads)
.. |docker_coast| image:: https://quay.io/repository/biocontainers/coast/status
   :target: https://quay.io/repository/biocontainers/coast
.. _`coast/tags`: https://quay.io/repository/biocontainers/coast?tab=tags


.. raw:: html

    <script>
        var package = "coast";
        var versions = ["0.2.0","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coast/README.html