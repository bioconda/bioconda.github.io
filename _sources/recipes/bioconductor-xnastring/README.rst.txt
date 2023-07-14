:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xnastring'
.. highlight: bash

bioconductor-xnastring
======================

.. conda:recipe:: bioconductor-xnastring
   :replaces_section_title:
   :noindex:

   Efficient Manipulation of Modified Oligonucleotide Sequences

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/XNAString.html
   :license: GPL-2
   :recipe: /`bioconductor-xnastring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xnastring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xnastring/meta.yaml>`_

   The XNAString package allows for description of base sequences and associated chemical modifications in a single object. XNAString is able to capture single stranded\, as well as double stranded molecules. Chemical modifications are represented as independent strings associated with different features of the molecules \(base sequence\, sugar sequence\, backbone sequence\, modifications\) and can be read or written to a HELM notation. It also enables secondary structure prediction using RNAfold from ViennaRNA. XNAString is designed to be efficient representation of nucleic\-acid based therapeutics\, therefore it stores information about target sequences and provides interface for matching and alignment functions from Biostrings package.


.. conda:package:: bioconductor-xnastring

   |downloads_bioconductor-xnastring| |docker_bioconductor-xnastring|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-formattable: 
   :depends r-future.apply: 
   :depends r-rcpp: 
   :depends r-stringi: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xnastring

   and update with::

      conda update bioconductor-xnastring

   or use the docker container::

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
        var versions = ["1.8.0","1.6.0","1.6.0","1.2.2","1.2.2"];
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