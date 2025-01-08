:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adapt'
.. highlight: bash

bioconductor-adapt
==================

.. conda:recipe:: bioconductor-adapt
   :replaces_section_title:
   :noindex:

   Analysis of Microbiome Differential Abundance by Pooling Tobit Models

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ADAPT.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-adapt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adapt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adapt/meta.yaml>`_

   ADAPT carries out differential abundance analysis for microbiome metagenomics data in phyloseq format. It has two innovations. One is to treat zero counts as left censored and use Tobit models for log count ratios. The other is an innovative way to find non\-differentially abundant taxa as reference\, then use the reference taxa to find the differentially abundant ones.


.. conda:package:: bioconductor-adapt

   |downloads_bioconductor-adapt| |docker_bioconductor-adapt|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0``
   :depends bioconductor-phyloseq: ``>=1.50.0,<1.51.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: ``>=3.4.1``
   :depends r-ggrepel: ``>=0.9.1``
   :depends r-rcpp: ``>=1.0.8``
   :depends r-rcpparmadillo: ``>=0.10.8``
   :depends r-rcppparallel: ``>=5.1.5``
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

      mamba install bioconductor-adapt

   and update with::

      mamba update bioconductor-adapt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adapt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adapt:<tag>

   (see `bioconductor-adapt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adapt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adapt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adapt
   :alt:   (downloads)
.. |docker_bioconductor-adapt| image:: https://quay.io/repository/biocontainers/bioconductor-adapt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adapt
.. _`bioconductor-adapt/tags`: https://quay.io/repository/biocontainers/bioconductor-adapt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adapt";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adapt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adapt/README.html