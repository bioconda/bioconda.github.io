:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialdatasets'
.. highlight: bash

bioconductor-spatialdatasets
============================

.. conda:recipe:: bioconductor-spatialdatasets
   :replaces_section_title:
   :noindex:

   Collection of spatial omics datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/SpatialDatasets.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialdatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialdatasets/meta.yaml>`_

   This is a collection of publically available spatial omics datasets. Where possible we have curated these datasets as either SpatialExperiments\, MoleculeExperiments or CytoImageLists and included annotations of the sample characteristics.


.. conda:package:: bioconductor-spatialdatasets

   |downloads_bioconductor-spatialdatasets| |docker_bioconductor-spatialdatasets|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-spatialdatasets

to add into an existing workspace instead, run::

    pixi add bioconductor-spatialdatasets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spatialdatasets

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spatialdatasets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spatialdatasets:<tag>

(see `bioconductor-spatialdatasets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spatialdatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialdatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialdatasets
   :alt:   (downloads)
.. |docker_bioconductor-spatialdatasets| image:: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets
.. _`bioconductor-spatialdatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialdatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialdatasets";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialdatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialdatasets/README.html