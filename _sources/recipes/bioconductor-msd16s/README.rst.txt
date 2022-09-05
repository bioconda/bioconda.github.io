:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msd16s'
.. highlight: bash

bioconductor-msd16s
===================

.. conda:recipe:: bioconductor-msd16s
   :replaces_section_title:
   :noindex:

   Healthy and moderate to severe diarrhea 16S expression data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/msd16s.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msd16s <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msd16s/meta.yaml>`_

   Gut 16S sequencing expression data from 992 healthy and moderate\-to\-severe diarrhetic samples used in \'Diarrhea in young children from low\-income countries leads to large\-scale alterations in intestinal microbiota composition\'.


.. conda:package:: bioconductor-msd16s

   |downloads_bioconductor-msd16s| |docker_bioconductor-msd16s|

   :versions:
      
      

      ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-metagenomeseq: ``>=1.36.0,<1.37.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msd16s

   and update with::

      conda update bioconductor-msd16s

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msd16s:<tag>

   (see `bioconductor-msd16s/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msd16s| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msd16s.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msd16s
   :alt:   (downloads)
.. |docker_bioconductor-msd16s| image:: https://quay.io/repository/biocontainers/bioconductor-msd16s/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msd16s
.. _`bioconductor-msd16s/tags`: https://quay.io/repository/biocontainers/bioconductor-msd16s?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msd16s";
        var versions = ["1.14.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msd16s/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msd16s/README.html