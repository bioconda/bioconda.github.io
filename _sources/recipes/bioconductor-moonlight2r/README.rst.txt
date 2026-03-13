:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moonlight2r'
.. highlight: bash

bioconductor-moonlight2r
========================

.. conda:recipe:: bioconductor-moonlight2r
   :replaces_section_title:
   :noindex:

   Identify oncogenes and tumor suppressor genes from omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Moonlight2R.html
   :license: GPL-3
   :recipe: /`bioconductor-moonlight2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlight2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moonlight2r/meta.yaml>`_

   The understanding of cancer mechanism requires the identification of genes playing a role in the development of the pathology and the characterization of their role \(notably oncogenes and tumor suppressors\). We present an updated version of the R\/bioconductor package called MoonlightR\, namely Moonlight2R\, which returns a list of candidate driver genes for specific cancer types on the basis of omics data integration. The Moonlight framework contains a primary layer where gene expression data and information about biological processes are integrated to predict genes called oncogenic mediators\, divided into putative tumor suppressors and putative oncogenes. This is done through functional enrichment analyses\, gene regulatory networks and upstream regulator analyses to score the importance of well\-known biological processes with respect to the studied cancer type. By evaluating the effect of the oncogenic mediators on biological processes or through random forests\, the primary layer predicts two putative roles for the oncogenic mediators\: i\) tumor suppressor genes \(TSGs\) and ii\) oncogenes \(OCGs\). As gene expression data alone is not enough to explain the deregulation of the genes\, a second layer of evidence is needed. We have automated the integration of a secondary mutational layer through new functionalities in Moonlight2R. These functionalities analyze mutations in the cancer cohort and classifies these into driver and passenger mutations using the driver mutation prediction tool\, CScape\-somatic. Those oncogenic mediators with at least one driver mutation are retained as the driver genes. As a consequence\, this methodology does not only identify genes playing a dual role \(e.g. TSG in one cancer type and OCG in another\) but also helps in elucidating the biological processes underlying their specific roles. In particular\, Moonlight2R can be used to discover OCGs and TSGs in the same cancer type. This may for instance help in answering the question whether some genes change role between early stages \(I\, II\) and late stages \(III\, IV\). In the future\, this analysis could be useful to determine the causes of different resistances to chemotherapeutic treatments.


.. conda:package:: bioconductor-moonlight2r

   |downloads_bioconductor-moonlight2r| |docker_bioconductor-moonlight2r|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-dose: ``>=4.4.0,<4.5.0``
   :depends on bioconductor-epimix: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-geoquery: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-easypubmed: 
   :depends on r-foreach: 
   :depends on r-fuzzyjoin: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-hiver: 
   :depends on r-magrittr: 
   :depends on r-parmigene: 
   :depends on r-purrr: 
   :depends on r-qpdf: 
   :depends on r-randomforest: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-rismed: 
   :depends on r-rlang: 
   :depends on r-seqminer: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyheatmap: 
   :depends on r-tidyr: 
   :depends on r-withr: 

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

    pixi global install bioconductor-moonlight2r

to add into an existing workspace instead, run::

    pixi add bioconductor-moonlight2r

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-moonlight2r

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-moonlight2r

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-moonlight2r:<tag>

(see `bioconductor-moonlight2r/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-moonlight2r| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moonlight2r.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moonlight2r
   :alt:   (downloads)
.. |docker_bioconductor-moonlight2r| image:: https://quay.io/repository/biocontainers/bioconductor-moonlight2r/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moonlight2r
.. _`bioconductor-moonlight2r/tags`: https://quay.io/repository/biocontainers/bioconductor-moonlight2r?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moonlight2r";
        var versions = ["1.8.1","1.4.0","1.0.0"];
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