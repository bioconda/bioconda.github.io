:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlseq'
.. highlight: bash

bioconductor-rlseq
==================

.. conda:recipe:: bioconductor-rlseq
   :replaces_section_title:
   :noindex:

   RLSeq\: An analysis package for R\-loop mapping data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RLSeq.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rlseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlseq/meta.yaml>`_

   RLSeq is a toolkit for analyzing and evaluating R\-loop mapping datasets. RLSeq serves two primary purposes\: \(1\) to facilitate the evaluation of dataset quality\, and \(2\) to enable R\-loop analysis in the context of publicly\-available data sets from RLBase. The package is intended to provide a simple pipeline\, called with the \`RLSeq\(\)\` function\, which performs all main analyses. Individual functions are also accessible and provide custom analysis capabilities. Finally an HTML report is generated with \`report\(\)\`.


.. conda:package:: bioconductor-rlseq

   |downloads_bioconductor-rlseq| |docker_bioconductor-rlseq|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-complexheatmap: ``>=2.16.0,<2.17.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-regioner: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rlhub: ``>=1.6.0,<1.7.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-aws.s3: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-callr: 
   :depends r-caretensemble: 
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-ggprism: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-valr: 
   :depends r-venndiagram: 
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

      mamba install bioconductor-rlseq

   and update with::

      mamba update bioconductor-rlseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rlseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlseq:<tag>

   (see `bioconductor-rlseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlseq
   :alt:   (downloads)
.. |docker_bioconductor-rlseq| image:: https://quay.io/repository/biocontainers/bioconductor-rlseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlseq
.. _`bioconductor-rlseq/tags`: https://quay.io/repository/biocontainers/bioconductor-rlseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlseq";
        var versions = ["1.6.0","1.4.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlseq/README.html