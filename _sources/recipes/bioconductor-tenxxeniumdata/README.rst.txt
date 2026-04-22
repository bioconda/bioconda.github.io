:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tenxxeniumdata'
.. highlight: bash

bioconductor-tenxxeniumdata
===========================

.. conda:recipe:: bioconductor-tenxxeniumdata
   :replaces_section_title:
   :noindex:

   Collection of Xenium spatial data by 10X genomics

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/TENxXeniumData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tenxxeniumdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxxeniumdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tenxxeniumdata/meta.yaml>`_

   Collection of Xenium spatial transcriptomics datasets provided by 10x Genomics\, formatted into the Bioconductor classes\, the SpatialExperiment or SpatialFeatureExperiment \(SFE\)\, to facilitate seamless integration into various applications\, including examples\, demonstrations\, and tutorials. The constructed data objects include gene expression profiles\, per\-transcript location data\, centroid\, segmentation boundaries \(e.g.\, cell or nucleus boundaries\)\, and image.


.. conda:package:: bioconductor-tenxxeniumdata

   |downloads_bioconductor-tenxxeniumdata| |docker_bioconductor-tenxxeniumdata|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialfeatureexperiment: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-tenxxeniumdata

to add into an existing workspace instead, run::

    pixi add bioconductor-tenxxeniumdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tenxxeniumdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tenxxeniumdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tenxxeniumdata:<tag>

(see `bioconductor-tenxxeniumdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tenxxeniumdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tenxxeniumdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tenxxeniumdata
   :alt:   (downloads)
.. |docker_bioconductor-tenxxeniumdata| image:: https://quay.io/repository/biocontainers/bioconductor-tenxxeniumdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tenxxeniumdata
.. _`bioconductor-tenxxeniumdata/tags`: https://quay.io/repository/biocontainers/bioconductor-tenxxeniumdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tenxxeniumdata";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tenxxeniumdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tenxxeniumdata/README.html