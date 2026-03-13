:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dgeclustering'
.. highlight: bash

r-dgeclustering
===============

.. conda:recipe:: r-DGEclustering
   :replaces_section_title:
   :noindex:

   DGEclustering is an R package for multidimensional clustering of differential gene expression datasets\, and it integrates GO annotations to improve the clustering result.

   :homepage: https://github.com/reneechou123/DGEclustering
   :license: MIT
   :recipe: /`r-DGEclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-DGEclustering/meta.yaml>`_

   


.. conda:package:: r-dgeclustering

   |downloads_r-dgeclustering| |docker_r-dgeclustering|

   :versions:
      
      

      ``0.1.0-5``,  ``0.1.0-4``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on bioconductor-annotationdbi: 
   :depends on bioconductor-clusterprofiler: 
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-gosemsim: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cluster: 
   :depends on r-factominer: 
   :depends on r-ggplot2: 
   :depends on r-intego: 
   :depends on r-reshape2: 
   :depends on r-rlist: 

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

    pixi global install r-dgeclustering

to add into an existing workspace instead, run::

    pixi add r-dgeclustering

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dgeclustering

Alternatively, to install into a new environment, run::

    conda create -n envname r-dgeclustering

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dgeclustering:<tag>

(see `r-dgeclustering/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dgeclustering| image:: https://img.shields.io/conda/dn/bioconda/r-dgeclustering.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dgeclustering
   :alt:   (downloads)
.. |docker_r-dgeclustering| image:: https://quay.io/repository/biocontainers/r-dgeclustering/status
   :target: https://quay.io/repository/biocontainers/r-dgeclustering
.. _`r-dgeclustering/tags`: https://quay.io/repository/biocontainers/r-dgeclustering?tab=tags


.. raw:: html

    <script>
        var package = "r-dgeclustering";
        var versions = ["0.1.0","0.1.0","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dgeclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dgeclustering/README.html