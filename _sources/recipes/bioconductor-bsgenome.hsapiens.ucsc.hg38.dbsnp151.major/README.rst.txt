:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major'
.. highlight: bash

bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
=======================================================

.. conda:recipe:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
   :replaces_section_title:
   :noindex:

   Full genome sequences for Homo sapiens \(UCSC version hg38\, based on GRCh38.p12\) with injected major alleles \(dbSNP151\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Hsapiens.UCSC.hg38.dbSNP151.major.html
   :license: CC BY-NC-ND 4.0
   :recipe: /`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/meta.yaml>`_

   Full genome sequences for Homo sapiens \(Human\) as provided by UCSC \(hg38\, based on GRCh38.p12\) with major allele injected from dbSNP151\, and stored in Biostrings objects. Only single nucleotide variants \(SNVs\) were considered. At each SNV\, the most frequent allele was chosen at the major allele to be injected into the reference genome.


.. conda:package:: bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

   |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major|

   :versions:
      
      

      ``0.0.9999-6``,  ``0.0.9999-5``,  ``0.0.9999-4``,  ``0.0.9999-3``,  ``0.0.9999-2``,  ``0.0.9999-1``,  ``0.0.9999-0``

      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
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

    pixi global install bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major:<tag>

(see `bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major
.. _`bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major";
        var versions = ["0.0.9999","0.0.9999","0.0.9999","0.0.9999","0.0.9999"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.hsapiens.ucsc.hg38.dbsnp151.major/README.html