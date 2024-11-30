:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedasim'
.. highlight: bash

bioconductor-microbiomedasim
============================

.. conda:recipe:: bioconductor-microbiomedasim
   :replaces_section_title:
   :noindex:

   Microbiome Differential Abundance Simulation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiomeDASim.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomedasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim/meta.yaml>`_

   A toolkit for simulating differential microbiome data designed for longitudinal analyses. Several functional forms may be specified for the mean trend. Observations are drawn from a multivariate normal model. The objective of this package is to be able to simulate data in order to accurately compare different longitudinal methods for differential abundance.


.. conda:package:: bioconductor-microbiomedasim

   |downloads_bioconductor-microbiomedasim| |docker_bioconductor-microbiomedasim|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-metagenomeseq: ``>=1.43.0,<1.44.0``
   :depends bioconductor-phyloseq: ``>=1.46.0,<1.47.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-matrix: 
   :depends r-mvtnorm: 
   :depends r-pbapply: 
   :depends r-tmvtnorm: 
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

      mamba install bioconductor-microbiomedasim

   and update with::

      mamba update bioconductor-microbiomedasim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-microbiomedasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomedasim:<tag>

   (see `bioconductor-microbiomedasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomedasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedasim
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedasim| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim
.. _`bioconductor-microbiomedasim/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomedasim";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html