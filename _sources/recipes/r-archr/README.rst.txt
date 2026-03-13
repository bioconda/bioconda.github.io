:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-archr'
.. highlight: bash

r-archr
=======

.. conda:recipe:: r-archr
   :replaces_section_title:
   :noindex:

   This package is designed to streamline scATAC analyses in R.

   :homepage: https://www.archrproject.com
   :documentation: https://www.archrproject.com/bookdown/index.html
   
   :developer docs: https://github.com/GreenleafLab/ArchR
   :license: MIT / MIT
   :recipe: /`r-archr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-archr/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41588-021-00790-6`, biotools: :biotools:`archr`

   


.. conda:package:: r-archr

   |downloads_r-archr| |docker_r-archr|

   :versions:
      
      

      ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-chromvar: ``>=1.30.1,<2.0a0``
   :depends on bioconductor-complexheatmap: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-motifmatchr: ``>=1.28.0,<1.29.0a0``
   :depends on bioconductor-rhdf5: ``>=2.50.0,<2.51.0a0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.9.25``
   :depends on bioconductor-sparsematrixstats: ``>=1.18.0,<1.19.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-chromvarmotifs: ``>=0.2.0,<0.3.0a0``
   :depends on r-data.table: 
   :depends on r-devtools: 
   :depends on r-ggplot2: 
   :depends on r-ggrastr: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-gtable: 
   :depends on r-gtools: 
   :depends on r-harmony: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-nabor: 
   :depends on r-plyr: 
   :depends on r-presto: ``>=1.0.0,<2.0a0``
   :depends on r-rcpp: ``>=0.12.16``
   :depends on r-rcpparmadillo: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 
   :depends on r-stringr: 
   :depends on r-uwot: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install r-archr

to add into an existing workspace instead, run::

    pixi add r-archr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-archr

Alternatively, to install into a new environment, run::

    conda create -n envname r-archr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-archr:<tag>

(see `r-archr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-archr| image:: https://img.shields.io/conda/dn/bioconda/r-archr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-archr
   :alt:   (downloads)
.. |docker_r-archr| image:: https://quay.io/repository/biocontainers/r-archr/status
   :target: https://quay.io/repository/biocontainers/r-archr
.. _`r-archr/tags`: https://quay.io/repository/biocontainers/r-archr?tab=tags


.. raw:: html

    <script>
        var package = "r-archr";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-archr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-archr/README.html