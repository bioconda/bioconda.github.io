:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-factr'
.. highlight: bash

bioconductor-factr
==================

.. conda:recipe:: bioconductor-factr
   :replaces_section_title:
   :noindex:

   Functional Annotation of Custom Transcriptomes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/factR.html
   :license: file LICENSE
   :recipe: /`bioconductor-factr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-factr/meta.yaml>`_

   factR contain tools to process and interact with custom\-assembled transcriptomes \(GTF\). At its core\, factR constructs CDS information on custom transcripts and subsequently predicts its functional output. In addition\, factR has tools capable of plotting transcripts\, correcting chromosome and gene information and shortlisting new transcripts.


.. conda:package:: bioconductor-factr

   |downloads_bioconductor-factr| |docker_bioconductor-factr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-drawproteins: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-wiggleplotr: ``>=1.26.0,<1.27.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: ``>=1.5``
   :depends r-data.table: ``>=1.14``
   :depends r-dplyr: ``>=1.1``
   :depends r-ggplot2: ``>=3.4``
   :depends r-pbapply: ``>=1.7``
   :depends r-purrr: ``>=1.0``
   :depends r-rcurl: ``>=1.98``
   :depends r-rlang: ``>=1.1``
   :depends r-stringr: ``>=1.5``
   :depends r-tibble: ``>=3.2``
   :depends r-tidyr: ``>=1.3``
   :depends r-xml: ``>=3.99``
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

      mamba install bioconductor-factr

   and update with::

      mamba update bioconductor-factr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-factr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-factr:<tag>

   (see `bioconductor-factr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-factr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-factr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-factr
   :alt:   (downloads)
.. |docker_bioconductor-factr| image:: https://quay.io/repository/biocontainers/bioconductor-factr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-factr
.. _`bioconductor-factr/tags`: https://quay.io/repository/biocontainers/bioconductor-factr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-factr";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-factr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-factr/README.html