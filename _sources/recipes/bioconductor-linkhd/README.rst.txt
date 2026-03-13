:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-linkhd'
.. highlight: bash

bioconductor-linkhd
===================

.. conda:recipe:: bioconductor-linkhd
   :replaces_section_title:
   :noindex:

   LinkHD\: a versatile framework to explore and integrate heterogeneous data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LinkHD.html
   :license: GPL-3
   :recipe: /`bioconductor-linkhd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linkhd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-linkhd/meta.yaml>`_

   Here we present Link\-HD\, an approach to integrate heterogeneous datasets\, as a generalization of STATIS\-ACT \(“Structuration des Tableaux A Trois Indices de la Statistique–Analyse Conjointe de Tableaux”\)\, a family of methods to join and compare information from multiple subspaces. However\, STATIS\-ACT has some drawbacks since it only allows continuous data and it is unable to establish relationships between samples and features. In order to tackle these constraints\, we incorporate multiple distance options and a linear regression based Biplot model in order to stablish relationships between observations and variable and perform variable selection.


.. conda:package:: bioconductor-linkhd

   |downloads_bioconductor-linkhd| |docker_bioconductor-linkhd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-emmeans: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-gridextra: 
   :depends on r-reshape2: 
   :depends on r-rio: 
   :depends on r-scales: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-linkhd

to add into an existing workspace instead, run::

    pixi add bioconductor-linkhd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-linkhd

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-linkhd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-linkhd:<tag>

(see `bioconductor-linkhd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-linkhd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-linkhd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-linkhd
   :alt:   (downloads)
.. |docker_bioconductor-linkhd| image:: https://quay.io/repository/biocontainers/bioconductor-linkhd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-linkhd
.. _`bioconductor-linkhd/tags`: https://quay.io/repository/biocontainers/bioconductor-linkhd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-linkhd";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-linkhd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-linkhd/README.html