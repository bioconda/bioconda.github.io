:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-netgsa'
.. highlight: bash

r-netgsa
========

.. conda:recipe:: r-netgsa
   :replaces_section_title:
   :noindex:

   Carry out network\-based gene set analysis by incorporating external information about interactions among genes\, as well as novel interactions learned from data. Implements methods described in Shojaie A\, Michailidis G \(2010\) \<doi\:10.1093\/biomet\/asq038\>\, Shojaie A\, Michailidis G \(2009\) \<doi\:10.1089\/cmb.2008.0081\>\, and Ma J\, Shojaie A\, Michailidis G \(2016\) \<doi\:10.1093\/bioinformatics\/btw410\>.

   :homepage: https://github.com/mikehellstern/netgsa
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-netgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-netgsa/meta.yaml>`_

   


.. conda:package:: r-netgsa

   |downloads_r-netgsa| |docker_r-netgsa|

   :versions:
      
      

      ``4.0.7-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-genefilter: ``>=1.92.0,<1.93.0a0``
   :depends on bioconductor-graph: ``>=1.88.1,<1.89.0a0``
   :depends on bioconductor-graphite: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-rcy3: ``>=2.30.1,<2.31.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-glassofast: 
   :depends on r-glmnet: 
   :depends on r-httr: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-msigdbr: 
   :depends on r-quadprog: 
   :depends on r-rcpp: ``>=1.0.2``
   :depends on r-rcppeigen: 
   :depends on r-reshape2: 
   :depends on r-rlang: 

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

    pixi global install r-netgsa

to add into an existing workspace instead, run::

    pixi add r-netgsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-netgsa

Alternatively, to install into a new environment, run::

    conda create -n envname r-netgsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-netgsa:<tag>

(see `r-netgsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-netgsa| image:: https://img.shields.io/conda/dn/bioconda/r-netgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/r-netgsa
   :alt:   (downloads)
.. |docker_r-netgsa| image:: https://quay.io/repository/biocontainers/r-netgsa/status
   :target: https://quay.io/repository/biocontainers/r-netgsa
.. _`r-netgsa/tags`: https://quay.io/repository/biocontainers/r-netgsa?tab=tags


.. raw:: html

    <script>
        var package = "r-netgsa";
        var versions = ["4.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-netgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-netgsa/README.html