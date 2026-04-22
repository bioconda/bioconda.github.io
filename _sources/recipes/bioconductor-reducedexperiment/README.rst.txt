:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reducedexperiment'
.. highlight: bash

bioconductor-reducedexperiment
==============================

.. conda:recipe:: bioconductor-reducedexperiment
   :replaces_section_title:
   :noindex:

   Containers and tools for dimensionally\-reduced \-omics representations

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ReducedExperiment.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-reducedexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reducedexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reducedexperiment/meta.yaml>`_

   Provides SummarizedExperiment\-like containers for storing and manipulating dimensionally\-reduced assay data. The ReducedExperiment classes allow users to simultaneously manipulate their original dataset and their decomposed data\, in addition to other method\-specific outputs like feature loadings. Implements utilities and specialised classes for the application of stabilised independent component analysis \(sICA\) and weighted gene correlation network analysis \(WGCNA\).


.. conda:package:: bioconductor-reducedexperiment

   |downloads_bioconductor-reducedexperiment| |docker_bioconductor-reducedexperiment|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-car: 
   :depends on r-ggplot2: 
   :depends on r-ica: 
   :depends on r-lme4: 
   :depends on r-lmertest: 
   :depends on r-moments: 
   :depends on r-msigdbr: 
   :depends on r-patchwork: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-reducedexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-reducedexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-reducedexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-reducedexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-reducedexperiment:<tag>

(see `bioconductor-reducedexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-reducedexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reducedexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reducedexperiment
   :alt:   (downloads)
.. |docker_bioconductor-reducedexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-reducedexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reducedexperiment
.. _`bioconductor-reducedexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-reducedexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reducedexperiment";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reducedexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reducedexperiment/README.html