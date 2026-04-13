:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatslobd'
.. highlight: bash

bioconductor-msstatslobd
========================

.. conda:recipe:: bioconductor-msstatslobd
   :replaces_section_title:
   :noindex:

   Assay characterization\: estimation of limit of blanc\(LoB\) and limit of detection\(LOD\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MSstatsLOBD.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatslobd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatslobd/meta.yaml>`_

   The MSstatsLOBD package allows calculation and visualization of limit of blac \(LOB\) and limit of detection \(LOD\). We define the LOB as the highest apparent concentration of a peptide expected when replicates of a blank sample containing no peptides are measured. The LOD is defined as the measured concentration value for which the probability of falsely claiming the absence of a peptide in the sample is 0.05\, given a probability 0.05 of falsely claiming its presence. These functionalities were previously a part of the MSstats package. The methodology is described in Galitzine \(2018\) \<doi\:10.1074\/mcp.RA117.000322\>.


.. conda:package:: bioconductor-msstatslobd

   |downloads_bioconductor-msstatslobd| |docker_bioconductor-msstatslobd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-2</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-minpack.lm: 
   :depends on r-rcpp: 

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

    pixi global install bioconductor-msstatslobd

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatslobd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatslobd

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatslobd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatslobd:<tag>

(see `bioconductor-msstatslobd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatslobd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatslobd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatslobd
   :alt:   (downloads)
.. |docker_bioconductor-msstatslobd| image:: https://quay.io/repository/biocontainers/bioconductor-msstatslobd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatslobd
.. _`bioconductor-msstatslobd/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatslobd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatslobd";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatslobd/README.html