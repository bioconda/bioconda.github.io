:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sechm'
.. highlight: bash

bioconductor-sechm
==================

.. conda:recipe:: bioconductor-sechm
   :replaces_section_title:
   :noindex:

   sechm\: Complex Heatmaps from a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sechm.html
   :license: GPL-3
   :recipe: /`bioconductor-sechm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sechm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sechm/meta.yaml>`_

   sechm provides a simple interface between SummarizedExperiment objects and the ComplexHeatmap package. It enables plotting annotated heatmaps from SE objects\, with easy access to rowData and colData columns\, and implements a number of features to make the generation of heatmaps easier and more flexible. These functionalities used to be part of the SEtools package.


.. conda:package:: bioconductor-sechm

   |downloads_bioconductor-sechm| |docker_bioconductor-sechm|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-matrixstats: 
   :depends on r-randomcolor: 
   :depends on r-seriation: 

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

    pixi global install bioconductor-sechm

to add into an existing workspace instead, run::

    pixi add bioconductor-sechm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sechm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sechm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sechm:<tag>

(see `bioconductor-sechm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sechm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sechm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sechm
   :alt:   (downloads)
.. |docker_bioconductor-sechm| image:: https://quay.io/repository/biocontainers/bioconductor-sechm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sechm
.. _`bioconductor-sechm/tags`: https://quay.io/repository/biocontainers/bioconductor-sechm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sechm";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sechm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sechm/README.html