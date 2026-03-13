:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ramr'
.. highlight: bash

bioconductor-ramr
=================

.. conda:recipe:: bioconductor-ramr
   :replaces_section_title:
   :noindex:

   Detection of Rare Aberrantly Methylated Regions in Array and NGS Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ramr.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ramr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ramr/meta.yaml>`_

   ramr is an R package for detection of low\-frequency aberrant methylation events in large data sets obtained by methylation profiling using array or high\-throughput bisulfite sequencing. In addition\, package provides functions to visualize found aberrantly methylated regions \(AMRs\)\, to generate sets of all possible regions to be used as reference sets for enrichment analysis\, and to generate biologically relevant test data sets for performance evaluation of AMR\/DMR search algorithms.


.. conda:package:: bioconductor-ramr

   |downloads_bioconductor-ramr| |docker_bioconductor-ramr|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libcxx: ``>=19``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-ramr

to add into an existing workspace instead, run::

    pixi add bioconductor-ramr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ramr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ramr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ramr:<tag>

(see `bioconductor-ramr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ramr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ramr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ramr
   :alt:   (downloads)
.. |docker_bioconductor-ramr| image:: https://quay.io/repository/biocontainers/bioconductor-ramr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ramr
.. _`bioconductor-ramr/tags`: https://quay.io/repository/biocontainers/bioconductor-ramr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ramr";
        var versions = ["1.18.0","1.18.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ramr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ramr/README.html