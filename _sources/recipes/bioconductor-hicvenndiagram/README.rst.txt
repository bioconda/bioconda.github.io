:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicvenndiagram'
.. highlight: bash

bioconductor-hicvenndiagram
===========================

.. conda:recipe:: bioconductor-hicvenndiagram
   :replaces_section_title:
   :noindex:

   Venn Diagram for genomic interaction data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/hicVennDiagram.html
   :license: GPL-3
   :recipe: /`bioconductor-hicvenndiagram <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicvenndiagram>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicvenndiagram/meta.yaml>`_

   A package to generate high\-resolution Venn and Upset plots for genomic interaction data from HiC\, ChIA\-PET\, HiChIP\, PLAC\-Seq\, Hi\-TrAC\, HiCAR and etc. The package generates plots specifically crafted to eliminate the deceptive visual representation caused by the counts method.


.. conda:package:: bioconductor-hicvenndiagram

   |downloads_bioconductor-hicvenndiagram| |docker_bioconductor-hicvenndiagram|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-interactionset: ``>=1.30.0,<1.31.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-complexupset: 
   :depends r-eulerr: 
   :depends r-ggplot2: 
   :depends r-htmlwidgets: 
   :depends r-reshape2: 
   :depends r-svglite: 
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

      mamba install bioconductor-hicvenndiagram

   and update with::

      mamba update bioconductor-hicvenndiagram

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hicvenndiagram

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hicvenndiagram:<tag>

   (see `bioconductor-hicvenndiagram/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hicvenndiagram| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicvenndiagram.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicvenndiagram
   :alt:   (downloads)
.. |docker_bioconductor-hicvenndiagram| image:: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram
.. _`bioconductor-hicvenndiagram/tags`: https://quay.io/repository/biocontainers/bioconductor-hicvenndiagram?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicvenndiagram";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicvenndiagram/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicvenndiagram/README.html