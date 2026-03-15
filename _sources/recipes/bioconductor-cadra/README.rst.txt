:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cadra'
.. highlight: bash

bioconductor-cadra
==================

.. conda:recipe:: bioconductor-cadra
   :replaces_section_title:
   :noindex:

   Candidate Driver Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CaDrA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-cadra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cadra/meta.yaml>`_

   Performs both stepwise and backward heuristic search for candidate \(epi\)genetic drivers based on a binary multi\-omics dataset. CaDrA\'s main objective is to identify features which\, together\, are significantly skewed or enriched pertaining to a given vector of continuous scores \(e.g. sample\-specific scores representing a phenotypic readout of interest\, such as protein expression\, pathway activity\, etc.\)\, based on the union occurence \(i.e. logical OR\) of the events.


.. conda:package:: bioconductor-cadra

   |downloads_bioconductor-cadra| |docker_bioconductor-cadra|

   :versions:
      
      

      ``1.8.0-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtable: 
   :depends on r-knnmi: 
   :depends on r-mass: 
   :depends on r-misc3d: 
   :depends on r-plyr: 
   :depends on r-ppcor: 
   :depends on r-r.cache: 
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

    pixi global install bioconductor-cadra

to add into an existing workspace instead, run::

    pixi add bioconductor-cadra

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cadra

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cadra

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cadra:<tag>

(see `bioconductor-cadra/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cadra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cadra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cadra
   :alt:   (downloads)
.. |docker_bioconductor-cadra| image:: https://quay.io/repository/biocontainers/bioconductor-cadra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cadra
.. _`bioconductor-cadra/tags`: https://quay.io/repository/biocontainers/bioconductor-cadra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cadra";
        var versions = ["1.8.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cadra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cadra/README.html