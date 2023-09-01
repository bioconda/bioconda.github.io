:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastliquidassociation'
.. highlight: bash

bioconductor-fastliquidassociation
==================================

.. conda:recipe:: bioconductor-fastliquidassociation
   :replaces_section_title:
   :noindex:

   functions for genome\-wide application of Liquid Association

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fastLiquidAssociation.html
   :license: GPL-2
   :recipe: /`bioconductor-fastliquidassociation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation/meta.yaml>`_

   This package extends the function of the LiquidAssociation package for genome\-wide application. It integrates a screening method into the LA analysis to reduce the number of triplets to be examined for a high LA value and provides code for use in subsequent significance analyses.


.. conda:package:: bioconductor-fastliquidassociation

   |downloads_bioconductor-fastliquidassociation| |docker_bioconductor-fastliquidassociation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-impute: ``>=1.74.0,<1.75.0``
   :depends bioconductor-liquidassociation: ``>=1.54.0,<1.55.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-hmisc: 
   :depends r-wgcna: 
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

      mamba install bioconductor-fastliquidassociation

   and update with::

      mamba update bioconductor-fastliquidassociation

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fastliquidassociation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fastliquidassociation:<tag>

   (see `bioconductor-fastliquidassociation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fastliquidassociation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastliquidassociation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastliquidassociation
   :alt:   (downloads)
.. |docker_bioconductor-fastliquidassociation| image:: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation
.. _`bioconductor-fastliquidassociation/tags`: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fastliquidassociation";
        var versions = ["1.36.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html