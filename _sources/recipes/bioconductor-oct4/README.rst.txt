:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oct4'
.. highlight: bash

bioconductor-oct4
=================

.. conda:recipe:: bioconductor-oct4
   :replaces_section_title:
   :noindex:

   Conditional knockdown of OCT4 in mouse ESCs

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/oct4.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-oct4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oct4/meta.yaml>`_

   This package provides the output of running Salmon on a set of 12 RNA\-seq samples from King \& Klose\, \"The pioneer factor OCT4 requires the chromatin remodeller BRG1 to support gene regulatory element function in mouse embryonic stem cells\"\, published in eLIFE\, March 2017. For details on version numbers and how the samples were processed see the package vignette.


.. conda:package:: bioconductor-oct4

   |downloads_bioconductor-oct4| |docker_bioconductor-oct4|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.13.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.13.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-oct4

to add into an existing workspace instead, run::

    pixi add bioconductor-oct4

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-oct4

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-oct4

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-oct4:<tag>

(see `bioconductor-oct4/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-oct4| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oct4.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oct4
   :alt:   (downloads)
.. |docker_bioconductor-oct4| image:: https://quay.io/repository/biocontainers/bioconductor-oct4/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oct4
.. _`bioconductor-oct4/tags`: https://quay.io/repository/biocontainers/bioconductor-oct4?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oct4";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oct4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oct4/README.html