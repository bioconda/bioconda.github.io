:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miasim'
.. highlight: bash

bioconductor-miasim
===================

.. conda:recipe:: bioconductor-miasim
   :replaces_section_title:
   :noindex:

   Microbiome Data Simulation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miaSim.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-miasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim/meta.yaml>`_

   Microbiome time series simulation with generalized Lotka\-Volterra model\, Self\-Organized Instability \(SOI\)\, and other models. Hubbell\'s Neutral model is used to determine the abundance matrix. The resulting abundance matrix is applied to \(Tree\)SummarizedExperiment objects.


.. conda:package:: bioconductor-miasim

   |downloads_bioconductor-miasim| |docker_bioconductor-miasim|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-matrixgenerics: ``>=1.18.0,<1.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.14.0,<2.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-desolve: 
   :depends r-powerlaw: 
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

      mamba install bioconductor-miasim

   and update with::

      mamba update bioconductor-miasim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-miasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-miasim:<tag>

   (see `bioconductor-miasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-miasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miasim
   :alt:   (downloads)
.. |docker_bioconductor-miasim| image:: https://quay.io/repository/biocontainers/bioconductor-miasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miasim
.. _`bioconductor-miasim/tags`: https://quay.io/repository/biocontainers/bioconductor-miasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miasim";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miasim/README.html