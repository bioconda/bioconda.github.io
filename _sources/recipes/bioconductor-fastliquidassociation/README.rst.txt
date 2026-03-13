:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fastliquidassociation'
.. highlight: bash

bioconductor-fastliquidassociation
==================================

.. conda:recipe:: bioconductor-fastliquidassociation
   :replaces_section_title:
   :noindex:

   functions for genome\-wide application of Liquid Association

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/fastLiquidAssociation.html
   :license: GPL-2
   :recipe: /`bioconductor-fastliquidassociation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fastliquidassociation/meta.yaml>`_

   This package extends the function of the LiquidAssociation package for genome\-wide application. It integrates a screening method into the LA analysis to reduce the number of triplets to be examined for a high LA value and provides code for use in subsequent significance analyses.


.. conda:package:: bioconductor-fastliquidassociation

   |downloads_bioconductor-fastliquidassociation| |docker_bioconductor-fastliquidassociation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-liquidassociation: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-doparallel: 
   :depends on r-hmisc: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-fastliquidassociation

to add into an existing workspace instead, run::

    pixi add bioconductor-fastliquidassociation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fastliquidassociation

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fastliquidassociation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fastliquidassociation:<tag>

(see `bioconductor-fastliquidassociation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fastliquidassociation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fastliquidassociation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fastliquidassociation
   :alt:   (downloads)
.. |docker_bioconductor-fastliquidassociation| image:: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation
.. _`bioconductor-fastliquidassociation/tags`: https://quay.io/repository/biocontainers/bioconductor-fastliquidassociation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fastliquidassociation";
        var versions = ["1.46.0","1.42.0","1.38.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fastliquidassociation/README.html