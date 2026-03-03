:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdbmaker'
.. highlight: bash

bioconductor-txdbmaker
======================

.. conda:recipe:: bioconductor-txdbmaker
   :replaces_section_title:
   :noindex:

   Tools for making TxDb objects from genomic annotations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/txdbmaker.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdbmaker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdbmaker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdbmaker/meta.yaml>`_

   A set of tools for making TxDb objects from genomic annotations from various sources \(e.g. UCSC\, Ensembl\, and GFF files\). These tools allow the user to download the genomic locations of transcripts\, exons\, and CDS\, for a given assembly\, and to import them in a TxDb object. TxDb objects are implemented in the GenomicFeatures package\, together with flexible methods for extracting the desired features in convenient formats.


.. conda:package:: bioconductor-txdbmaker

   |downloads_bioconductor-txdbmaker| |docker_bioconductor-txdbmaker|

   :versions:
      
      

      ``1.6.2-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends bioconductor-biocio: ``>=1.20.0,<1.21.0``
   :depends bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends bioconductor-ucsc.utils: ``>=1.6.0,<1.7.0``
   :depends r-base: ``>=4.5,<4.6.0a0``
   :depends r-dbi: 
   :depends r-httr: 
   :depends r-rjson: 
   :depends r-rsqlite: ``>=2.0``
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

      mamba install bioconductor-txdbmaker

   and update with::

      mamba update bioconductor-txdbmaker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-txdbmaker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txdbmaker:<tag>

   (see `bioconductor-txdbmaker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txdbmaker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdbmaker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdbmaker
   :alt:   (downloads)
.. |docker_bioconductor-txdbmaker| image:: https://quay.io/repository/biocontainers/bioconductor-txdbmaker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdbmaker
.. _`bioconductor-txdbmaker/tags`: https://quay.io/repository/biocontainers/bioconductor-txdbmaker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdbmaker";
        var versions = ["1.6.2","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdbmaker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdbmaker/README.html