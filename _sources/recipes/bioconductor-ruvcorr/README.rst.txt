:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ruvcorr'
.. highlight: bash

bioconductor-ruvcorr
====================

.. conda:recipe:: bioconductor-ruvcorr
   :replaces_section_title:
   :noindex:

   Removal of unwanted variation for gene\-gene correlations and related analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/RUVcorr.html
   :license: GPL-2
   :recipe: /`bioconductor-ruvcorr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ruvcorr/meta.yaml>`_

   RUVcorr allows to apply global removal of unwanted variation \(ridged version of RUV\) to real and simulated gene expression data.


.. conda:package:: bioconductor-ruvcorr

   |downloads_bioconductor-ruvcorr| |docker_bioconductor-ruvcorr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-bladderbatch: ``>=1.38.0,<1.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corrplot: 
   :depends r-gridextra: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-psych: 
   :depends r-reshape2: 
   :depends r-snowfall: 
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

      mamba install bioconductor-ruvcorr

   and update with::

      mamba update bioconductor-ruvcorr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ruvcorr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ruvcorr:<tag>

   (see `bioconductor-ruvcorr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ruvcorr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ruvcorr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ruvcorr
   :alt:   (downloads)
.. |docker_bioconductor-ruvcorr| image:: https://quay.io/repository/biocontainers/bioconductor-ruvcorr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ruvcorr
.. _`bioconductor-ruvcorr/tags`: https://quay.io/repository/biocontainers/bioconductor-ruvcorr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ruvcorr";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ruvcorr/README.html