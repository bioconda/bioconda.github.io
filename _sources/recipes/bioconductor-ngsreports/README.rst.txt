:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngsreports'
.. highlight: bash

bioconductor-ngsreports
=======================

.. conda:recipe:: bioconductor-ngsreports
   :replaces_section_title:
   :noindex:

   Load FastqQC reports and other NGS related files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ngsReports.html
   :license: LGPL-3
   :recipe: /`bioconductor-ngsreports <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngsreports/meta.yaml>`_

   This package provides methods and object classes for parsing FastQC reports and output summaries from other NGS tools into R. As well as parsing files\, multiple plotting methods have been implemented for visualising the parsed data. Plots can be generated as static ggplot objects or interactive plotly objects.


.. conda:package:: bioconductor-ngsreports

   |downloads_bioconductor-ngsreports| |docker_bioconductor-ngsreports|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.1-0</code>,  <code>2.8.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.4-0</code>,  <code>2.0.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``2.12.1-0``,  ``2.8.0-0``,  ``2.4.0-0``,  ``2.2.4-0``,  ``2.0.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-dplyr: ``>=1.1.0``
   :depends on r-forcats: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: ``>=4.0.0``
   :depends on r-jsonlite: 
   :depends on r-lifecycle: 
   :depends on r-lubridate: 
   :depends on r-patchwork: ``>=1.1.1``
   :depends on r-plotly: ``>=4.9.4``
   :depends on r-rlang: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: ``>=1.3.1``
   :depends on r-tidyr: 
   :depends on r-tidyselect: ``>=0.2.3``
   :depends on r-zoo: 

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

    pixi global install bioconductor-ngsreports

to add into an existing workspace instead, run::

    pixi add bioconductor-ngsreports

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ngsreports

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ngsreports

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ngsreports:<tag>

(see `bioconductor-ngsreports/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ngsreports| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngsreports.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ngsreports
   :alt:   (downloads)
.. |docker_bioconductor-ngsreports| image:: https://quay.io/repository/biocontainers/bioconductor-ngsreports/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngsreports
.. _`bioconductor-ngsreports/tags`: https://quay.io/repository/biocontainers/bioconductor-ngsreports?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ngsreports";
        var versions = ["2.12.1","2.8.0","2.4.0","2.2.4","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngsreports/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngsreports/README.html