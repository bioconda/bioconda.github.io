:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motif2site'
.. highlight: bash

bioconductor-motif2site
=======================

.. conda:recipe:: bioconductor-motif2site
   :replaces_section_title:
   :noindex:

   Detect binding sites from motifs and ChIP\-seq experiments\, and compare binding sites across conditions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Motif2Site.html
   :license: GPL-2
   :recipe: /`bioconductor-motif2site <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motif2site/meta.yaml>`_

   Detect binding sites using motifs IUPAC sequence or bed coordinates and ChIP\-seq experiments in bed or bam format. Combine\/compare binding sites across experiments\, tissues\, or conditions. All normalization and differential steps are done using TMM\-GLM method. Signal decomposition is done by setting motifs as the centers of the mixture of normal distribution curves.


.. conda:package:: bioconductor-motif2site

   |downloads_bioconductor-motif2site| |docker_bioconductor-motif2site|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-mass: 
   :depends r-mixtools: 
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

      mamba install bioconductor-motif2site

   and update with::

      mamba update bioconductor-motif2site

  To create a new environment, run::

      mamba create --name myenvname bioconductor-motif2site

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-motif2site:<tag>

   (see `bioconductor-motif2site/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-motif2site| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motif2site.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motif2site
   :alt:   (downloads)
.. |docker_bioconductor-motif2site| image:: https://quay.io/repository/biocontainers/bioconductor-motif2site/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motif2site
.. _`bioconductor-motif2site/tags`: https://quay.io/repository/biocontainers/bioconductor-motif2site?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motif2site";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motif2site/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motif2site/README.html