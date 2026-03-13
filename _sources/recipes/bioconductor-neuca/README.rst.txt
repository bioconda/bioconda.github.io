:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-neuca'
.. highlight: bash

bioconductor-neuca
==================

.. conda:recipe:: bioconductor-neuca
   :replaces_section_title:
   :noindex:

   NEUral network\-based single\-Cell Annotation tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NeuCA.html
   :license: GPL-2
   :recipe: /`bioconductor-neuca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neuca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-neuca/meta.yaml>`_

   NeuCA is is a neural\-network based method for scRNA\-seq data annotation. It can automatically adjust its classification strategy depending on cell type correlations\, to accurately annotate cell. NeuCA can automatically utilize the structure information of the cell types through a hierarchical tree to improve the annotation accuracy. It is especially helpful when the data contain closely correlated cell types.


.. conda:package:: bioconductor-neuca

   |downloads_bioconductor-neuca| |docker_bioconductor-neuca|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-e1071: 
   :depends on r-keras: 

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

    pixi global install bioconductor-neuca

to add into an existing workspace instead, run::

    pixi add bioconductor-neuca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-neuca

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-neuca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-neuca:<tag>

(see `bioconductor-neuca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-neuca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-neuca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-neuca
   :alt:   (downloads)
.. |docker_bioconductor-neuca| image:: https://quay.io/repository/biocontainers/bioconductor-neuca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-neuca
.. _`bioconductor-neuca/tags`: https://quay.io/repository/biocontainers/bioconductor-neuca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-neuca";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-neuca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-neuca/README.html