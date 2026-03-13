:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dmrscan'
.. highlight: bash

bioconductor-dmrscan
====================

.. conda:recipe:: bioconductor-dmrscan
   :replaces_section_title:
   :noindex:

   Detection of Differentially Methylated Regions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DMRScan.html
   :license: GPL-3
   :recipe: /`bioconductor-dmrscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dmrscan/meta.yaml>`_

   This package detects significant differentially methylated regions \(for both qualitative and quantitative traits\)\, using a scan statistic with underlying Poisson heuristics. The scan statistic will depend on a sequence of window sizes \(\# of CpGs within each window\) and on a threshold for each window size. This threshold can be calculated by three different means\: i\) analytically using Siegmund et.al \(2012\) solution \(preferred\)\, ii\) an important sampling as suggested by Zhang \(2008\)\, and a iii\) full MCMC modeling of the data\, choosing between a number of different options for modeling the dependency between each CpG.


.. conda:package:: bioconductor-dmrscan

   |downloads_bioconductor-dmrscan| |docker_bioconductor-dmrscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mvtnorm: 
   :depends on r-rcpproll: 

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

    pixi global install bioconductor-dmrscan

to add into an existing workspace instead, run::

    pixi add bioconductor-dmrscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dmrscan

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dmrscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dmrscan:<tag>

(see `bioconductor-dmrscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dmrscan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dmrscan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dmrscan
   :alt:   (downloads)
.. |docker_bioconductor-dmrscan| image:: https://quay.io/repository/biocontainers/bioconductor-dmrscan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dmrscan
.. _`bioconductor-dmrscan/tags`: https://quay.io/repository/biocontainers/bioconductor-dmrscan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dmrscan";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dmrscan/README.html