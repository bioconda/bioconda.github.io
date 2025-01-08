:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ledpred'
.. highlight: bash

bioconductor-ledpred
====================

.. conda:recipe:: bioconductor-ledpred
   :replaces_section_title:
   :noindex:

   Learning from DNA to Predict Enhancers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LedPred.html
   :license: MIT | file LICENSE
   :recipe: /`bioconductor-ledpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ledpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ledpred/meta.yaml>`_

   This package aims at creating a predictive model of regulatory sequences used to score unknown sequences based on the content of DNA motifs\, next\-generation sequencing \(NGS\) peaks and signals and other numerical scores of the sequences using supervised classification. The package contains a workflow based on the support vector machine \(SVM\) algorithm that maps features to sequences\, optimize SVM parameters and feature number and creates a model that can be stored and used to score the regulatory potential of unknown sequences.


.. conda:package:: bioconductor-ledpred

   |downloads_bioconductor-ledpred| |docker_bioconductor-ledpred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-akima: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-e1071: ``>=1.6``
   :depends r-ggplot2: 
   :depends r-irr: 
   :depends r-jsonlite: 
   :depends r-plot3d: 
   :depends r-plyr: 
   :depends r-rcurl: 
   :depends r-rocr: 
   :depends r-testthat: 
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

      mamba install bioconductor-ledpred

   and update with::

      mamba update bioconductor-ledpred

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ledpred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ledpred:<tag>

   (see `bioconductor-ledpred/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ledpred| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ledpred.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ledpred
   :alt:   (downloads)
.. |docker_bioconductor-ledpred| image:: https://quay.io/repository/biocontainers/bioconductor-ledpred/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ledpred
.. _`bioconductor-ledpred/tags`: https://quay.io/repository/biocontainers/bioconductor-ledpred?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ledpred";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ledpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ledpred/README.html