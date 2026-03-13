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

      

   
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends on bioconductor-bsgenome: ``>=1.74.0,<1.75.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends on bioconductor-pwalign: ``>=1.2.0,<1.3.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-formattable: 
   :depends on r-future.apply: 
   :depends on r-rcpp: 
   :depends on r-stringi: 
   :depends on r-stringr: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-xnastring

to add into an existing workspace instead, run::

    pixi add bioconductor-xnastring

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xnastring

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xnastring

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xnastring:<tag>

(see `bioconductor-xnastring/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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