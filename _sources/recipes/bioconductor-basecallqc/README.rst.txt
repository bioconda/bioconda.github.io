:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basecallqc'
.. highlight: bash

bioconductor-basecallqc
=======================

.. conda:recipe:: bioconductor-basecallqc
   :replaces_section_title:
   :noindex:

   Working with Illumina Basecalling and Demultiplexing input and output files

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/basecallQC.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-basecallqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basecallqc/meta.yaml>`_

   The basecallQC package provides tools to work with Illumina bcl2Fastq \(versions \>\= 2.1.7\) software.Prior to basecalling and demultiplexing using the bcl2Fastq software\, basecallQC functions allow the user to update Illumina sample sheets from versions \<\= 1.8.9 to \>\= 2.1.7 standards\, clean sample sheets of common problems such as invalid sample names and IDs\, create read and index basemasks and the bcl2Fastq command. Following the generation of basecalled and demultiplexed data\, the basecallQC packages allows the user to generate HTML tables\, plots and a self contained report of summary metrics from Illumina XML output files.


.. conda:package:: bioconductor-basecallqc

   |downloads_bioconductor-basecallqc| |docker_bioconductor-basecallqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-shortread: ``>=1.68.0,<1.69.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-lazyeval: 
   :depends on r-magrittr: 
   :depends on r-prettydoc: 
   :depends on r-raster: 
   :depends on r-rmarkdown: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-xml: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-basecallqc

to add into an existing workspace instead, run::

    pixi add bioconductor-basecallqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basecallqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basecallqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basecallqc:<tag>

(see `bioconductor-basecallqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basecallqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basecallqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basecallqc
   :alt:   (downloads)
.. |docker_bioconductor-basecallqc| image:: https://quay.io/repository/biocontainers/bioconductor-basecallqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basecallqc
.. _`bioconductor-basecallqc/tags`: https://quay.io/repository/biocontainers/bioconductor-basecallqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basecallqc";
        var versions = ["1.34.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>





Notes
-----
\'This package relies on bcl2fastq being available in the system PATH.  Due to licensing
restrictions Bioconda does not provide this package.\'



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basecallqc/README.html