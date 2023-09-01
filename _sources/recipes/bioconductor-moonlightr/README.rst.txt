:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moonlightr'
.. highlight: bash

bioconductor-moonlightr
=======================

.. conda:recipe:: bioconductor-moonlightr
   :replaces_section_title:
   :noindex:

   Identify oncogenes and tumor suppressor genes from omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MoonlightR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-moonlightr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlightr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlightr/meta.yaml>`_

   Motivation\: The understanding of cancer mechanism requires the identification of genes playing a role in the development of the pathology and the characterization of their role \(notably oncogenes and tumor suppressors\). Results\: We present an R\/bioconductor package called MoonlightR which returns a list of candidate driver genes for specific cancer types on the basis of TCGA expression data. The method first infers gene regulatory networks and then carries out a functional enrichment analysis \(FEA\) \(implementing an upstream regulator analysis\, URA\) to score the importance of well\-known biological processes with respect to the studied cancer type. Eventually\, by means of random forests\, MoonlightR predicts two specific roles for the candidate driver genes\: i\) tumor suppressor genes \(TSGs\) and ii\) oncogenes \(OCGs\). As a consequence\, this methodology does not only identify genes playing a dual role \(e.g. TSG in one cancer type and OCG in another\) but also helps in elucidating the biological processes underlying their specific roles. In particular\, MoonlightR can be used to discover OCGs and TSGs in the same cancer type. This may help in answering the question whether some genes change role between early stages \(I\, II\) and late stages \(III\, IV\) in breast cancer. In the future\, this analysis could be useful to determine the causes of different resistances to chemotherapeutic treatments.


.. conda:package:: bioconductor-moonlightr

   |downloads_bioconductor-moonlightr| |docker_bioconductor-moonlightr|

   :versions:
      
      

      ``1.26.0-0``,  ``1.24.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-tcgabiolinks: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-gplots: 
   :depends r-hiver: 
   :depends r-parmigene: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-rismed: 
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

      mamba install bioconductor-moonlightr

   and update with::

      mamba update bioconductor-moonlightr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moonlightr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moonlightr:<tag>

   (see `bioconductor-moonlightr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moonlightr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moonlightr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moonlightr
   :alt:   (downloads)
.. |docker_bioconductor-moonlightr| image:: https://quay.io/repository/biocontainers/bioconductor-moonlightr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moonlightr
.. _`bioconductor-moonlightr/tags`: https://quay.io/repository/biocontainers/bioconductor-moonlightr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moonlightr";
        var versions = ["1.26.0","1.24.0","1.19.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moonlightr/README.html