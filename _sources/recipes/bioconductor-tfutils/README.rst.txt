:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfutils'
.. highlight: bash

bioconductor-tfutils
====================

.. conda:recipe:: bioconductor-tfutils
   :replaces_section_title:
   :noindex:

   TFutils

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TFutils.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfutils/meta.yaml>`_

   This package helps users to work with TF metadata from various sources. Significant catalogs of TFs and classifications thereof are made available. Tools for working with motif scans are also provided.


.. conda:package:: bioconductor-tfutils

   |downloads_bioconductor-tfutils| |docker_bioconductor-tfutils|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicfiles: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-httr: 
   :depends on r-magrittr: 
   :depends on r-miniui: 
   :depends on r-readxl: 
   :depends on r-rjson: 
   :depends on r-shiny: 

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

    pixi global install bioconductor-tfutils

to add into an existing workspace instead, run::

    pixi add bioconductor-tfutils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tfutils

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tfutils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tfutils:<tag>

(see `bioconductor-tfutils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tfutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfutils
   :alt:   (downloads)
.. |docker_bioconductor-tfutils| image:: https://quay.io/repository/biocontainers/bioconductor-tfutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfutils
.. _`bioconductor-tfutils/tags`: https://quay.io/repository/biocontainers/bioconductor-tfutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tfutils";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfutils/README.html