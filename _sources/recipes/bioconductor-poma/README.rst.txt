:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-poma'
.. highlight: bash

bioconductor-poma
=================

.. conda:recipe:: bioconductor-poma
   :replaces_section_title:
   :noindex:

   Tools for Omics Data Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/POMA.html
   :license: GPL-3
   :recipe: /`bioconductor-poma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-poma/meta.yaml>`_

   The POMA package offers a comprehensive toolkit designed for omics data analysis\, streamlining the process from initial visualization to final statistical analysis. Its primary goal is to simplify and unify the various steps involved in omics data processing\, making it more accessible and manageable within a single\, intuitive R package. Emphasizing on reproducibility and user\-friendliness\, POMA leverages the standardized SummarizedExperiment class from Bioconductor\, ensuring seamless integration and compatibility with a wide array of Bioconductor tools. This approach guarantees maximum flexibility and replicability\, making POMA an essential asset for researchers handling omics datasets. See https\:\/\/github.com\/pcastellanoescuder\/POMAShiny. Paper\: Castellano\-Escuder et al. \(2021\) \<doi\:10.1371\/journal.pcbi.1009148\> for more details.


.. conda:package:: bioconductor-poma

   |downloads_bioconductor-poma| |docker_bioconductor-poma|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-mixomics: ``>=6.34.0,<6.35.0``
   :depends on bioconductor-rankprod: ``>=3.36.0,<3.37.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-broom: 
   :depends on r-caret: 
   :depends on r-dbscan: 
   :depends on r-dplyr: 
   :depends on r-fsa: 
   :depends on r-ggcorrplot: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glmnet: 
   :depends on r-janitor: 
   :depends on r-lme4: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-msigdbr: 
   :depends on r-multcomp: 
   :depends on r-purrr: 
   :depends on r-randomforest: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-uwot: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-poma

to add into an existing workspace instead, run::

    pixi add bioconductor-poma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-poma

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-poma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-poma:<tag>

(see `bioconductor-poma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-poma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-poma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-poma
   :alt:   (downloads)
.. |docker_bioconductor-poma| image:: https://quay.io/repository/biocontainers/bioconductor-poma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-poma
.. _`bioconductor-poma/tags`: https://quay.io/repository/biocontainers/bioconductor-poma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-poma";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-poma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-poma/README.html