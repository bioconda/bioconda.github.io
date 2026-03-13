:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngsep'
.. highlight: bash

ngsep
=====

.. conda:recipe:: ngsep
   :replaces_section_title:
   :noindex:

   NGSEP \- Next Generation Sequencing Experience Platform

   :homepage: https://github.com/NGSEP/NGSEPcore
   :license: GPL / GPL-3
   :recipe: /`ngsep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngsep/meta.yaml>`_
   :links: biotools: :biotools:`ngsep`, doi: :doi:`10.1093/bioinformatics/btz275`

   NGSEP provides an object model to enable different kinds of
   analysis of DNA high throughput sequencing \(HTS\) data. The classic
   use of NGSEP is a reference guided construction and downstream analysis of
   large datasets of genomic variation. NGSEP performs accurate detection and
   genotyping of Single Nucleotide Variants \(SNVs\)\, small and large indels\, short
   tandem repeats \(STRs\)\, inversions\, and Copy Number Variants \(CNVs\). NGSEP also
   provides utilities for downstream analysis of variation in VCF files\, including
   functional annotation of variants\, filtering\, format conversion\, comparison\,
   clustering\, imputation\, introgression analysis and different kinds of
   statistics.



.. conda:package:: ngsep

   |downloads_ngsep| |docker_ngsep|

   :versions:
      
      

      ``4.0.1-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install ngsep

to add into an existing workspace instead, run::

    pixi add ngsep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngsep

Alternatively, to install into a new environment, run::

    conda create -n envname ngsep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngsep:<tag>

(see `ngsep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngsep| image:: https://img.shields.io/conda/dn/bioconda/ngsep.svg?style=flat
   :target: https://anaconda.org/bioconda/ngsep
   :alt:   (downloads)
.. |docker_ngsep| image:: https://quay.io/repository/biocontainers/ngsep/status
   :target: https://quay.io/repository/biocontainers/ngsep
.. _`ngsep/tags`: https://quay.io/repository/biocontainers/ngsep?tab=tags


.. raw:: html

    <script>
        var package = "ngsep";
        var versions = ["4.0.1"];
    </script>





Notes
-----
Version 4 includes new modules for read alignment and de\-novo
analysis of short and long reads including calculations of k\-mers\, error
correction\, de\-novo analysis of Genotype\-by\-sequencing data and \(coming soon\)
de\-novo assembly of long read whole genome sequencing \(WGS\) data.



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngsep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngsep/README.html