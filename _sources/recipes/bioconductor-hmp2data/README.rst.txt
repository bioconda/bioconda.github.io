:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hmp2data'
.. highlight: bash

bioconductor-hmp2data
=====================

.. conda:recipe:: bioconductor-hmp2data
   :replaces_section_title:
   :noindex:

   16s rRNA sequencing data from the Human Microbiome Project 2

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/HMP2Data.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hmp2data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp2data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hmp2data/meta.yaml>`_

   HMP2Data is a Bioconductor package of the Human Microbiome Project 2 \(HMP2\) 16S rRNA sequencing data. Processed data is provided as phyloseq\, SummarizedExperiment\, and MultiAssayExperiment class objects. Individual matrices and data.frames used for building these S4 class objects are also provided in the package.


.. conda:package:: bioconductor-hmp2data

   |downloads_bioconductor-hmp2data| |docker_bioconductor-hmp2data|

   :versions:
      
      

      ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.2.0,<3.3.0``
   :depends bioconductor-experimenthub: ``>=2.2.0,<2.3.0``
   :depends bioconductor-multiassayexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-phyloseq: ``>=1.38.0,<1.39.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-kableextra: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hmp2data

   and update with::

      conda update bioconductor-hmp2data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hmp2data:<tag>

   (see `bioconductor-hmp2data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hmp2data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hmp2data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hmp2data
   :alt:   (downloads)
.. |docker_bioconductor-hmp2data| image:: https://quay.io/repository/biocontainers/bioconductor-hmp2data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hmp2data
.. _`bioconductor-hmp2data/tags`: https://quay.io/repository/biocontainers/bioconductor-hmp2data?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hmp2data";
        var versions = ["1.8.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hmp2data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hmp2data/README.html