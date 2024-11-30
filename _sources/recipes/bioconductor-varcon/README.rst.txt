:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-varcon'
.. highlight: bash

bioconductor-varcon
===================

.. conda:recipe:: bioconductor-varcon
   :replaces_section_title:
   :noindex:

   VarCon\: an R package for retrieving neighboring nucleotides of an SNV

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/VarCon.html
   :license: GPL-3
   :recipe: /`bioconductor-varcon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varcon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-varcon/meta.yaml>`_

   VarCon is an R package which converts the positional information from the annotation of an single nucleotide variation \(SNV\) \(either referring to the coding sequence or the reference genomic sequence\). It retrieves the genomic reference sequence around the position of the single nucleotide variation. To asses\, whether the SNV could potentially influence binding of splicing regulatory proteins VarCon calcualtes the HEXplorer score as an estimation. Besides\, VarCon additionally reports splice site strengths of splice sites within the retrieved genomic sequence and any changes due to the SNV.


.. conda:package:: bioconductor-varcon

   |downloads_bioconductor-varcon| |docker_bioconductor-varcon|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-shiny: 
   :depends r-shinycssloaders: 
   :depends r-shinyfiles: 
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

      mamba install bioconductor-varcon

   and update with::

      mamba update bioconductor-varcon

  To create a new environment, run::

      mamba create --name myenvname bioconductor-varcon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-varcon:<tag>

   (see `bioconductor-varcon/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-varcon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-varcon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-varcon
   :alt:   (downloads)
.. |docker_bioconductor-varcon| image:: https://quay.io/repository/biocontainers/bioconductor-varcon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-varcon
.. _`bioconductor-varcon/tags`: https://quay.io/repository/biocontainers/bioconductor-varcon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-varcon";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-varcon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-varcon/README.html