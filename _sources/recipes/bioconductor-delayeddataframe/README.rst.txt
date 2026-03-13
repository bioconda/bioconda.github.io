:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-delayeddataframe'
.. highlight: bash

bioconductor-delayeddataframe
=============================

.. conda:recipe:: bioconductor-delayeddataframe
   :replaces_section_title:
   :noindex:

   Delayed operation on DataFrame using standard DataFrame metaphor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DelayedDataFrame.html
   :license: GPL-3
   :recipe: /`bioconductor-delayeddataframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayeddataframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-delayeddataframe/meta.yaml>`_

   Based on the standard DataFrame metaphor\, we are trying to implement the feature of delayed operation on the DelayedDataFrame\, with a slot of lazyIndex\, which saves the mapping indexes for each column of DelayedDataFrame. Methods like show\, validity check\, \[\/\[\[ subsetting\, rbind\/cbind are implemented for DelayedDataFrame to be operated around lazyIndex. The listData slot stays untouched until a realization call e.g.\, DataFrame constructor OR as.list\(\) is invoked.


.. conda:package:: bioconductor-delayeddataframe

   |downloads_bioconductor-delayeddataframe| |docker_bioconductor-delayeddataframe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
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

    pixi global install bioconductor-delayeddataframe

to add into an existing workspace instead, run::

    pixi add bioconductor-delayeddataframe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-delayeddataframe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-delayeddataframe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-delayeddataframe:<tag>

(see `bioconductor-delayeddataframe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-delayeddataframe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-delayeddataframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-delayeddataframe
   :alt:   (downloads)
.. |docker_bioconductor-delayeddataframe| image:: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe
.. _`bioconductor-delayeddataframe/tags`: https://quay.io/repository/biocontainers/bioconductor-delayeddataframe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-delayeddataframe";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-delayeddataframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-delayeddataframe/README.html