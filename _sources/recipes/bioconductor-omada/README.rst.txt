:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omada'
.. highlight: bash

bioconductor-omada
==================

.. conda:recipe:: bioconductor-omada
   :replaces_section_title:
   :noindex:

   Machine learning tools for automated transcriptome clustering analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/omada.html
   :license: GPL-3
   :recipe: /`bioconductor-omada <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omada/meta.yaml>`_

   Symptomatic heterogeneity in complex diseases reveals differences in molecular states that need to be investigated. However\, selecting the numerous parameters of an exploratory clustering analysis in RNA profiling studies requires deep understanding of machine learning and extensive computational experimentation. Tools that assist with such decisions without prior field knowledge are nonexistent and further gene association analyses need to be performed independently. We have developed a suite of tools to automate these processes and make robust unsupervised clustering of transcriptomic data more accessible through automated machine learning based functions. The efficiency of each tool was tested with four datasets characterised by different expression signal strengths. Our toolkit’s decisions reflected the real number of stable partitions in datasets where the subgroups are discernible. Even in datasets with less clear biological distinctions\, stable subgroups with different expression profiles and clinical associations were found.


.. conda:package:: bioconductor-omada

   |downloads_bioconductor-omada| |docker_bioconductor-omada|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-clustercrit: ``>=1.2.8``
   :depends r-clvalid: ``>=0.7``
   :depends r-dicer: ``>=0.6.0``
   :depends r-dplyr: ``>=1.0.7``
   :depends r-fpc: ``>=2.2-9``
   :depends r-ggplot2: ``>=3.3.5``
   :depends r-glmnet: ``>=4.1.3``
   :depends r-kernlab: ``>=0.9-29``
   :depends r-pdfcluster: ``>=1.0-3``
   :depends r-rcpp: ``>=1.0.7``
   :depends r-reshape: ``>=0.8.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omada

   and update with::

      conda update bioconductor-omada

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omada:<tag>

   (see `bioconductor-omada/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omada| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omada.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omada
   :alt:   (downloads)
.. |docker_bioconductor-omada| image:: https://quay.io/repository/biocontainers/bioconductor-omada/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omada
.. _`bioconductor-omada/tags`: https://quay.io/repository/biocontainers/bioconductor-omada?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omada";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omada/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omada/README.html