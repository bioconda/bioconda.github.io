:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compartmap'
.. highlight: bash

bioconductor-compartmap
=======================

.. conda:recipe:: bioconductor-compartmap
   :replaces_section_title:
   :noindex:

   Higher\-order chromatin domain inference in single cells from scRNA\-seq and scATAC\-seq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/compartmap.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-compartmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compartmap/meta.yaml>`_

   Compartmap performs direct inference of higher\-order chromatin from scRNA\-seq and scATAC\-seq. This package implements a James\-Stein estimator for computing single\-cell level higher\-order chromatin domains. Further\, we utilize random matrix theory as a method to de\-noise correlation matrices to achieve a similar \"plaid\-like\" patterning as observed in Hi\-C and scHi\-C data.


.. conda:package:: bioconductor-compartmap

   |downloads_bioconductor-compartmap| |docker_bioconductor-compartmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocsingular: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-raggedexperiment: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-reshape2: 
   :depends on r-rmtstat: 
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

    pixi global install bioconductor-compartmap

to add into an existing workspace instead, run::

    pixi add bioconductor-compartmap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-compartmap

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-compartmap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-compartmap:<tag>

(see `bioconductor-compartmap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-compartmap| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compartmap.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compartmap
   :alt:   (downloads)
.. |docker_bioconductor-compartmap| image:: https://quay.io/repository/biocontainers/bioconductor-compartmap/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compartmap
.. _`bioconductor-compartmap/tags`: https://quay.io/repository/biocontainers/bioconductor-compartmap?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compartmap";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compartmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compartmap/README.html