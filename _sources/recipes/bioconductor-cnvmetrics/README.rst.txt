:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnvmetrics'
.. highlight: bash

bioconductor-cnvmetrics
=======================

.. conda:recipe:: bioconductor-cnvmetrics
   :replaces_section_title:
   :noindex:

   Copy Number Variant Metrics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CNVMetrics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnvmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnvmetrics/meta.yaml>`_

   The CNVMetrics package calculates similarity metrics to facilitate copy number variant comparison among samples and\/or methods. Similarity metrics can be employed to compare CNV profiles of genetically unrelated samples as well as those with a common genetic background. Some metrics are based on the shared amplified\/deleted regions while other metrics rely on the level of amplification\/deletion. The data type used as input is a plain text file containing the genomic position of the copy number variations\, as well as the status and\/or the log2 ratio values. Finally\, a visualization tool is provided to explore resulting metrics.


.. conda:package:: bioconductor-cnvmetrics

   |downloads_bioconductor-cnvmetrics| |docker_bioconductor-cnvmetrics|

   :versions:
      
      

      ``1.14.2-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gridextra: 
   :depends on r-magrittr: 
   :depends on r-pheatmap: 
   :depends on r-rbeta2009: 

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

    pixi global install bioconductor-cnvmetrics

to add into an existing workspace instead, run::

    pixi add bioconductor-cnvmetrics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cnvmetrics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cnvmetrics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cnvmetrics:<tag>

(see `bioconductor-cnvmetrics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cnvmetrics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnvmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnvmetrics
   :alt:   (downloads)
.. |docker_bioconductor-cnvmetrics| image:: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics
.. _`bioconductor-cnvmetrics/tags`: https://quay.io/repository/biocontainers/bioconductor-cnvmetrics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cnvmetrics";
        var versions = ["1.14.2","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnvmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnvmetrics/README.html