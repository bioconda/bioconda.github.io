:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigfeature'
.. highlight: bash

bioconductor-sigfeature
=======================

.. conda:recipe:: bioconductor-sigfeature
   :replaces_section_title:
   :noindex:

   sigFeature\: Significant feature selection using SVM\-RFE \& t\-statistic

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sigFeature.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-sigfeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigfeature/meta.yaml>`_

   This package provides a novel feature selection algorithm for binary classification using support vector machine recursive feature elimination SVM\-RFE and t\-statistic. In this feature selection process\, the selected features are differentially significant between the two classes and also they are good classifier with higher degree of classification accuracy.


.. conda:package:: bioconductor-sigfeature

   |downloads_bioconductor-sigfeature| |docker_bioconductor-sigfeature|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocviews: ``>=1.74.0,<1.75.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: 
   :depends r-matrix: 
   :depends r-nlme: 
   :depends r-openxlsx: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-sparsem: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sigfeature

   and update with::

      mamba update bioconductor-sigfeature

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sigfeature

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigfeature:<tag>

   (see `bioconductor-sigfeature/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigfeature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigfeature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigfeature
   :alt:   (downloads)
.. |docker_bioconductor-sigfeature| image:: https://quay.io/repository/biocontainers/bioconductor-sigfeature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigfeature
.. _`bioconductor-sigfeature/tags`: https://quay.io/repository/biocontainers/bioconductor-sigfeature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigfeature";
        var versions = ["1.24.0","1.20.0","1.18.0","1.16.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigfeature/README.html