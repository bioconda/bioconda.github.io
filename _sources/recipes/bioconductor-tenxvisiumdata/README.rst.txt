:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxvisiumdata'
.. highlight: bash

bioconductor-tenxvisiumdata
===========================

.. conda:recipe:: bioconductor-tenxvisiumdata
   :replaces_section_title:
   :noindex:

   Visium spatial gene expression data by 10X Genomics

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/TENxVisiumData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tenxvisiumdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxvisiumdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxvisiumdata/meta.yaml>`_

   Collection of Visium spatial gene expression datasets by 10X Genomics\, formatted into objects of class SpatialExperiment. Data cover various organisms and tissues\, and include\: single\- and multi\-section experiments\, as well as single sections subjected to both whole transcriptome and targeted panel analysis. Datasets may be used for testing of and as examples in packages\, for tutorials and workflow demonstrations\, or similar purposes.


.. conda:package:: bioconductor-tenxvisiumdata

   |downloads_bioconductor-tenxvisiumdata| |docker_bioconductor-tenxvisiumdata|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-spatialexperiment: ``>=1.4.0,<1.5.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tenxvisiumdata

   and update with::

      conda update bioconductor-tenxvisiumdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tenxvisiumdata:<tag>

   (see `bioconductor-tenxvisiumdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tenxvisiumdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxvisiumdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxvisiumdata
   :alt:   (downloads)
.. |docker_bioconductor-tenxvisiumdata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata
.. _`bioconductor-tenxvisiumdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxvisiumdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxvisiumdata";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxvisiumdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxvisiumdata/README.html