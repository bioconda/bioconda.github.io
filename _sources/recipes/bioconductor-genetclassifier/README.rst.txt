:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genetclassifier'
.. highlight: bash

bioconductor-genetclassifier
============================

.. conda:recipe:: bioconductor-genetclassifier
   :replaces_section_title:
   :noindex:

   Classify diseases and build associated gene networks using gene expression profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/geNetClassifier.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-genetclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genetclassifier/meta.yaml>`_
   :links: biotools: :biotools:`genetclassifier`

   Comprehensive package to automatically train and validate a multi\-class SVM classifier based on gene expression data. Provides transparent selection of gene markers\, their coexpression networks\, and an interface to query the classifier.


.. conda:package:: bioconductor-genetclassifier

   |downloads_bioconductor-genetclassifier| |docker_bioconductor-genetclassifier|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-ebarrays: ``>=2.64.0,<2.65.0``
   :depends bioconductor-minet: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genetclassifier

   and update with::

      mamba update bioconductor-genetclassifier

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genetclassifier

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genetclassifier:<tag>

   (see `bioconductor-genetclassifier/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genetclassifier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genetclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genetclassifier
   :alt:   (downloads)
.. |docker_bioconductor-genetclassifier| image:: https://quay.io/repository/biocontainers/bioconductor-genetclassifier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genetclassifier
.. _`bioconductor-genetclassifier/tags`: https://quay.io/repository/biocontainers/bioconductor-genetclassifier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genetclassifier";
        var versions = ["1.40.0","1.38.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genetclassifier/README.html