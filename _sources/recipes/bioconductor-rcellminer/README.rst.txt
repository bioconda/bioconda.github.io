:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcellminer'
.. highlight: bash

bioconductor-rcellminer
=======================

.. conda:recipe:: bioconductor-rcellminer
   :replaces_section_title:
   :noindex:

   rcellminer\: Molecular Profiles\, Drug Response\, and Chemical Structures for the NCI\-60 Cell Lines

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rcellminer.html
   :license: LGPL-3 + file LICENSE
   :recipe: /`bioconductor-rcellminer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcellminer/meta.yaml>`_

   The NCI\-60 cancer cell line panel has been used over the course of several decades as an anti\-cancer drug screen. This panel was developed as part of the Developmental Therapeutics Program \(DTP\, http\:\/\/dtp.nci.nih.gov\/\) of the U.S. National Cancer Institute \(NCI\). Thousands of compounds have been tested on the NCI\-60\, which have been extensively characterized by many platforms for gene and protein expression\, copy number\, mutation\, and others \(Reinhold\, et al.\, 2012\). The purpose of the CellMiner project \(http\:\/\/discover.nci.nih.gov\/ cellminer\) has been to integrate data from multiple platforms used to analyze the NCI\-60 and to provide a powerful suite of tools for exploration of NCI\-60 data.


.. conda:package:: bioconductor-rcellminer

   |downloads_bioconductor-rcellminer| |docker_bioconductor-rcellminer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.32.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-0</code>,  <code>2.12.1-0</code>,  <code>2.11.1-0</code>,  </span></summary>
      

      ``2.32.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.16.0-0``,  ``2.14.0-0``,  ``2.12.1-0``,  ``2.11.1-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.6.0-1``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-rcellminerdata: ``>=2.32.0,<2.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-shiny: 
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

    pixi global install bioconductor-rcellminer

to add into an existing workspace instead, run::

    pixi add bioconductor-rcellminer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcellminer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcellminer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcellminer:<tag>

(see `bioconductor-rcellminer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcellminer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcellminer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcellminer
   :alt:   (downloads)
.. |docker_bioconductor-rcellminer| image:: https://quay.io/repository/biocontainers/bioconductor-rcellminer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcellminer
.. _`bioconductor-rcellminer/tags`: https://quay.io/repository/biocontainers/bioconductor-rcellminer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcellminer";
        var versions = ["2.32.0","2.28.0","2.24.0","2.22.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcellminer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcellminer/README.html