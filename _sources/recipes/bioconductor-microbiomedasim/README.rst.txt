:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomedasim'
.. highlight: bash

bioconductor-microbiomedasim
============================

.. conda:recipe:: bioconductor-microbiomedasim
   :replaces_section_title:
   :noindex:

   Microbiome Differential Abundance Simulation

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/microbiomeDASim.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-microbiomedasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomedasim/meta.yaml>`_

   A toolkit for simulating differential microbiome data designed for longitudinal analyses. Several functional forms may be specified for the mean trend. Observations are drawn from a multivariate normal model. The objective of this package is to be able to simulate data in order to accurately compare different longitudinal methods for differential abundance.


.. conda:package:: bioconductor-microbiomedasim

   |downloads_bioconductor-microbiomedasim| |docker_bioconductor-microbiomedasim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-metagenomeseq: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mvtnorm: 
   :depends on r-pbapply: 
   :depends on r-tmvtnorm: 

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

    pixi global install bioconductor-microbiomedasim

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiomedasim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiomedasim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiomedasim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiomedasim:<tag>

(see `bioconductor-microbiomedasim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiomedasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomedasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomedasim
   :alt:   (downloads)
.. |docker_bioconductor-microbiomedasim| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim
.. _`bioconductor-microbiomedasim/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomedasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomedasim";
        var versions = ["1.24.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomedasim/README.html