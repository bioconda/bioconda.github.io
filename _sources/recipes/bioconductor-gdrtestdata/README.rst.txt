:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gdrtestdata'
.. highlight: bash

bioconductor-gdrtestdata
========================

.. conda:recipe:: bioconductor-gdrtestdata
   :replaces_section_title:
   :noindex:

   gDRtestData \- R data package with testing dose response data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/gDRtestData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gdrtestdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrtestdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gdrtestdata/meta.yaml>`_

   R package with internal dose\-response test data. Package provides functions to generate input testing data that can be used as the input for gDR pipeline. It also contains qs files with MAE data processed by gDR.


.. conda:package:: bioconductor-gdrtestdata

   |downloads_bioconductor-gdrtestdata| |docker_bioconductor-gdrtestdata|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 

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

    pixi global install bioconductor-gdrtestdata

to add into an existing workspace instead, run::

    pixi add bioconductor-gdrtestdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gdrtestdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gdrtestdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gdrtestdata:<tag>

(see `bioconductor-gdrtestdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gdrtestdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gdrtestdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gdrtestdata
   :alt:   (downloads)
.. |docker_bioconductor-gdrtestdata| image:: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata
.. _`bioconductor-gdrtestdata/tags`: https://quay.io/repository/biocontainers/bioconductor-gdrtestdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gdrtestdata";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gdrtestdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gdrtestdata/README.html