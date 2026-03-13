:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-peakpanther'
.. highlight: bash

bioconductor-peakpanther
========================

.. conda:recipe:: bioconductor-peakpanther
   :replaces_section_title:
   :noindex:

   Peak Picking and Annotation of High Resolution Experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/peakPantheR.html
   :license: GPL-3
   :recipe: /`bioconductor-peakpanther <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-peakpanther/meta.yaml>`_

   An automated pipeline for the detection\, integration and reporting of predefined features across a large number of mass spectrometry data files. It enables the real time annotation of multiple compounds in a single file\, or the parallel annotation of multiple compounds in multiple files. A graphical user interface as well as command line functions will assist in assessing the quality of annotation and update fitting parameters until a satisfactory result is obtained.


.. conda:package:: bioconductor-peakpanther

   |downloads_bioconductor-peakpanther| |docker_bioconductor-peakpanther|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bslib: 
   :depends on r-doparallel: ``>=1.0.11``
   :depends on r-dt: ``>=0.15``
   :depends on r-foreach: ``>=1.4.4``
   :depends on r-ggplot2: ``>=3.5.0``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-lubridate: 
   :depends on r-minpack.lm: ``>=1.2.1``
   :depends on r-pracma: ``>=2.2.3``
   :depends on r-scales: ``>=0.5.0``
   :depends on r-shiny: ``>=1.0.5``
   :depends on r-shinycssloaders: ``>=1.0.0``
   :depends on r-stringr: ``>=1.2.0``
   :depends on r-svglite: ``>=2.1.1``
   :depends on r-xml: ``>=3.98.1.10``

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

    pixi global install bioconductor-peakpanther

to add into an existing workspace instead, run::

    pixi add bioconductor-peakpanther

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-peakpanther

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-peakpanther

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-peakpanther:<tag>

(see `bioconductor-peakpanther/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-peakpanther| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-peakpanther.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-peakpanther
   :alt:   (downloads)
.. |docker_bioconductor-peakpanther| image:: https://quay.io/repository/biocontainers/bioconductor-peakpanther/status
   :target: https://quay.io/repository/biocontainers/bioconductor-peakpanther
.. _`bioconductor-peakpanther/tags`: https://quay.io/repository/biocontainers/bioconductor-peakpanther?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-peakpanther";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-peakpanther/README.html