:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conifer'
.. highlight: bash

conifer
=======

.. conda:recipe:: conifer
   :replaces_section_title:
   :noindex:

   Calculate confidence scores from Kraken2 output

   :homepage: https://github.com/Ivarz/Conifer/
   :license: BSD / BSD-2-Clause
   :recipe: /`conifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conifer/meta.yaml>`_

   


.. conda:package:: conifer

   |downloads_conifer| |docker_conifer|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install conifer

   and update with::

      conda update conifer

   or use the docker container::

      docker pull quay.io/biocontainers/conifer:<tag>

   (see `conifer/tags`_ for valid values for ``<tag>``)


.. |downloads_conifer| image:: https://img.shields.io/conda/dn/bioconda/conifer.svg?style=flat
   :target: https://anaconda.org/bioconda/conifer
   :alt:   (downloads)
.. |docker_conifer| image:: https://quay.io/repository/biocontainers/conifer/status
   :target: https://quay.io/repository/biocontainers/conifer
.. _`conifer/tags`: https://quay.io/repository/biocontainers/conifer?tab=tags


.. raw:: html

    <script>
        var package = "conifer";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conifer/README.html