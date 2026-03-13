:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-biomartr'
.. highlight: bash

r-biomartr
==========

.. conda:recipe:: r-biomartr
   :replaces_section_title:
   :noindex:

   Perform large scale genomic data retrieval and functional annotation retrieval. This package aims to provide users with a standardized way to automate genome\, proteome\, \'RNA\'\, coding sequence \(\'CDS\'\)\, \'GFF\'\, and metagenome retrieval from \'NCBI RefSeq\'\, \'NCBI Genbank\'\, \'ENSEMBL\'\, \'ENSEMBLGENOMES\'\, and \'UniProt\' databases. Furthermore\, an interface to the \'BioMart\' database \(Smedley et al. \(2009\) \<doi\:10.1186\/1471\-2164\-10\-22\>\) allows users to retrieve functional annotation for genomic loci. In addition\, users can download entire databases such as \'NCBI RefSeq\' \(Pruitt et al. \(2007\) \<doi\:10.1093\/nar\/gkl842\>\)\, \'NCBI nr\'\, \'NCBI nt\'\, \'NCBI Genbank\' \(Benson et al. \(2013\) \<doi\:10.1093\/nar\/gks1195\>\)\, etc. as well as \'ENSEMBL\' and \'ENSEMBLGENOMES\' with only one command.

   :homepage: https://docs.ropensci.org/biomartr, https://github.com/ropensci/biomartr
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-biomartr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomartr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-biomartr/meta.yaml>`_

   


.. conda:package:: r-biomartr

   |downloads_r-biomartr| |docker_r-biomartr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-3</code>,  <code>1.0.7-2</code>,  <code>1.0.7-1</code>,  <code>1.0.7-0</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  </span></summary>
      

      ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``0.9.2-2``,  ``0.9.2-1``,  ``0.9.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biomart: 
   :depends on bioconductor-biostrings: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 
   :depends on r-data.table: ``>=1.9.4``
   :depends on r-downloader: ``>=0.3``
   :depends on r-dplyr: ``>=0.3.0``
   :depends on r-fs: 
   :depends on r-httr: ``>=0.6.1``
   :depends on r-jsonlite: 
   :depends on r-philentropy: 
   :depends on r-purrr: 
   :depends on r-r.utils: 
   :depends on r-rcurl: ``>=1.95_4.5``
   :depends on r-readr: ``>=1.4.0``
   :depends on r-stringr: ``>=0.6.2``
   :depends on r-tibble: 
   :depends on r-withr: 
   :depends on r-xml: ``>=3.98_1.1``

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

    pixi global install r-biomartr

to add into an existing workspace instead, run::

    pixi add r-biomartr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-biomartr

Alternatively, to install into a new environment, run::

    conda create -n envname r-biomartr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-biomartr:<tag>

(see `r-biomartr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-biomartr| image:: https://img.shields.io/conda/dn/bioconda/r-biomartr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-biomartr
   :alt:   (downloads)
.. |docker_r-biomartr| image:: https://quay.io/repository/biocontainers/r-biomartr/status
   :target: https://quay.io/repository/biocontainers/r-biomartr
.. _`r-biomartr/tags`: https://quay.io/repository/biocontainers/r-biomartr?tab=tags


.. raw:: html

    <script>
        var package = "r-biomartr";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-biomartr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-biomartr/README.html