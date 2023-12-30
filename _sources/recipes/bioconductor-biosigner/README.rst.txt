:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biosigner'
.. highlight: bash

bioconductor-biosigner
======================

.. conda:recipe:: bioconductor-biosigner
   :replaces_section_title:
   :noindex:

   Signature discovery from omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biosigner.html
   :license: CeCILL
   :recipe: /`bioconductor-biosigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biosigner/meta.yaml>`_
   :links: biotools: :biotools:`biosigner`, doi: :doi:`10.3389/fmolb.2016.00026`

   Feature selection is critical in omics data analysis to extract restricted and meaningful molecular signatures from complex and high\-dimension data\, and to build robust classifiers. This package implements a new method to assess the relevance of the variables for the prediction performances of the classifier. The approach can be run in parallel with the PLS\-DA\, Random Forest\, and SVM binary classifiers. The signatures and the corresponding \'restricted\' models are returned\, enabling future predictions on new datasets. A Galaxy implementation of the package is available within the Workflow4metabolomics.org online infrastructure for computational metabolomics.


.. conda:package:: bioconductor-biosigner

   |downloads_bioconductor-biosigner| |docker_bioconductor-biosigner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.2-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.2-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.1.10-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-multiassayexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-multidataset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-ropls: ``>=1.34.0,<1.35.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-biosigner

   and update with::

      mamba update bioconductor-biosigner

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biosigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biosigner:<tag>

   (see `bioconductor-biosigner/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biosigner| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biosigner.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biosigner
   :alt:   (downloads)
.. |docker_bioconductor-biosigner| image:: https://quay.io/repository/biocontainers/bioconductor-biosigner/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biosigner
.. _`bioconductor-biosigner/tags`: https://quay.io/repository/biocontainers/bioconductor-biosigner?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biosigner";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biosigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biosigner/README.html