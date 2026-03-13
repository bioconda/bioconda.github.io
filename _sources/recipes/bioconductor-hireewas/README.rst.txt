:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hireewas'
.. highlight: bash

bioconductor-hireewas
=====================

.. conda:recipe:: bioconductor-hireewas
   :replaces_section_title:
   :noindex:

   Detection of cell\-type\-specific risk\-CpG sites in epigenome\-wide association studies

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HIREewas.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hireewas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hireewas/meta.yaml>`_

   In epigenome\-wide association studies\, the measured signals for each sample are a mixture of methylation profiles from different cell types. The current approaches to the association detection only claim whether a cytosine\-phosphate\-guanine \(CpG\) site is associated with the phenotype or not\, but they cannot determine the cell type in which the risk\-CpG site is affected by the phenotype. We propose a solid statistical method\, HIgh REsolution \(HIRE\)\, which not only substantially improves the power of association detection at the aggregated level as compared to the existing methods but also enables the detection of risk\-CpG sites for individual cell types. The \"HIREewas\" R package is to implement HIRE model in R.


.. conda:package:: bioconductor-hireewas

   |downloads_bioconductor-hireewas| |docker_bioconductor-hireewas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.12.0-2</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.12.0-2``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-gplots: 
   :depends on r-quadprog: 

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

    pixi global install bioconductor-hireewas

to add into an existing workspace instead, run::

    pixi add bioconductor-hireewas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hireewas

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hireewas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hireewas:<tag>

(see `bioconductor-hireewas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hireewas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hireewas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hireewas
   :alt:   (downloads)
.. |docker_bioconductor-hireewas| image:: https://quay.io/repository/biocontainers/bioconductor-hireewas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hireewas
.. _`bioconductor-hireewas/tags`: https://quay.io/repository/biocontainers/bioconductor-hireewas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hireewas";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hireewas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hireewas/README.html