:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustirr'
.. highlight: bash

bioconductor-clustirr
=====================

.. conda:recipe:: bioconductor-clustirr
   :replaces_section_title:
   :noindex:

   Clustering of immune receptor repertoires

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClustIRR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-clustirr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustirr/meta.yaml>`_

   ClustIRR analyzes repertoires of B\- and T\-cell receptors. It starts by identifying communities of immune receptors with similar specificities\, based on the sequences of their complementarity\-determining regions \(CDRs\). Next\, it employs a Bayesian probabilistic models to quantify differential community occupancy \(DCO\) between repertoires\, allowing the identification of expanding or contracting communities in response to e.g. infection or cancer treatment.


.. conda:package:: bioconductor-clustirr

   |downloads_bioconductor-clustirr| |docker_bioconductor-clustirr|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: ``>=1.66.0``
   :depends on r-blaster: 
   :depends on r-dplyr: 
   :depends on r-future: 
   :depends on r-future.apply: 
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-posterior: 
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-reshape2: 
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.4.0``
   :depends on r-scales: 
   :depends on r-stanheaders: ``>=2.18.0``
   :depends on r-stringdist: 
   :depends on r-tidyr: 
   :depends on r-visnetwork: 
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

    pixi global install bioconductor-clustirr

to add into an existing workspace instead, run::

    pixi add bioconductor-clustirr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clustirr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clustirr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clustirr:<tag>

(see `bioconductor-clustirr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clustirr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustirr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustirr
   :alt:   (downloads)
.. |docker_bioconductor-clustirr| image:: https://quay.io/repository/biocontainers/bioconductor-clustirr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustirr
.. _`bioconductor-clustirr/tags`: https://quay.io/repository/biocontainers/bioconductor-clustirr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustirr";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustirr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustirr/README.html