:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-svanumt'
.. highlight: bash

bioconductor-svanumt
====================

.. conda:recipe:: bioconductor-svanumt
   :replaces_section_title:
   :noindex:

   NUMT detection from structural variant calls

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/svaNUMT.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-svanumt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svanumt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-svanumt/meta.yaml>`_

   svaNUMT contains functions for detecting NUMT events from structural variant calls. It takes structural variant calls in GRanges of breakend notation and identifies NUMTs by nuclear\-mitochondrial breakend junctions. The main function reports candidate NUMTs if there is a pair of valid insertion sites found on the nuclear genome within a certain distance threshold. The candidate NUMTs are reported by events.


.. conda:package:: bioconductor-svanumt

   |downloads_bioconductor-svanumt| |docker_bioconductor-svanumt|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-structuralvariantannotation: ``>=1.16.0,<1.17.0``
   :depends bioconductor-variantannotation: ``>=1.46.0,<1.47.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-stringr: 
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

      mamba install bioconductor-svanumt

   and update with::

      mamba update bioconductor-svanumt

  To create a new environment, run::

      mamba create --name myenvname bioconductor-svanumt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-svanumt:<tag>

   (see `bioconductor-svanumt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-svanumt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-svanumt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-svanumt
   :alt:   (downloads)
.. |docker_bioconductor-svanumt| image:: https://quay.io/repository/biocontainers/bioconductor-svanumt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-svanumt
.. _`bioconductor-svanumt/tags`: https://quay.io/repository/biocontainers/bioconductor-svanumt?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-svanumt";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-svanumt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-svanumt/README.html