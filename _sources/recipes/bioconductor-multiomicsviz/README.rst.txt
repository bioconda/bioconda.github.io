:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiomicsviz'
.. highlight: bash

bioconductor-multiomicsviz
==========================

.. conda:recipe:: bioconductor-multiomicsviz
   :replaces_section_title:
   :noindex:

   Plot the effect of one omics data on other omics data along the chromosome

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/multiOmicsViz.html
   :license: LGPL
   :recipe: /`bioconductor-multiomicsviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiomicsviz/meta.yaml>`_

   Calculate the spearman correlation between the source omics data and other target omics data\, identify the significant correlations and plot the significant correlations on the heat map in which the x\-axis and y\-axis are ordered by the chromosomal location.


.. conda:package:: bioconductor-multiomicsviz

   |downloads_bioconductor-multiomicsviz| |docker_bioconductor-multiomicsviz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 

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

    pixi global install bioconductor-multiomicsviz

to add into an existing workspace instead, run::

    pixi add bioconductor-multiomicsviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multiomicsviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multiomicsviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multiomicsviz:<tag>

(see `bioconductor-multiomicsviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multiomicsviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiomicsviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiomicsviz
   :alt:   (downloads)
.. |docker_bioconductor-multiomicsviz| image:: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz
.. _`bioconductor-multiomicsviz/tags`: https://quay.io/repository/biocontainers/bioconductor-multiomicsviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiomicsviz";
        var versions = ["1.24.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiomicsviz/README.html