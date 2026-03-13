:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowtime'
.. highlight: bash

bioconductor-flowtime
=====================

.. conda:recipe:: bioconductor-flowtime
   :replaces_section_title:
   :noindex:

   Annotation and analysis of biological dynamical systems using flow cytometry

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/flowTime.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowtime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowtime/meta.yaml>`_

   This package facilitates analysis of both timecourse and steady state flow cytometry experiments. This package was originially developed for quantifying the function of gene regulatory networks in yeast \(strain W303\) expressing fluorescent reporter proteins using BD Accuri C6 and SORP cytometers. However\, the functions are for the most part general and may be adapted for analysis of other organisms using other flow cytometers. Functions in this package facilitate the annotation of flow cytometry data with experimental metadata\, as often required for publication and general ease\-of\-reuse. Functions for creating\, saving and loading gate sets are also included. In the past\, we have typically generated summary statistics for each flowset for each timepoint and then annotated and analyzed these summary statistics. This method loses a great deal of the power that comes from the large amounts of individual cell data generated in flow cytometry\, by essentially collapsing this data into a bulk measurement after subsetting. In addition to these summary functions\, this package also contains functions to facilitate annotation and analysis of steady\-state or time\-lapse data utilizing all of the data collected from the thousands of individual cells in each sample.


.. conda:package:: bioconductor-flowtime

   |downloads_bioconductor-flowtime| |docker_bioconductor-flowtime|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.17.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.17.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=1.0.0``
   :depends on r-magrittr: 
   :depends on r-plyr: 
   :depends on r-rlang: 
   :depends on r-tibble: 

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

    pixi global install bioconductor-flowtime

to add into an existing workspace instead, run::

    pixi add bioconductor-flowtime

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-flowtime

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-flowtime

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-flowtime:<tag>

(see `bioconductor-flowtime/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-flowtime| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowtime.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowtime
   :alt:   (downloads)
.. |docker_bioconductor-flowtime| image:: https://quay.io/repository/biocontainers/bioconductor-flowtime/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowtime
.. _`bioconductor-flowtime/tags`: https://quay.io/repository/biocontainers/bioconductor-flowtime?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowtime";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowtime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowtime/README.html