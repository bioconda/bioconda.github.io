:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-motiftestr'
.. highlight: bash

bioconductor-motiftestr
=======================

.. conda:recipe:: bioconductor-motiftestr
   :replaces_section_title:
   :noindex:

   Perform key tests for binding motifs in sequence data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/motifTestR.html
   :license: GPL-3
   :recipe: /`bioconductor-motiftestr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiftestr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-motiftestr/meta.yaml>`_

   Taking a set of sequence motifs as PWMs\, test a set of sequences for over\-representation of these motifs\, as well as any positional features within the set of motifs. Enrichment analysis can be undertaken using multiple statistical approaches. The package also contains core functions to prepare data for analysis\, and to visualise results.


.. conda:package:: bioconductor-motiftestr

   |downloads_bioconductor-motiftestr| |docker_bioconductor-motiftestr|

   :versions:
      
      

      ``1.6.1-0``,  ``1.2.1-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-universalmotif: ``>=1.28.0,<1.29.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: ``>=4.0.0``
   :depends on r-harmonicmeanp: 
   :depends on r-matrixstats: 
   :depends on r-patchwork: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-motiftestr

to add into an existing workspace instead, run::

    pixi add bioconductor-motiftestr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-motiftestr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-motiftestr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-motiftestr:<tag>

(see `bioconductor-motiftestr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-motiftestr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-motiftestr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-motiftestr
   :alt:   (downloads)
.. |docker_bioconductor-motiftestr| image:: https://quay.io/repository/biocontainers/bioconductor-motiftestr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-motiftestr
.. _`bioconductor-motiftestr/tags`: https://quay.io/repository/biocontainers/bioconductor-motiftestr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-motiftestr";
        var versions = ["1.6.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-motiftestr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-motiftestr/README.html