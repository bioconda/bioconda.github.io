:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ropls'
.. highlight: bash

bioconductor-ropls
==================

.. conda:recipe:: bioconductor-ropls
   :replaces_section_title:
   :noindex:

   PCA\, PLS\(\-DA\) and OPLS\(\-DA\) for multivariate analysis and feature selection of omics data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ropls.html
   :license: CeCILL
   :recipe: /`bioconductor-ropls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ropls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ropls/meta.yaml>`_
   :links: biotools: :biotools:`ropls`

   Latent variable modeling with Principal Component Analysis\(PCA\) and Partial Least Squares \(PLS\) are powerful methods for visualization\, regression\, classification\, and feature selection of omics data where the number of variables exceeds the number of samples and with multicollinearity among variables. Orthogonal Partial Least Squares \(OPLS\) enables to separately model the variation correlated \(predictive\) to the factor of interest and the uncorrelated \(orthogonal\) variation. While performing similarly to PLS\, OPLS facilitates interpretation. Successful applications of these chemometrics techniques include spectroscopic data such as Raman spectroscopy\, nuclear magnetic resonance \(NMR\)\, mass spectrometry \(MS\) in metabolomics and proteomics\, but also transcriptomics data. In addition to scores\, loadings and weights plots\, the package provides metrics and graphics to determine the optimal number of components \(e.g. with the R2 and Q2 coefficients\)\, check the validity of the model by permutation testing\, detect outliers\, and perform feature selection \(e.g. with Variable Importance in Projection or regression coefficients\). The package can be accessed via a user interface on the Workflow4Metabolomics.org online resource for computational metabolomics \(built upon the Galaxy environment\).


.. conda:package:: bioconductor-ropls

   |downloads_bioconductor-ropls| |docker_bioconductor-ropls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.4.2-0``,  ``1.2.14-1``,  ``1.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-multidataset: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ropls

   and update with::

      conda update bioconductor-ropls

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ropls:<tag>

   (see `bioconductor-ropls/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ropls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ropls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ropls
   :alt:   (downloads)
.. |docker_bioconductor-ropls| image:: https://quay.io/repository/biocontainers/bioconductor-ropls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ropls
.. _`bioconductor-ropls/tags`: https://quay.io/repository/biocontainers/bioconductor-ropls?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ropls";
        var versions = ["1.24.0","1.22.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ropls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ropls/README.html