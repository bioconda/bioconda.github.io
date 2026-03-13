:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lydata'
.. highlight: bash

bioconductor-lydata
===================

.. conda:recipe:: bioconductor-lydata
   :replaces_section_title:
   :noindex:

   Example Dataset for crossmeta Package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/lydata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lydata/meta.yaml>`_

   Raw data downloaded from GEO for the compound LY294002. Raw data is from multiple platforms from Affymetrix and Illumina. This data is used to illustrate the cross\-platform meta\-analysis of microarray data using the crossmeta package.


.. conda:package:: bioconductor-lydata

   |downloads_bioconductor-lydata| |docker_bioconductor-lydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.23.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.23.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-lydata

to add into an existing workspace instead, run::

    pixi add bioconductor-lydata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lydata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lydata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lydata:<tag>

(see `bioconductor-lydata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lydata
   :alt:   (downloads)
.. |docker_bioconductor-lydata| image:: https://quay.io/repository/biocontainers/bioconductor-lydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lydata
.. _`bioconductor-lydata/tags`: https://quay.io/repository/biocontainers/bioconductor-lydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lydata";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.23.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lydata/README.html