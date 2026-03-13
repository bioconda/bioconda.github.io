:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatssamplesize'
.. highlight: bash

bioconductor-msstatssamplesize
==============================

.. conda:recipe:: bioconductor-msstatssamplesize
   :replaces_section_title:
   :noindex:

   Simulation tool for optimal design of high\-dimensional MS\-based proteomics experiment

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MSstatsSampleSize.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatssamplesize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatssamplesize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatssamplesize/meta.yaml>`_

   The packages estimates the variance in the input protein abundance data and simulates data with predefined number of biological replicates based on the variance estimation. It reports the mean predictive accuracy of the classifier and mean protein importance over multiple iterations of the simulation.


.. conda:package:: bioconductor-msstatssamplesize

   |downloads_bioconductor-msstatssamplesize| |docker_bioconductor-msstatssamplesize|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-msstats: ``>=4.8.0,<4.9.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-caret: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-msstatssamplesize

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatssamplesize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatssamplesize

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatssamplesize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatssamplesize:<tag>

(see `bioconductor-msstatssamplesize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatssamplesize| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatssamplesize.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatssamplesize
   :alt:   (downloads)
.. |docker_bioconductor-msstatssamplesize| image:: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize
.. _`bioconductor-msstatssamplesize/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatssamplesize?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatssamplesize";
        var versions = ["1.13.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatssamplesize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatssamplesize/README.html