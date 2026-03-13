:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moma'
.. highlight: bash

bioconductor-moma
=================

.. conda:recipe:: bioconductor-moma
   :replaces_section_title:
   :noindex:

   Multi Omic Master Regulator Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOMA.html
   :license: GPL-3
   :recipe: /`bioconductor-moma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moma/meta.yaml>`_

   This package implements the inference of candidate master regulator proteins from multi\-omics\' data \(MOMA\) algorithm\, as well as ancillary analysis and visualization functions.


.. conda:package:: bioconductor-moma

   |downloads_bioconductor-moma| |docker_bioconductor-moma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-cluster: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-mkmisc: 
   :depends on r-rcolorbrewer: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-moma

to add into an existing workspace instead, run::

    pixi add bioconductor-moma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-moma

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-moma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-moma:<tag>

(see `bioconductor-moma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-moma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moma
   :alt:   (downloads)
.. |docker_bioconductor-moma| image:: https://quay.io/repository/biocontainers/bioconductor-moma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moma
.. _`bioconductor-moma/tags`: https://quay.io/repository/biocontainers/bioconductor-moma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moma";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moma/README.html