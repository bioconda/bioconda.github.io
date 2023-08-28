:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-combi'
.. highlight: bash

bioconductor-combi
==================

.. conda:recipe:: bioconductor-combi
   :replaces_section_title:
   :noindex:

   Compositional omics model based visual integration

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/combi.html
   :license: GPL-2
   :recipe: /`bioconductor-combi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-combi/meta.yaml>`_

   This explorative ordination method combines quasi\-likelihood estimation\, compositional regression models and latent variable models for integrative visualization of several omics datasets. Both unconstrained and constrained integration are available. The results are shown as interpretable\, compositional multiplots.


.. conda:package:: bioconductor-combi

   |downloads_bioconductor-combi| |docker_bioconductor-combi|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-phyloseq: ``>=1.44.0,<1.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-alabama: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-bb: 
   :depends r-cobs: 
   :depends r-dbi: 
   :depends r-ggplot2: 
   :depends r-matrix: 
   :depends r-nleqslv: 
   :depends r-reshape2: 
   :depends r-tensor: 
   :depends r-vegan: 
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

      mamba install bioconductor-combi

   and update with::

      mamba update bioconductor-combi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-combi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-combi:<tag>

   (see `bioconductor-combi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-combi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-combi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-combi
   :alt:   (downloads)
.. |docker_bioconductor-combi| image:: https://quay.io/repository/biocontainers/bioconductor-combi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-combi
.. _`bioconductor-combi/tags`: https://quay.io/repository/biocontainers/bioconductor-combi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-combi";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-combi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-combi/README.html