:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sitadela'
.. highlight: bash

bioconductor-sitadela
=====================

.. conda:recipe:: bioconductor-sitadela
   :replaces_section_title:
   :noindex:

   An R package for the easy provision of simple but complete tab\-delimited genomic annotation from a variety of sources and organisms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sitadela.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sitadela <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitadela>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sitadela/meta.yaml>`_

   Provides an interface to build a unified database of genomic annotations and their coordinates \(gene\, transcript and exon levels\). It is aimed to be used when simple tab\-delimited annotations \(or simple GRanges objects\) are required instead of the more complex annotation Bioconductor packages. Also useful when combinatorial annotation elements are reuired\, such as RefSeq coordinates with Ensembl biotypes. Finally\, it can download\, construct and handle annotations with versioned genes and transcripts \(where available\, e.g. RefSeq and latest Ensembl\). This is particularly useful in precision medicine applications where the latter must be reported.


.. conda:package:: bioconductor-sitadela

   |downloads_bioconductor-sitadela| |docker_bioconductor-sitadela|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomicfeatures: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-rsamtools: ``>=2.22.0,<2.23.0``
   :depends bioconductor-rtracklayer: ``>=1.66.0,<1.67.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-txdbmaker: ``>=1.2.0,<1.3.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-sitadela

   and update with::

      mamba update bioconductor-sitadela

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sitadela

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sitadela:<tag>

   (see `bioconductor-sitadela/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sitadela| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sitadela.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sitadela
   :alt:   (downloads)
.. |docker_bioconductor-sitadela| image:: https://quay.io/repository/biocontainers/bioconductor-sitadela/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sitadela
.. _`bioconductor-sitadela/tags`: https://quay.io/repository/biocontainers/bioconductor-sitadela?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sitadela";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sitadela/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sitadela/README.html