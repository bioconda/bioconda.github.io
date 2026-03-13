:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mudata'
.. highlight: bash

bioconductor-mudata
===================

.. conda:recipe:: bioconductor-mudata
   :replaces_section_title:
   :noindex:

   Serialization for MultiAssayExperiment Objects

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MuData.html
   :license: GPL-3
   :recipe: /`bioconductor-mudata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mudata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mudata/meta.yaml>`_

   Save MultiAssayExperiments to h5mu files supported by muon and mudata. Muon is a Python framework for multimodal omics data analysis. It uses an HDF5\-based format for data storage.


.. conda:package:: bioconductor-mudata

   |downloads_bioconductor-mudata| |docker_bioconductor-mudata|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-mudata

to add into an existing workspace instead, run::

    pixi add bioconductor-mudata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mudata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mudata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mudata:<tag>

(see `bioconductor-mudata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mudata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mudata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mudata
   :alt:   (downloads)
.. |docker_bioconductor-mudata| image:: https://quay.io/repository/biocontainers/bioconductor-mudata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mudata
.. _`bioconductor-mudata/tags`: https://quay.io/repository/biocontainers/bioconductor-mudata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mudata";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mudata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mudata/README.html