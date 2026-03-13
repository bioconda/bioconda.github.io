:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qsmooth'
.. highlight: bash

bioconductor-qsmooth
====================

.. conda:recipe:: bioconductor-qsmooth
   :replaces_section_title:
   :noindex:

   Smooth quantile normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/qsmooth.html
   :license: GPL-3
   :recipe: /`bioconductor-qsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qsmooth/meta.yaml>`_

   Smooth quantile normalization is a generalization of quantile normalization\, which is average of the two types of assumptions about the data generation process\: quantile normalization and quantile normalization between groups.


.. conda:package:: bioconductor-qsmooth

   |downloads_bioconductor-qsmooth| |docker_bioconductor-qsmooth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hmisc: 

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

    pixi global install bioconductor-qsmooth

to add into an existing workspace instead, run::

    pixi add bioconductor-qsmooth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-qsmooth

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-qsmooth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-qsmooth:<tag>

(see `bioconductor-qsmooth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-qsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qsmooth.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qsmooth
   :alt:   (downloads)
.. |docker_bioconductor-qsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-qsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qsmooth
.. _`bioconductor-qsmooth/tags`: https://quay.io/repository/biocontainers/bioconductor-qsmooth?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qsmooth";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qsmooth/README.html