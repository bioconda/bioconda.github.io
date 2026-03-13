:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scistreer'
.. highlight: bash

r-scistreer
===========

.. conda:recipe:: r-scistreer
   :replaces_section_title:
   :noindex:

   Fast maximum\-likelihood phylogeny inference from noisy single\-cell data using the \'ScisTree\' algorithm by Yufeng Wu \(2019\) \<doi\:10.1093\/bioinformatics\/btz676\>. \'scistreer\' provides an \'R\' interface and improves speed via \'Rcpp\' and \'RcppParallel\'\, making the method applicable to massive single\-cell datasets \(\>10\,000 cells\).

   :homepage: https://github.com/kharchenkolab/scistreer, https://kharchenkolab.github.io/scistreer/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-scistreer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scistreer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scistreer/meta.yaml>`_

   


.. conda:package:: r-scistreer

   |downloads_r-scistreer| |docker_r-scistreer|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-ggtree: ``>=4.0.4,<4.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-paralleldist: 
   :depends on r-patchwork: 
   :depends on r-phangorn: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: 
   :depends on r-reshape2: 
   :depends on r-rhpcblasctl: 
   :depends on r-stringr: 
   :depends on r-tidygraph: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install r-scistreer

to add into an existing workspace instead, run::

    pixi add r-scistreer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scistreer

Alternatively, to install into a new environment, run::

    conda create -n envname r-scistreer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scistreer:<tag>

(see `r-scistreer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scistreer| image:: https://img.shields.io/conda/dn/bioconda/r-scistreer.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scistreer
   :alt:   (downloads)
.. |docker_r-scistreer| image:: https://quay.io/repository/biocontainers/r-scistreer/status
   :target: https://quay.io/repository/biocontainers/r-scistreer
.. _`r-scistreer/tags`: https://quay.io/repository/biocontainers/r-scistreer?tab=tags


.. raw:: html

    <script>
        var package = "r-scistreer";
        var versions = ["1.2.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scistreer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scistreer/README.html