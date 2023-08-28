:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uncoverapplib'
.. highlight: bash

bioconductor-uncoverapplib
==========================

.. conda:recipe:: bioconductor-uncoverapplib
   :replaces_section_title:
   :noindex:

   Interactive graphical application for clinical assessment of sequence coverage at the base\-pair level

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/uncoverappLib.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-uncoverapplib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uncoverapplib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uncoverapplib/meta.yaml>`_

   a Shiny application containing a suite of graphical and statistical tools to support clinical assessment of low coverage regions.It displays three web pages each providing a different analysis module\: Coverage analysis\, calculate AF by allele frequency app and binomial distribution. uncoverAPP provides a statisticl summary of coverage given target file or genes name.


.. conda:package:: bioconductor-uncoverapplib

   |downloads_bioconductor-uncoverapplib| |docker_bioconductor-uncoverapplib|

   :versions:
      
      

      ``1.10.0-0``,  ``1.7.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends bioconductor-ensdb.hsapiens.v75: ``>=2.99.0,<2.100.0``
   :depends bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-gviz: ``>=1.44.0,<1.45.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-organismdbi: ``>=1.42.0,<1.43.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.17.0,<3.18.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-condformat: 
   :depends r-dt: 
   :depends r-markdown: 
   :depends r-openxlsx: 
   :depends r-processx: 
   :depends r-rappdirs: 
   :depends r-rlist: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinyjs: 
   :depends r-shinywidgets: 
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

      mamba install bioconductor-uncoverapplib

   and update with::

      mamba update bioconductor-uncoverapplib

  To create a new environment, run::

      mamba create --name myenvname bioconductor-uncoverapplib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-uncoverapplib:<tag>

   (see `bioconductor-uncoverapplib/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-uncoverapplib| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uncoverapplib.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uncoverapplib
   :alt:   (downloads)
.. |docker_bioconductor-uncoverapplib| image:: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib
.. _`bioconductor-uncoverapplib/tags`: https://quay.io/repository/biocontainers/bioconductor-uncoverapplib?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-uncoverapplib";
        var versions = ["1.10.0","1.7.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uncoverapplib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uncoverapplib/README.html