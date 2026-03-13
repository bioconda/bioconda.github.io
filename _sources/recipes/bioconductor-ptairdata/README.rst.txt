:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ptairdata'
.. highlight: bash

bioconductor-ptairdata
======================

.. conda:recipe:: bioconductor-ptairdata
   :replaces_section_title:
   :noindex:

   PTR\-TOF\-MS volatolomics raw datasets from exhaled air and cell culture headspace

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ptairData.html
   :license: GPL-3
   :recipe: /`bioconductor-ptairdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ptairdata/meta.yaml>`_

   The package ptairData contains two raw datasets from Proton\-Transfer\-Reaction Time\-of\-Flight mass spectrometer acquisitions \(PTR\-TOF\-MS\)\, in the HDF5 format. One from the exhaled air of two volunteer healthy individuals with three replicates\, and one from the cell culture headspace from two mycobacteria species and one control \(culture medium only\) with two replicates. Those datasets are used in the examples and in the vignette of the ptairMS package \(PTR\-TOF\-MS data pre\-processing\). There are also used to gererate the ptrSet in the ptairMS data \: exhaledPtrset and mycobacteriaSet


.. conda:package:: bioconductor-ptairdata

   |downloads_bioconductor-ptairdata| |docker_bioconductor-ptairdata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-signal: 

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

    pixi global install bioconductor-ptairdata

to add into an existing workspace instead, run::

    pixi add bioconductor-ptairdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ptairdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ptairdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ptairdata:<tag>

(see `bioconductor-ptairdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ptairdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ptairdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ptairdata
   :alt:   (downloads)
.. |docker_bioconductor-ptairdata| image:: https://quay.io/repository/biocontainers/bioconductor-ptairdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ptairdata
.. _`bioconductor-ptairdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ptairdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ptairdata";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ptairdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ptairdata/README.html