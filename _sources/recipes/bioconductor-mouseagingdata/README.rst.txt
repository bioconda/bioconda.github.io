:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mouseagingdata'
.. highlight: bash

bioconductor-mouseagingdata
===========================

.. conda:recipe:: bioconductor-mouseagingdata
   :replaces_section_title:
   :noindex:

   Multi\-omics data access for studies investigating the effects of aging

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/MouseAgingData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mouseagingdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouseagingdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouseagingdata/meta.yaml>`_

   The MouseAgingData package provides analysis\-ready data resources from different studies focused on aging and rejuvenation in mice. The package currently provides two 10x Genomics single\-cell RNA\-seq datasets. The first study profiled the aging mouse brain measured across 37\,089 cells \(Ximerakis et al.\, 2019\). The second study investigated parabiosis by profiling a total of 105\,329 cells \(Ximerakis \& Holton et al.\, 2023\). The datasets are provided as SingleCellExperiment objects and provide raw UMI counts and cell metadata.


.. conda:package:: bioconductor-mouseagingdata

   |downloads_bioconductor-mouseagingdata| |docker_bioconductor-mouseagingdata|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
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

    pixi global install bioconductor-mouseagingdata

to add into an existing workspace instead, run::

    pixi add bioconductor-mouseagingdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mouseagingdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mouseagingdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mouseagingdata:<tag>

(see `bioconductor-mouseagingdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mouseagingdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mouseagingdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mouseagingdata
   :alt:   (downloads)
.. |docker_bioconductor-mouseagingdata| image:: https://quay.io/repository/biocontainers/bioconductor-mouseagingdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mouseagingdata
.. _`bioconductor-mouseagingdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mouseagingdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mouseagingdata";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mouseagingdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mouseagingdata/README.html