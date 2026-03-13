:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-beyondcell'
.. highlight: bash

r-beyondcell
============

.. conda:recipe:: r-beyondcell
   :replaces_section_title:
   :noindex:

   Tool for the Analysis of tumour therapeutic heterogeneity in single\-cell RNA\-seq

   :homepage: https://gitlab.com/bu_cnio/beyondcell
   :license: GPL-3
   :recipe: /`r-beyondcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-beyondcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-beyondcell/meta.yaml>`_

   Beyondcell is a methodology for the identification of drug vulnerabilities in single\-cell RNA\-seq \(scRNA\-seq\) data. To this end\, Beyondcell focuses on the analysis of drug\-related commonalities between cells by classifying them into distinct Therapeutic Clusters \(TCs\).


.. conda:package:: r-beyondcell

   |downloads_r-beyondcell| |docker_r-beyondcell|

   :versions:
      
      

      ``1.3.3-1``,  ``1.3.3-0``

      

   
   :depends on bioconductor-qusage: ``>=2.22.0``
   :depends on numba: ``0.46.*``
   :depends on python: ``3.6.*``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-bnstruct: ``>=1.0.6``
   :depends on r-cowplot: ``>=1.1.0``
   :depends on r-deldir: ``>=1.0_2``
   :depends on r-gdata: ``>=2.18.0``
   :depends on r-ggplot2: ``>=3.3.2``
   :depends on r-ggrepel: ``>=0.8.2``
   :depends on r-patchwork: ``>=1.0.1``
   :depends on r-plyr: ``>=1.8.6``
   :depends on r-rcolorbrewer: ``>=1.1-2``
   :depends on r-reshape2: ``>=1.4.4``
   :depends on r-scales: ``>=1.1.1``
   :depends on r-see: 
   :depends on r-seurat: ``>=3.2.2``
   :depends on r-useful: 
   :depends on r-viridis: ``>=0.5.1``
   :depends on umap-learn: ``0.4.6.*``

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

    pixi global install r-beyondcell

to add into an existing workspace instead, run::

    pixi add r-beyondcell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-beyondcell

Alternatively, to install into a new environment, run::

    conda create -n envname r-beyondcell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-beyondcell:<tag>

(see `r-beyondcell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-beyondcell| image:: https://img.shields.io/conda/dn/bioconda/r-beyondcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-beyondcell
   :alt:   (downloads)
.. |docker_r-beyondcell| image:: https://quay.io/repository/biocontainers/r-beyondcell/status
   :target: https://quay.io/repository/biocontainers/r-beyondcell
.. _`r-beyondcell/tags`: https://quay.io/repository/biocontainers/r-beyondcell?tab=tags


.. raw:: html

    <script>
        var package = "r-beyondcell";
        var versions = ["1.3.3","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-beyondcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-beyondcell/README.html