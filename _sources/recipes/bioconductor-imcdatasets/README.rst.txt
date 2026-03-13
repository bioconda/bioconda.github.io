:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imcdatasets'
.. highlight: bash

bioconductor-imcdatasets
========================

.. conda:recipe:: bioconductor-imcdatasets
   :replaces_section_title:
   :noindex:

   Collection of publicly available imaging mass cytometry \(IMC\) datasets

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/imcdatasets.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-imcdatasets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imcdatasets/meta.yaml>`_

   The imcdatasets package provides access to publicly available IMC datasets. IMC is a technology that enables measurement of \> 40 proteins from tissue sections. The generated images can be segmented to extract single cell data. Datasets typically consist of three elements\: a SingleCellExperiment object containing single cell data\, a CytoImageList object containing multichannel images and a CytoImageList object containing the cell masks that were used to extract the single cell data from the images.


.. conda:package:: bioconductor-imcdatasets

   |downloads_bioconductor-imcdatasets| |docker_bioconductor-imcdatasets|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-cytomapper: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
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

    pixi global install bioconductor-imcdatasets

to add into an existing workspace instead, run::

    pixi add bioconductor-imcdatasets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-imcdatasets

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-imcdatasets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-imcdatasets:<tag>

(see `bioconductor-imcdatasets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-imcdatasets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imcdatasets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imcdatasets
   :alt:   (downloads)
.. |docker_bioconductor-imcdatasets| image:: https://quay.io/repository/biocontainers/bioconductor-imcdatasets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imcdatasets
.. _`bioconductor-imcdatasets/tags`: https://quay.io/repository/biocontainers/bioconductor-imcdatasets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imcdatasets";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imcdatasets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imcdatasets/README.html