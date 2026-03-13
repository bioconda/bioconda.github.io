:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snplocs.hsapiens.dbsnp155.grch37'
.. highlight: bash

bioconductor-snplocs.hsapiens.dbsnp155.grch37
=============================================

.. conda:recipe:: bioconductor-snplocs.hsapiens.dbsnp155.grch37
   :replaces_section_title:
   :noindex:

   Human SNP locations and alleles extracted from dbSNP Build 155 and placed on the GRCh37\/hg19 assembly

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/SNPlocs.Hsapiens.dbSNP155.GRCh37.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snplocs.hsapiens.dbsnp155.grch37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/meta.yaml>`_

   The 929\,496\,192 SNPs in this package were extracted from the RefSNP JSON files for chromosomes 1\-22\, X\, Y\, and MT\, located at https\:\/\/ftp.ncbi.nih.gov\/snp\/archive\/b155\/JSON\/ \(these files were created by NCBI in May 2021\). These SNPs can be \"injected\" in BSgenome.Hsapiens.UCSC.hg19.


.. conda:package:: bioconductor-snplocs.hsapiens.dbsnp155.grch37

   |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch37| |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch37|

   :versions:
      
      

      

      

   

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

    pixi global install bioconductor-snplocs.hsapiens.dbsnp155.grch37

to add into an existing workspace instead, run::

    pixi add bioconductor-snplocs.hsapiens.dbsnp155.grch37

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-snplocs.hsapiens.dbsnp155.grch37

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-snplocs.hsapiens.dbsnp155.grch37

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37:<tag>

(see `bioconductor-snplocs.hsapiens.dbsnp155.grch37/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-snplocs.hsapiens.dbsnp155.grch37| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch37.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snplocs.hsapiens.dbsnp155.grch37
   :alt:   (downloads)
.. |docker_bioconductor-snplocs.hsapiens.dbsnp155.grch37| image:: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37
.. _`bioconductor-snplocs.hsapiens.dbsnp155.grch37/tags`: https://quay.io/repository/biocontainers/bioconductor-snplocs.hsapiens.dbsnp155.grch37?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snplocs.hsapiens.dbsnp155.grch37";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snplocs.hsapiens.dbsnp155.grch37/README.html