:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-vegamc'
.. highlight: bash

bioconductor-vegamc
===================

.. conda:recipe:: bioconductor-vegamc
   :replaces_section_title:
   :noindex:

   VegaMC\: A Package Implementing a Variational Piecewise Smooth Model for Identification of Driver Chromosomal Imbalances in Cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/VegaMC.html
   :license: GPL-2
   :recipe: /`bioconductor-vegamc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vegamc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-vegamc/meta.yaml>`_
   :links: biotools: :biotools:`vegamc`, doi: :doi:`10.1093/bioinformatics/bts453`

   This package enables the detection of driver chromosomal imbalances including loss of heterozygosity \(LOH\) from array comparative genomic hybridization \(aCGH\) data. VegaMC performs a joint segmentation of a dataset and uses a statistical framework to distinguish between driver and passenger mutation. VegaMC has been implemented so that it can be immediately integrated with the output produced by PennCNV tool. In addition\, VegaMC produces in output two web pages that allows a rapid navigation between both the detected regions and the altered genes. In the web page that summarizes the altered genes\, the link to the respective Ensembl gene web page is reported.


.. conda:package:: bioconductor-vegamc

   |downloads_bioconductor-vegamc| |docker_bioconductor-vegamc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.48.0-0</code>,  <code>3.44.0-0</code>,  <code>3.40.0-0</code>,  <code>3.38.0-0</code>,  <code>3.36.0-1</code>,  <code>3.36.0-0</code>,  <code>3.32.0-2</code>,  <code>3.32.0-1</code>,  <code>3.32.0-0</code>,  </span></summary>
      

      ``3.48.0-0``,  ``3.44.0-0``,  ``3.40.0-0``,  ``3.38.0-0``,  ``3.36.0-1``,  ``3.36.0-0``,  ``3.32.0-2``,  ``3.32.0-1``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-1``,  ``3.28.0-0``,  ``3.26.0-0``,  ``3.24.0-0``,  ``3.22.0-1``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install bioconductor-vegamc

to add into an existing workspace instead, run::

    pixi add bioconductor-vegamc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-vegamc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-vegamc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-vegamc:<tag>

(see `bioconductor-vegamc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-vegamc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-vegamc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-vegamc
   :alt:   (downloads)
.. |docker_bioconductor-vegamc| image:: https://quay.io/repository/biocontainers/bioconductor-vegamc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-vegamc
.. _`bioconductor-vegamc/tags`: https://quay.io/repository/biocontainers/bioconductor-vegamc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-vegamc";
        var versions = ["3.48.0","3.44.0","3.40.0","3.38.0","3.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-vegamc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-vegamc/README.html