:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-recount3'
.. highlight: bash

bioconductor-recount3
=====================

.. conda:recipe:: bioconductor-recount3
   :replaces_section_title:
   :noindex:

   Explore and download data from the recount3 project

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/recount3.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-recount3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-recount3/meta.yaml>`_

   The recount3 package enables access to a large amount of uniformly processed RNA\-seq data from human and mouse. You can download RangedSummarizedExperiment objects at the gene\, exon or exon\-exon junctions level with sample metadata and QC statistics. In addition we provide access to sample coverage BigWig files.


.. conda:package:: bioconductor-recount3

   |downloads_bioconductor-recount3| |docker_bioconductor-recount3|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.2-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.7-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-httr: 
   :depends on r-matrix: 
   :depends on r-r.utils: 
   :depends on r-sessioninfo: 

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

    pixi global install bioconductor-recount3

to add into an existing workspace instead, run::

    pixi add bioconductor-recount3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-recount3

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-recount3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-recount3:<tag>

(see `bioconductor-recount3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-recount3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-recount3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-recount3
   :alt:   (downloads)
.. |docker_bioconductor-recount3| image:: https://quay.io/repository/biocontainers/bioconductor-recount3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-recount3
.. _`bioconductor-recount3/tags`: https://quay.io/repository/biocontainers/bioconductor-recount3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-recount3";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.2","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-recount3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-recount3/README.html