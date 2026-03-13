:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-quantro'
.. highlight: bash

bioconductor-quantro
====================

.. conda:recipe:: bioconductor-quantro
   :replaces_section_title:
   :noindex:

   A test for when to use quantile normalization

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/quantro.html
   :license: GPL-3
   :recipe: /`bioconductor-quantro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-quantro/meta.yaml>`_
   :links: biotools: :biotools:`quantro`

   A data\-driven test for the assumptions of quantile normalization using raw data such as objects that inherit eSets \(e.g. ExpressionSet\, MethylSet\). Group level information about each sample \(such as Tumor \/ Normal status\) must also be provided because the test assesses if there are global differences in the distributions between the user\-defined groups.


.. conda:package:: bioconductor-quantro

   |downloads_bioconductor-quantro| |docker_bioconductor-quantro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-iterators: 
   :depends on r-rcolorbrewer: 

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

    pixi global install bioconductor-quantro

to add into an existing workspace instead, run::

    pixi add bioconductor-quantro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-quantro

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-quantro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-quantro:<tag>

(see `bioconductor-quantro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-quantro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-quantro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-quantro
   :alt:   (downloads)
.. |docker_bioconductor-quantro| image:: https://quay.io/repository/biocontainers/bioconductor-quantro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-quantro
.. _`bioconductor-quantro/tags`: https://quay.io/repository/biocontainers/bioconductor-quantro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-quantro";
        var versions = ["1.44.0","1.40.0","1.36.0","1.34.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-quantro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-quantro/README.html