:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tidybulk'
.. highlight: bash

bioconductor-tidybulk
=====================

.. conda:recipe:: bioconductor-tidybulk
   :replaces_section_title:
   :noindex:

   Brings transcriptomics to the tidyverse

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tidybulk.html
   :license: GPL-3
   :recipe: /`bioconductor-tidybulk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tidybulk/meta.yaml>`_

   This is a collection of utility functions that allow to perform exploration of and calculations to RNA sequencing data\, in a modular\, pipe\-friendly and tidy fashion.


.. conda:package:: bioconductor-tidybulk

   |downloads_bioconductor-tidybulk| |docker_bioconductor-tidybulk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>1.18.0-0</code>,  <code>1.14.2-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``2.0.1-0``,  ``1.18.0-0``,  ``1.14.2-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-crayon: 
   :depends on r-dplyr: ``>=1.1.0``
   :depends on r-ggplot2: 
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-ttservice: ``>=0.3.6``

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

    pixi global install bioconductor-tidybulk

to add into an existing workspace instead, run::

    pixi add bioconductor-tidybulk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tidybulk

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tidybulk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tidybulk:<tag>

(see `bioconductor-tidybulk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tidybulk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tidybulk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tidybulk
   :alt:   (downloads)
.. |docker_bioconductor-tidybulk| image:: https://quay.io/repository/biocontainers/bioconductor-tidybulk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tidybulk
.. _`bioconductor-tidybulk/tags`: https://quay.io/repository/biocontainers/bioconductor-tidybulk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tidybulk";
        var versions = ["2.0.1","1.18.0","1.14.2","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tidybulk/README.html