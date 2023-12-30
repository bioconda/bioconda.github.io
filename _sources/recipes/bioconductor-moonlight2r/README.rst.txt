:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moonlight2r'
.. highlight: bash

bioconductor-moonlight2r
========================

.. conda:recipe:: bioconductor-moonlight2r
   :replaces_section_title:
   :noindex:

   Identify oncogenes and tumor suppressor genes from omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Moonlight2R.html
   :license: GPL-3
   :recipe: /`bioconductor-moonlight2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlight2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlight2r/meta.yaml>`_

   The understanding of cancer mechanism requires the identification of genes playing a role in the development of the pathology and the characterization of their role \(notably oncogenes and tumor suppressors\). We present an updated version of the R\/bioconductor package called MoonlightR\, namely Moonlight2R\, which returns a list of candidate driver genes for specific cancer types on the basis of omics data integration. The Moonlight framework contains a primary layer where gene expression data and information about biological processes are integrated to predict genes called oncogenic mediators\, divided into putative tumor suppressors and putative oncogenes. This is done through functional enrichment analyses\, gene regulatory networks and upstream regulator analyses to score the importance of well\-known biological processes with respect to the studied cancer type. By evaluating the effect of the oncogenic mediators on biological processes or through random forests\, the primary layer predicts two putative roles for the oncogenic mediators\: i\) tumor suppressor genes \(TSGs\) and ii\) oncogenes \(OCGs\). As gene expression data alone is not enough to explain the deregulation of the genes\, a second layer of evidence is needed. We have automated the integration of a secondary mutational layer through new functionalities in Moonlight2R. These functionalities analyze mutations in the cancer cohort and classifies these into driver and passenger mutations using the driver mutation prediction tool\, CScape\-somatic. Those oncogenic mediators with at least one driver mutation are retained as the driver genes. As a consequence\, this methodology does not only identify genes playing a dual role \(e.g. TSG in one cancer type and OCG in another\) but also helps in elucidating the biological processes underlying their specific roles. In particular\, Moonlight2R can be used to discover OCGs and TSGs in the same cancer type. This may for instance help in answering the question whether some genes change role between early stages \(I\, II\) and late stages \(III\, IV\). In the future\, this analysis could be useful to determine the causes of different resistances to chemotherapeutic treatments.


.. conda:package:: bioconductor-moonlight2r

   |downloads_bioconductor-moonlight2r| |docker_bioconductor-moonlight2r|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-clusterprofiler: ``>=4.10.0,<4.11.0``
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-geoquery: ``>=2.70.0,<2.71.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-easypubmed: 
   :depends r-foreach: 
   :depends r-fuzzyjoin: 
   :depends r-gplots: 
   :depends r-hiver: 
   :depends r-magrittr: 
   :depends r-parmigene: 
   :depends r-purrr: 
   :depends r-qpdf: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-rismed: 
   :depends r-seqminer: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyheatmap: 
   :depends r-tidyr: 
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

      mamba install bioconductor-moonlight2r

   and update with::

      mamba update bioconductor-moonlight2r

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moonlight2r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moonlight2r:<tag>

   (see `bioconductor-moonlight2r/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moonlight2r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moonlight2r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moonlight2r
   :alt:   (downloads)
.. |docker_bioconductor-moonlight2r| image:: https://quay.io/repository/biocontainers/bioconductor-moonlight2r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moonlight2r
.. _`bioconductor-moonlight2r/tags`: https://quay.io/repository/biocontainers/bioconductor-moonlight2r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moonlight2r";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moonlight2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moonlight2r/README.html