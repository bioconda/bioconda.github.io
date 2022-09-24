:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-distinct'
.. highlight: bash

bioconductor-distinct
=====================

.. conda:recipe:: bioconductor-distinct
   :replaces_section_title:
   :noindex:

   distinct\: a method for differential analyses via hierarchical permutation tests

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/distinct.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-distinct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-distinct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-distinct/meta.yaml>`_

   distinct is a statistical method to perform differential testing between two or more groups of distributions\; differential testing is performed via hierarchical non\-parametric permutation tests on the cumulative distribution functions \(cdfs\) of each sample. While most methods for differential expression target differences in the mean abundance between conditions\, distinct\, by comparing full cdfs\, identifies\, both\, differential patterns involving changes in the mean\, as well as more subtle variations that do not involve the mean \(e.g.\, unimodal vs. bi\-modal distributions with the same mean\). distinct is a general and flexible tool\: due to its fully non\-parametric nature\, which makes no assumptions on how the data was generated\, it can be applied to a variety of datasets. It is particularly suitable to perform differential state analyses on single cell data \(i.e.\, differential analyses within sub\-populations of cells\)\, such as single cell RNA sequencing \(scRNA\-seq\) and high\-dimensional flow or mass cytometry \(HDCyto\) data. To use distinct one needs data from two or more groups of samples \(i.e.\, experimental conditions\)\, with at least 2 samples \(i.e.\, biological replicates\) per group.


.. conda:package:: bioconductor-distinct

   |downloads_bioconductor-distinct| |docker_bioconductor-distinct|

   :versions:
      
      

      ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-scater: ``>=1.22.0,<1.23.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-distinct

   and update with::

      conda update bioconductor-distinct

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-distinct:<tag>

   (see `bioconductor-distinct/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-distinct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-distinct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-distinct
   :alt:   (downloads)
.. |docker_bioconductor-distinct| image:: https://quay.io/repository/biocontainers/bioconductor-distinct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-distinct
.. _`bioconductor-distinct/tags`: https://quay.io/repository/biocontainers/bioconductor-distinct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-distinct";
        var versions = ["1.6.0","1.6.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-distinct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-distinct/README.html