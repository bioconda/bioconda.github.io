:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fccac'
.. highlight: bash

bioconductor-fccac
==================

.. conda:recipe:: bioconductor-fccac
   :replaces_section_title:
   :noindex:

   functional Canonical Correlation Analysis to evaluate Covariance between nucleic acid sequencing datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fCCAC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fccac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fccac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fccac/meta.yaml>`_
   :links: biotools: :biotools:`fccac`

   Computational evaluation of variability across DNA or RNA sequencing datasets is a crucial step in genomics\, as it allows both to evaluate reproducibility of replicates\, and to compare different datasets to identify potential correlations. fCCAC applies functional Canonical Correlation Analysis to allow the assessment of\: \(i\) reproducibility of biological or technical replicates\, analyzing their shared covariance in higher order components\; and \(ii\) the associations between different datasets. fCCAC represents a more sophisticated approach that complements Pearson correlation of genomic coverage.


.. conda:package:: bioconductor-fccac

   |downloads_bioconductor-fccac| |docker_bioconductor-fccac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomation: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-fda: 
   :depends r-ggplot2: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fccac

   and update with::

      conda update bioconductor-fccac

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fccac:<tag>

   (see `bioconductor-fccac/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fccac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fccac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fccac
   :alt:   (downloads)
.. |docker_bioconductor-fccac| image:: https://quay.io/repository/biocontainers/bioconductor-fccac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fccac
.. _`bioconductor-fccac/tags`: https://quay.io/repository/biocontainers/bioconductor-fccac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fccac";
        var versions = ["1.26.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fccac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fccac/README.html