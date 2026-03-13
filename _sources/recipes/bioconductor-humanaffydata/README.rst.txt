:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanaffydata'
.. highlight: bash

bioconductor-humanaffydata
==========================

.. conda:recipe:: bioconductor-humanaffydata
   :replaces_section_title:
   :noindex:

   GEO accession GSE64985 and ArrayExpress accession E\-MTAB\-62 as ExpressionSet objects

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/HumanAffyData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanaffydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata/meta.yaml>`_

   Re\-analysis of human gene expression data generated on the Affymetrix HG U133PlusV2 \(EH176\) and Affymetrix HG U133A \(EH177\) platforms. The original data were normalized using robust multiarray averaging \(RMA\) to obtain an integrated gene expression atlas across diverse biological sample types and conditions. The entire compendia comprisee 9395 arrays for EH176 and 5372 arrays for EH177.


.. conda:package:: bioconductor-humanaffydata

   |downloads_bioconductor-humanaffydata| |docker_bioconductor-humanaffydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-humanaffydata

to add into an existing workspace instead, run::

    pixi add bioconductor-humanaffydata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-humanaffydata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-humanaffydata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-humanaffydata:<tag>

(see `bioconductor-humanaffydata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-humanaffydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanaffydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanaffydata
   :alt:   (downloads)
.. |docker_bioconductor-humanaffydata| image:: https://quay.io/repository/biocontainers/bioconductor-humanaffydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanaffydata
.. _`bioconductor-humanaffydata/tags`: https://quay.io/repository/biocontainers/bioconductor-humanaffydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanaffydata";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html