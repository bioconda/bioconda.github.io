:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ngscopydata'
.. highlight: bash

bioconductor-ngscopydata
========================

.. conda:recipe:: bioconductor-ngscopydata
   :replaces_section_title:
   :noindex:

   Subset of BAM files of human tumor and pooled normal sequencing data \(Zhao et al. 2014\) for the NGScopy package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/NGScopyData.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-ngscopydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ngscopydata/meta.yaml>`_

   Subset of BAM files of human lung tumor and pooled normal samples by targeted panel sequencing. \[Zhao et al 2014. Targeted Sequencing in Non\-Small Cell Lung Cancer \(NSCLC\) Using the University of North Carolina \(UNC\) Sequencing Assay Captures Most Previously Described Genetic Aberrations in NSCLC. In preparation.\] Each sample is a 10 percent random subsample drawn from the original sequencing data. The pooled normal sample has been rescaled accroding to the total number of normal samples in the \"pool\". Here provided is the subsampled data on chr6 \(hg19\).


.. conda:package:: bioconductor-ngscopydata

   |downloads_bioconductor-ngscopydata| |docker_bioconductor-ngscopydata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
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

    pixi global install bioconductor-ngscopydata

to add into an existing workspace instead, run::

    pixi add bioconductor-ngscopydata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ngscopydata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ngscopydata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ngscopydata:<tag>

(see `bioconductor-ngscopydata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ngscopydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ngscopydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ngscopydata
   :alt:   (downloads)
.. |docker_bioconductor-ngscopydata| image:: https://quay.io/repository/biocontainers/bioconductor-ngscopydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ngscopydata
.. _`bioconductor-ngscopydata/tags`: https://quay.io/repository/biocontainers/bioconductor-ngscopydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ngscopydata";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ngscopydata/README.html