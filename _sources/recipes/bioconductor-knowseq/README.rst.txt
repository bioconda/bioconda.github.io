:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-knowseq'
.. highlight: bash

bioconductor-knowseq
====================

.. conda:recipe:: bioconductor-knowseq
   :replaces_section_title:
   :noindex:

   KnowSeq R\/Bioc package The Smart Transcriptomic Pipeline

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/KnowSeq.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-knowseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-knowseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-knowseq/meta.yaml>`_

   KnowSeq proposes a novel methodology that comprises the most relevant steps in the Transcriptomic gene expression analysis. KnowSeq expects to serve as an integrative tool that allows to process and extract relevant biomarkers\, as well as to assess them through a Machine Learning approaches. Finally\, the last objective of KnowSeq is the biological knowledge extraction from the biomarkers \(Gene Ontology enrichment\, Pathway listing and Visualization and Evidences related to the addressed disease\). Although the package allows analyzing all the data manually\, the main strenght of KnowSeq is the possibilty of carrying out an automatic and intelligent HTML report that collect all the involved steps in one document. It is important to highligh that the pipeline is totally modular and flexible\, hence it can be started from whichever of the different steps. KnowSeq expects to serve as a novel tool to help to the experts in the field to acquire robust knowledge and conclusions for the data and diseases to study.


.. conda:package:: bioconductor-knowseq

   |downloads_bioconductor-knowseq| |docker_bioconductor-knowseq|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.4-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-cqn: ``>=1.48.0,<1.49.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-sva: ``>=3.50.0,<3.51.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-e1071: 
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-gridextra: 
   :depends r-hmisc: ``>=4.4.0``
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-kernlab: 
   :depends r-praznik: 
   :depends r-r.utils: 
   :depends r-randomforest: 
   :depends r-reshape2: 
   :depends r-rlist: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :depends r-xml: 
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

      mamba install bioconductor-knowseq

   and update with::

      mamba update bioconductor-knowseq

  To create a new environment, run::

      mamba create --name myenvname bioconductor-knowseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-knowseq:<tag>

   (see `bioconductor-knowseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-knowseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-knowseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-knowseq
   :alt:   (downloads)
.. |docker_bioconductor-knowseq| image:: https://quay.io/repository/biocontainers/bioconductor-knowseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-knowseq
.. _`bioconductor-knowseq/tags`: https://quay.io/repository/biocontainers/bioconductor-knowseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-knowseq";
        var versions = ["1.16.0","1.14.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-knowseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-knowseq/README.html