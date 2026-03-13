:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ewcedata'
.. highlight: bash

bioconductor-ewcedata
=====================

.. conda:recipe:: bioconductor-ewcedata
   :replaces_section_title:
   :noindex:

   The ewceData package provides reference data required for ewce

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/ewceData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ewcedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewcedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewcedata/meta.yaml>`_

   This package provides reference data required for ewce. Expression Weighted Celltype Enrichment \(EWCE\) is used to determine which cell types are enriched within gene lists. The package provides tools for testing enrichments within simple gene lists \(such as human disease associated genes\) and those resulting from differential expression studies. The package does not depend upon any particular Single Cell Transcriptome dataset and user defined datasets can be loaded in and used in the analyses.


.. conda:package:: bioconductor-ewcedata

   |downloads_bioconductor-ewcedata| |docker_bioconductor-ewcedata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-ewcedata

to add into an existing workspace instead, run::

    pixi add bioconductor-ewcedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ewcedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ewcedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ewcedata:<tag>

(see `bioconductor-ewcedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ewcedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ewcedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ewcedata
   :alt:   (downloads)
.. |docker_bioconductor-ewcedata| image:: https://quay.io/repository/biocontainers/bioconductor-ewcedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ewcedata
.. _`bioconductor-ewcedata/tags`: https://quay.io/repository/biocontainers/bioconductor-ewcedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ewcedata";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ewcedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ewcedata/README.html