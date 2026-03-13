:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousegastrulationdata'
.. highlight: bash

bioconductor-mousegastrulationdata
==================================

.. conda:recipe:: bioconductor-mousegastrulationdata
   :replaces_section_title:
   :noindex:

   Single\-Cell \-omics Data across Mouse Gastrulation and Early Organogenesis

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/MouseGastrulationData.html
   :license: GPL-3
   :recipe: /`bioconductor-mousegastrulationdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousegastrulationdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousegastrulationdata/meta.yaml>`_

   Provides processed and raw count data for single\-cell RNA sequencing\, single\-cell ATAC\-seq\, and seqFISH \(spatial transcriptomic\) experiments performed along a timecourse of mouse gastrulation and early organogenesis.


.. conda:package:: bioconductor-mousegastrulationdata

   |downloads_bioconductor-mousegastrulationdata| |docker_bioconductor-mousegastrulationdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-bumpymatrix: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-mousegastrulationdata

to add into an existing workspace instead, run::

    pixi add bioconductor-mousegastrulationdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mousegastrulationdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mousegastrulationdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mousegastrulationdata:<tag>

(see `bioconductor-mousegastrulationdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mousegastrulationdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousegastrulationdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousegastrulationdata
   :alt:   (downloads)
.. |docker_bioconductor-mousegastrulationdata| image:: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata
.. _`bioconductor-mousegastrulationdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mousegastrulationdata";
        var versions = ["1.24.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousegastrulationdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousegastrulationdata/README.html