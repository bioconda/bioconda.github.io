:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dasper'
.. highlight: bash

bioconductor-dasper
===================

.. conda:recipe:: bioconductor-dasper
   :replaces_section_title:
   :noindex:

   Detecting abberant splicing events from RNA\-sequencing data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dasper.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dasper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dasper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dasper/meta.yaml>`_

   The aim of dasper is to detect aberrant splicing events from RNA\-seq data. dasper will use as input both junction and coverage data from RNA\-seq to calculate the deviation of each splicing event in a patient from a set of user\-defined controls. dasper uses an unsupervised outlier detection algorithm to score each splicing event in the patient with an outlier score representing the degree to which that splicing event looks abnormal.


.. conda:package:: bioconductor-dasper

   |downloads_bioconductor-dasper| |docker_bioconductor-dasper|

   :versions:
      
      

      ``1.9.0-0``,  ``1.7.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocfilecache: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-megadepth: ``>=1.10.0,<1.11.0``
   :depends on bioconductor-plyranges: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-readr: 
   :depends on r-reticulate: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-dasper

to add into an existing workspace instead, run::

    pixi add bioconductor-dasper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dasper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dasper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dasper:<tag>

(see `bioconductor-dasper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dasper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dasper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dasper
   :alt:   (downloads)
.. |docker_bioconductor-dasper| image:: https://quay.io/repository/biocontainers/bioconductor-dasper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dasper
.. _`bioconductor-dasper/tags`: https://quay.io/repository/biocontainers/bioconductor-dasper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dasper";
        var versions = ["1.9.0","1.7.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dasper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dasper/README.html