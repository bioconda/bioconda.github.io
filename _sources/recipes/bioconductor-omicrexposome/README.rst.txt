:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicrexposome'
.. highlight: bash

bioconductor-omicrexposome
==========================

.. conda:recipe:: bioconductor-omicrexposome
   :replaces_section_title:
   :noindex:

   Exposome and omic data associatin and integration analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/omicRexposome.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omicrexposome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicrexposome/meta.yaml>`_

   omicRexposome systematizes the association evaluation between exposures and omic data\, taking advantage of MultiDataSet for coordinated data management\, rexposome for exposome data definition and limma for association testing. Also to perform data integration mixing exposome and omic data using multi co\-inherent analysis \(omicade4\) and multi\-canonical correlation analysis \(PMA\).


.. conda:package:: bioconductor-omicrexposome

   |downloads_bioconductor-omicrexposome| |docker_bioconductor-omicrexposome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.2-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.2-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-multidataset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-omicade4: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-rexposome: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-isva: 
   :depends on r-pma: 
   :depends on r-smartsva: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-omicrexposome

to add into an existing workspace instead, run::

    pixi add bioconductor-omicrexposome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omicrexposome

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omicrexposome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omicrexposome:<tag>

(see `bioconductor-omicrexposome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omicrexposome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicrexposome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicrexposome
   :alt:   (downloads)
.. |docker_bioconductor-omicrexposome| image:: https://quay.io/repository/biocontainers/bioconductor-omicrexposome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicrexposome
.. _`bioconductor-omicrexposome/tags`: https://quay.io/repository/biocontainers/bioconductor-omicrexposome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicrexposome";
        var versions = ["1.32.0","1.28.0","1.24.2","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicrexposome/README.html