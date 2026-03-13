:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msstatsptm'
.. highlight: bash

bioconductor-msstatsptm
=======================

.. conda:recipe:: bioconductor-msstatsptm
   :replaces_section_title:
   :noindex:

   Statistical Characterization of Post\-translational Modifications

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/MSstatsPTM.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msstatsptm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msstatsptm/meta.yaml>`_

   MSstatsPTM provides general statistical methods for quantitative characterization of post\-translational modifications \(PTMs\). Supports DDA\, DIA\, SRM\, and tandem mass tag \(TMT\) labeling. Typically\, the analysis involves the quantification of PTM sites \(i.e.\, modified residues\) and their corresponding proteins\, as well as the integration of the quantification results. MSstatsPTM provides functions for summarization\, estimation of PTM site abundance\, and detection of changes in PTMs across experimental conditions.


.. conda:package:: bioconductor-msstatsptm

   |downloads_bioconductor-msstatsptm| |docker_bioconductor-msstatsptm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.12.0-0</code>,  <code>2.4.1-0</code>,  <code>2.2.4-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.4.2-1</code>,  <code>1.4.2-0</code>,  <code>1.4.0-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``2.12.0-0``,  ``2.4.1-0``,  ``2.2.4-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-2``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-msstats: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-msstats: ``>=4.18.1,<4.19.0a0``
   :depends on bioconductor-msstatsconvert: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-msstatsconvert: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-msstatstmt: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-msstatstmt: ``>=2.18.0,<2.19.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-htmltools: 
   :depends on r-plotly: 
   :depends on r-rcpp: 
   :depends on r-stringi: 
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

    pixi global install bioconductor-msstatsptm

to add into an existing workspace instead, run::

    pixi add bioconductor-msstatsptm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-msstatsptm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-msstatsptm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-msstatsptm:<tag>

(see `bioconductor-msstatsptm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-msstatsptm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msstatsptm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msstatsptm
   :alt:   (downloads)
.. |docker_bioconductor-msstatsptm| image:: https://quay.io/repository/biocontainers/bioconductor-msstatsptm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msstatsptm
.. _`bioconductor-msstatsptm/tags`: https://quay.io/repository/biocontainers/bioconductor-msstatsptm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msstatsptm";
        var versions = ["2.12.0","2.4.1","2.2.4","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msstatsptm/README.html