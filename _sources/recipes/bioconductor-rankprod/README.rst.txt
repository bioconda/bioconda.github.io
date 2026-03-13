:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rankprod'
.. highlight: bash

bioconductor-rankprod
=====================

.. conda:recipe:: bioconductor-rankprod
   :replaces_section_title:
   :noindex:

   Rank Product method for identifying differentially expressed genes with application in meta\-analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RankProd.html
   :license: file LICENSE
   :recipe: /`bioconductor-rankprod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rankprod/meta.yaml>`_
   :links: biotools: :biotools:`rankprod`, doi: :doi:`10.1093/bioinformatics/btl476`

   Non\-parametric method for identifying differentially expressed \(up\- or down\- regulated\) genes based on the estimated percentage of false predictions \(pfp\). The method can combine data sets from different origins \(meta\-analysis\) to increase the power of the identification.


.. conda:package:: bioconductor-rankprod

   |downloads_bioconductor-rankprod| |docker_bioconductor-rankprod|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.36.0-0</code>,  <code>3.32.0-0</code>,  <code>3.28.0-0</code>,  <code>3.26.0-0</code>,  <code>3.24.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-1</code>,  <code>3.16.0-0</code>,  </span></summary>
      

      ``3.36.0-0``,  ``3.32.0-0``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-1``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gmp: 
   :depends on r-rmpfr: 

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

    pixi global install bioconductor-rankprod

to add into an existing workspace instead, run::

    pixi add bioconductor-rankprod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rankprod

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rankprod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rankprod:<tag>

(see `bioconductor-rankprod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rankprod| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rankprod.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rankprod
   :alt:   (downloads)
.. |docker_bioconductor-rankprod| image:: https://quay.io/repository/biocontainers/bioconductor-rankprod/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rankprod
.. _`bioconductor-rankprod/tags`: https://quay.io/repository/biocontainers/bioconductor-rankprod?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rankprod";
        var versions = ["3.36.0","3.32.0","3.28.0","3.26.0","3.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rankprod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rankprod/README.html