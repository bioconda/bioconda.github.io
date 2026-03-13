:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cdseq'
.. highlight: bash

r-cdseq
=======

.. conda:recipe:: r-cdseq
   :replaces_section_title:
   :noindex:

   Estimate cell\-type\-specific gene expression profiles and sample\-specific cell\-type proportions simultaneously using bulk sequencing data. Kang et al. \(2019\) \<doi\:10.1371\/journal.pcbi.1007510\>.

   :homepage: https://github.com/omnideconv/CDSeq
   :license: GPL / GPL-3
   :recipe: /`r-cdseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cdseq/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1007510`

   


.. conda:package:: r-cdseq

   |downloads_r-cdseq| |docker_r-cdseq|

   :versions:
      
      

      ``0-6``,  ``0-5``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.66.0,<2.67.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-clue: 
   :depends on r-dirmult: 
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-gplots: 
   :depends on r-harmony: 
   :depends on r-iterators: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-pheatmap: 
   :depends on r-qlcmatrix: 
   :depends on r-rcpp: ``>=1.0.3``
   :depends on r-rcppthread: 
   :depends on r-rlang: 
   :depends on r-seurat: 

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

    pixi global install r-cdseq

to add into an existing workspace instead, run::

    pixi add r-cdseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cdseq

Alternatively, to install into a new environment, run::

    conda create -n envname r-cdseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cdseq:<tag>

(see `r-cdseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cdseq| image:: https://img.shields.io/conda/dn/bioconda/r-cdseq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cdseq
   :alt:   (downloads)
.. |docker_r-cdseq| image:: https://quay.io/repository/biocontainers/r-cdseq/status
   :target: https://quay.io/repository/biocontainers/r-cdseq
.. _`r-cdseq/tags`: https://quay.io/repository/biocontainers/r-cdseq?tab=tags


.. raw:: html

    <script>
        var package = "r-cdseq";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cdseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cdseq/README.html