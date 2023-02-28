:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-jackstraw'
.. highlight: bash

r-jackstraw
===========

.. conda:recipe:: r-jackstraw
   :replaces_section_title:
   :noindex:

   Test for association between the observed data and their systematic patterns of variations. Systematic patterns may be captured by latent variables using principal component analysis \(PCA\)\, factor analysis \(FA\)\, and related methods. The jackstraw enables statistical testing for association between observed variables and latent variables\, as captured by PCs or other estimates. Similarly\, unsupervised clustering\, such as K\-means clustering\, partition around medoids \(PAM\)\, and others\, finds subpopulations among the observed variables. The jackstraw estimates statistical significance of cluster membership\, including unsupervised evaluation of cell identities in single cell RNA\-seq. P\-values and posterior probabilities allows one to rigorously evaluate the strength of cluster membership assignments.

   :homepage: https://CRAN.R-project.org/package=jackstraw
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-jackstraw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jackstraw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-jackstraw/meta.yaml>`_

   


.. conda:package:: r-jackstraw

   |downloads_r-jackstraw| |docker_r-jackstraw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.8-0</code>,  <code>1.3.1-1</code>,  <code>1.3.1-0</code>,  <code>1.3-6</code>,  <code>1.3-5</code>,  <code>1.3-4</code>,  <code>1.3-3</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  </span></summary>
      

      ``1.3.8-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-qvalue: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-cluster: 
   :depends r-clusterr: 
   :depends r-corpcor: 
   :depends r-irlba: 
   :depends r-rsvd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-jackstraw

   and update with::

      conda update r-jackstraw

   or use the docker container::

      docker pull quay.io/biocontainers/r-jackstraw:<tag>

   (see `r-jackstraw/tags`_ for valid values for ``<tag>``)


.. |downloads_r-jackstraw| image:: https://img.shields.io/conda/dn/bioconda/r-jackstraw.svg?style=flat
   :target: https://anaconda.org/bioconda/r-jackstraw
   :alt:   (downloads)
.. |docker_r-jackstraw| image:: https://quay.io/repository/biocontainers/r-jackstraw/status
   :target: https://quay.io/repository/biocontainers/r-jackstraw
.. _`r-jackstraw/tags`: https://quay.io/repository/biocontainers/r-jackstraw?tab=tags


.. raw:: html

    <script>
        var package = "r-jackstraw";
        var versions = ["1.3.8","1.3.1","1.3.1","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-jackstraw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-jackstraw/README.html