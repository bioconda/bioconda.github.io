:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpp2d'
.. highlight: bash

bioconductor-tpp2d
==================

.. conda:recipe:: bioconductor-tpp2d
   :replaces_section_title:
   :noindex:

   Detection of ligand\-protein interactions from 2D thermal profiles \(DLPTP\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TPP2D.html
   :license: GPL-3
   :recipe: /`bioconductor-tpp2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpp2d/meta.yaml>`_

   Detection of ligand\-protein interactions from 2D thermal profiles \(DLPTP\)\, Performs an FDR\-controlled analysis of 2D\-TPP experiments by functional analysis of dose\-response curves across temperatures.


.. conda:package:: bioconductor-tpp2d

   |downloads_bioconductor-tpp2d| |docker_bioconductor-tpp2d|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-openxlsx: 
   :depends on r-rcurl: 
   :depends on r-stringr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-tpp2d

to add into an existing workspace instead, run::

    pixi add bioconductor-tpp2d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tpp2d

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tpp2d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tpp2d:<tag>

(see `bioconductor-tpp2d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tpp2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpp2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpp2d
   :alt:   (downloads)
.. |docker_bioconductor-tpp2d| image:: https://quay.io/repository/biocontainers/bioconductor-tpp2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpp2d
.. _`bioconductor-tpp2d/tags`: https://quay.io/repository/biocontainers/bioconductor-tpp2d?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tpp2d";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpp2d/README.html