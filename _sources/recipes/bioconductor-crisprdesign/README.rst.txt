:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprdesign'
.. highlight: bash

bioconductor-crisprdesign
=========================

.. conda:recipe:: bioconductor-crisprdesign
   :replaces_section_title:
   :noindex:

   Comprehensive design of CRISPR gRNAs for nucleases and base editors

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/crisprDesign.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprdesign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprdesign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprdesign/meta.yaml>`_

   Provides a comprehensive suite of functions to design and annotate CRISPR guide RNA \(gRNAs\) sequences. This includes on\- and off\-target search\, on\-target efficiency scoring\, off\-target scoring\, full gene and TSS contextual annotations\, and SNP annotation \(human only\). It currently support five types of CRISPR modalities \(modes of perturbations\)\: CRISPR knockout\, CRISPR activation\, CRISPR inhibition\, CRISPR base editing\, and CRISPR knockdown. All types of CRISPR nucleases are supported\, including DNA\- and RNA\-target nucleases such as Cas9\, Cas12a\, and Cas13d. All types of base editors are also supported. gRNA design can be performed on reference genomes\, transcriptomes\, and custom DNA and RNA sequences. Both unpaired and paired gRNA designs are enabled.


.. conda:package:: bioconductor-crisprdesign

   |downloads_bioconductor-crisprdesign| |docker_bioconductor-crisprdesign|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-crisprbase: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprbowtie: ``>=1.6.0,<1.7.0``
   :depends bioconductor-crisprscore: ``>=1.6.0,<1.7.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-matrixgenerics: ``>=1.14.0,<1.15.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-variantannotation: ``>=1.48.0,<1.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-crisprdesign

   and update with::

      mamba update bioconductor-crisprdesign

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprdesign

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprdesign:<tag>

   (see `bioconductor-crisprdesign/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprdesign| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprdesign.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprdesign
   :alt:   (downloads)
.. |docker_bioconductor-crisprdesign| image:: https://quay.io/repository/biocontainers/bioconductor-crisprdesign/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprdesign
.. _`bioconductor-crisprdesign/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprdesign?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprdesign";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprdesign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprdesign/README.html