:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-deepsnv'
.. highlight: bash

bioconductor-deepsnv
====================

.. conda:recipe:: bioconductor-deepsnv
   :replaces_section_title:
   :noindex:

   Detection of subclonal SNVs in deep sequencing data.

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/deepSNV.html
   :license: GPL-3
   :recipe: /`bioconductor-deepsnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-deepsnv/meta.yaml>`_
   :links: biotools: :biotools:`deepsnv`

   This package provides provides quantitative variant callers for detecting subclonal mutations in ultra\-deep \(\>\=100x coverage\) sequencing experiments. The deepSNV algorithm is used for a comparative setup with a control experiment of the same loci and uses a beta\-binomial model and a likelihood ratio test to discriminate sequencing errors and subclonal SNVs. The shearwater algorithm computes a Bayes classifier based on a beta\-binomial model for variant calling with multiple samples for precisely estimating model parameters \- such as local error rates and dispersion \- and prior knowledge\, e.g. from variation data bases such as COSMIC.


.. conda:package:: bioconductor-deepsnv

   |downloads_bioconductor-deepsnv| |docker_bioconductor-deepsnv|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rhtslib: ``>=1.26.0,<1.27.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-deepsnv

   and update with::

      conda update bioconductor-deepsnv

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-deepsnv:<tag>

   (see `bioconductor-deepsnv/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-deepsnv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-deepsnv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-deepsnv
   :alt:   (downloads)
.. |docker_bioconductor-deepsnv| image:: https://quay.io/repository/biocontainers/bioconductor-deepsnv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-deepsnv
.. _`bioconductor-deepsnv/tags`: https://quay.io/repository/biocontainers/bioconductor-deepsnv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-deepsnv";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-deepsnv/README.html