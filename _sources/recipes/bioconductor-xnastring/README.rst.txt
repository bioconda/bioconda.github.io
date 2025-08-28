:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xnastring'
.. highlight: bash

bioconductor-xnastring
======================

.. conda:recipe:: bioconductor-xnastring
   :replaces_section_title:
   :noindex:

   Efficient Manipulation of Modified Oligonucleotide Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/XNAString.html
   :license: GPL-2
   :recipe: /`bioconductor-xnastring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xnastring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xnastring/meta.yaml>`_

   The XNAString package allows for description of base sequences and associated chemical modifications in a single object. XNAString is able to capture single stranded\, as well as double stranded molecules. Chemical modifications are represented as independent strings associated with different features of the molecules \(base sequence\, sugar sequence\, backbone sequence\, modifications\) and can be read or written to a HELM notation. It also enables secondary structure prediction using RNAfold from ViennaRNA. XNAString is designed to be efficient representation of nucleic\-acid based therapeutics\, therefore it stores information about target sequences and provides interface for matching and alignment functions from Biostrings and pwalign packages.


.. conda:package:: bioconductor-xnastring

   |downloads_bioconductor-xnastring| |docker_bioconductor-xnastring|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-formattable: 
   :depends r-future.apply: 
   :depends r-rcpp: 
   :depends r-stringi: 
   :depends r-stringr: 
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

      mamba install bioconductor-xnastring

   and update with::

      mamba update bioconductor-xnastring

  To create a new environment, run::

      mamba create --name myenvname bioconductor-xnastring

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xnastring:<tag>

   (see `bioconductor-xnastring/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xnastring| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xnastring.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xnastring
   :alt:   (downloads)
.. |docker_bioconductor-xnastring| image:: https://quay.io/repository/biocontainers/bioconductor-xnastring/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xnastring
.. _`bioconductor-xnastring/tags`: https://quay.io/repository/biocontainers/bioconductor-xnastring?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xnastring";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xnastring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xnastring/README.html