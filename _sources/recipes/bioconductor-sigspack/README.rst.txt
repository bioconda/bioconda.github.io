:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigspack'
.. highlight: bash

bioconductor-sigspack
=====================

.. conda:recipe:: bioconductor-sigspack
   :replaces_section_title:
   :noindex:

   Mutational Signature Estimation for Single Samples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SigsPack.html
   :license: GPL-3
   :recipe: /`bioconductor-sigspack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigspack/meta.yaml>`_

   Single sample estimation of exposure to mutational signatures. Exposures to known mutational signatures are estimated for single samples\, based on quadratic programming algorithms. Bootstrapping the input mutational catalogues provides estimations on the stability of these exposures. The effect of the sequence composition of mutational context can be taken into account by normalising the catalogues.


.. conda:package:: bioconductor-sigspack

   |downloads_bioconductor-sigspack| |docker_bioconductor-sigspack|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-quadprog: ``>=1.5-5``
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

      mamba install bioconductor-sigspack

   and update with::

      mamba update bioconductor-sigspack

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sigspack

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigspack:<tag>

   (see `bioconductor-sigspack/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigspack| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigspack.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigspack
   :alt:   (downloads)
.. |docker_bioconductor-sigspack| image:: https://quay.io/repository/biocontainers/bioconductor-sigspack/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigspack
.. _`bioconductor-sigspack/tags`: https://quay.io/repository/biocontainers/bioconductor-sigspack?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigspack";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigspack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigspack/README.html