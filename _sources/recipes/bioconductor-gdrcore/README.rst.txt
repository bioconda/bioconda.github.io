:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrcore'
.. highlight: bash

bioconductor-gdrcore
====================

.. conda:recipe:: bioconductor-gdrcore
   :replaces_section_title:
   :noindex:

   Processing functions and interface to process and analyze drug dose\-response data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gDRcore.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrcore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrcore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrcore/meta.yaml>`_

   This package contains core functions to process and analyze drug response data. The package provides tools for normalizing\, averaging\, and calculation of gDR metrics data. All core functions are wrapped into the pipeline function allowing analyzing the data in a straightforward way.


.. conda:package:: bioconductor-gdrcore

   |downloads_bioconductor-gdrcore| |docker_bioconductor-gdrcore|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0a0``
   :depends on bioconductor-gdrutils: ``>=1.8.0,<1.9.0``
   :depends on bioconductor-gdrutils: ``>=1.8.0,<1.9.0a0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.1,<1.37.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 
   :depends on r-futile.logger: 
   :depends on r-purrr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-gdrcore

to add into an existing workspace instead, run::

    pixi add bioconductor-gdrcore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdrcore

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdrcore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdrcore:<tag>

(see `bioconductor-gdrcore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdrcore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrcore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrcore
   :alt:   (downloads)
.. |docker_bioconductor-gdrcore| image:: https://quay.io/repository/biocontainers/bioconductor-gdrcore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrcore
.. _`bioconductor-gdrcore/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrcore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrcore";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrcore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrcore/README.html