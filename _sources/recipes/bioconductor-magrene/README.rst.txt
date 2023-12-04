:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magrene'
.. highlight: bash

bioconductor-magrene
====================

.. conda:recipe:: bioconductor-magrene
   :replaces_section_title:
   :noindex:

   Motif Analysis In Gene Regulatory Networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/magrene.html
   :license: GPL-3
   :recipe: /`bioconductor-magrene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magrene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magrene/meta.yaml>`_

   magrene allows the identification and analysis of graph motifs in \(duplicated\) gene regulatory networks \(GRNs\)\, including lambda\, V\, PPI V\, delta\, and bifan motifs. GRNs can be tested for motif enrichment by comparing motif frequencies to a null distribution generated from degree\-preserving simulated GRNs. Motif frequencies can be analyzed in the context of gene duplications to explore the impact of small\-scale and whole\-genome duplications on gene regulatory networks. Finally\, users can calculate interaction similarity for gene pairs based on the Sorensen\-Dice similarity index.


.. conda:package:: bioconductor-magrene

   |downloads_bioconductor-magrene| |docker_bioconductor-magrene|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-magrene

   and update with::

      mamba update bioconductor-magrene

  To create a new environment, run::

      mamba create --name myenvname bioconductor-magrene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-magrene:<tag>

   (see `bioconductor-magrene/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-magrene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magrene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magrene
   :alt:   (downloads)
.. |docker_bioconductor-magrene| image:: https://quay.io/repository/biocontainers/bioconductor-magrene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magrene
.. _`bioconductor-magrene/tags`: https://quay.io/repository/biocontainers/bioconductor-magrene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magrene";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magrene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magrene/README.html