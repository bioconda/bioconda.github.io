:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nullranges'
.. highlight: bash

bioconductor-nullranges
=======================

.. conda:recipe:: bioconductor-nullranges
   :replaces_section_title:
   :noindex:

   Generation of null ranges via bootstrapping or covariate matching

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/nullranges.html
   :license: GPL-3
   :recipe: /`bioconductor-nullranges <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullranges>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullranges/meta.yaml>`_

   Modular package for generation of sets of ranges representing the null hypothesis. These can take the form of bootstrap samples of ranges \(using the block bootstrap framework of Bickel et al 2010\)\, or sets of control ranges that are matched across one or more covariates. nullranges is designed to be inter\-operable with other packages for analysis of genomic overlap enrichment\, including the plyranges Bioconductor package.


.. conda:package:: bioconductor-nullranges

   |downloads_bioconductor-nullranges| |docker_bioconductor-nullranges|

   :versions:
      
      

      ``1.16.3-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-ggridges: 
   :depends on r-progress: 
   :depends on r-rlang: 
   :depends on r-scales: 

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

    pixi global install bioconductor-nullranges

to add into an existing workspace instead, run::

    pixi add bioconductor-nullranges

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nullranges

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nullranges

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nullranges:<tag>

(see `bioconductor-nullranges/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nullranges| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nullranges.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nullranges
   :alt:   (downloads)
.. |docker_bioconductor-nullranges| image:: https://quay.io/repository/biocontainers/bioconductor-nullranges/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nullranges
.. _`bioconductor-nullranges/tags`: https://quay.io/repository/biocontainers/bioconductor-nullranges?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nullranges";
        var versions = ["1.16.3","1.12.0","1.8.0","1.6.2","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nullranges/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nullranges/README.html