:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rtcgatoolbox'
.. highlight: bash

bioconductor-rtcgatoolbox
=========================

.. conda:recipe:: bioconductor-rtcgatoolbox
   :replaces_section_title:
   :noindex:

   A new tool for exporting TCGA Firehose data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RTCGAToolbox.html
   :license: GPL-2
   :recipe: /`bioconductor-rtcgatoolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcgatoolbox>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rtcgatoolbox/meta.yaml>`_
   :links: biotools: :biotools:`rtcgatoolbox`

   Managing data from large scale projects such as The Cancer Genome Atlas \(TCGA\) for further analysis is an important and time consuming step for research projects. Several efforts\, such as Firehose project\, make TCGA pre\-processed data publicly available via web services and data portals but it requires managing\, downloading and preparing the data for following steps. We developed an open source and extensible R based data client for Firehose pre\-processed data and demonstrated its use with sample case studies. Results showed that RTCGAToolbox could improve data management for researchers who are interested with TCGA data. In addition\, it can be integrated with other analysis pipelines for following data analysis.


.. conda:package:: bioconductor-rtcgatoolbox

   |downloads_bioconductor-rtcgatoolbox| |docker_bioconductor-rtcgatoolbox|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.40.0-0</code>,  <code>2.36.0-0</code>,  <code>2.32.1-0</code>,  <code>2.30.0-0</code>,  <code>2.28.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-0</code>,  <code>2.20.0-1</code>,  <code>2.20.0-0</code>,  </span></summary>
      

      ``2.40.0-0``,  ``2.36.0-0``,  ``2.32.1-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.12.1-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-raggedexperiment: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-tcgautils: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-httr: 
   :depends on r-rcurl: 
   :depends on r-rjsonio: 
   :depends on r-rvest: 
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

    pixi global install bioconductor-rtcgatoolbox

to add into an existing workspace instead, run::

    pixi add bioconductor-rtcgatoolbox

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rtcgatoolbox

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rtcgatoolbox

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rtcgatoolbox:<tag>

(see `bioconductor-rtcgatoolbox/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rtcgatoolbox| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rtcgatoolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rtcgatoolbox
   :alt:   (downloads)
.. |docker_bioconductor-rtcgatoolbox| image:: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox
.. _`bioconductor-rtcgatoolbox/tags`: https://quay.io/repository/biocontainers/bioconductor-rtcgatoolbox?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rtcgatoolbox";
        var versions = ["2.40.0","2.36.0","2.32.1","2.30.0","2.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rtcgatoolbox/README.html