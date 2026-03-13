:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delocal'
.. highlight: bash

bioconductor-delocal
====================

.. conda:recipe:: bioconductor-delocal
   :replaces_section_title:
   :noindex:

   Identifies differentially expressed genes with respect to other local genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DELocal.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-delocal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delocal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delocal/meta.yaml>`_

   The goal of DELocal is to identify DE genes compared to their neighboring genes from the same chromosomal location. It has been shown that genes of related functions are generally very far from each other in the chromosome. DELocal utilzes this information to identify DE genes comparing with their neighbouring genes.


.. conda:package:: bioconductor-delocal

   |downloads_bioconductor-delocal| |docker_bioconductor-delocal|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deseq2: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrixstats: 
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

    pixi global install bioconductor-delocal

to add into an existing workspace instead, run::

    pixi add bioconductor-delocal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-delocal

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-delocal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-delocal:<tag>

(see `bioconductor-delocal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-delocal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delocal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delocal
   :alt:   (downloads)
.. |docker_bioconductor-delocal| image:: https://quay.io/repository/biocontainers/bioconductor-delocal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delocal
.. _`bioconductor-delocal/tags`: https://quay.io/repository/biocontainers/bioconductor-delocal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delocal";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delocal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delocal/README.html