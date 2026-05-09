:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioc.gff'
.. highlight: bash

bioconductor-bioc.gff
=====================

.. conda:recipe:: bioconductor-bioc.gff
   :replaces_section_title:
   :noindex:

   Read and write GFF and GTF files

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/Bioc.gff.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bioc.gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioc.gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioc.gff/meta.yaml>`_

   Parse GFF and GTF files using C\+\+ classes. The package also provides utilities to read and write GFF3 files. The GFF \(General Feature Format\) format is a tab\-delimited file format for describing genes and other features of DNA\, RNA\, and protein sequences. GFF files are often used to describe the features of genomes.


.. conda:package:: bioconductor-bioc.gff

   |downloads_bioconductor-bioc.gff| |docker_bioconductor-bioc.gff|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocio: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-biocio: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-curl: 

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

    pixi global install bioconductor-bioc.gff

to add into an existing workspace instead, run::

    pixi add bioconductor-bioc.gff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bioc.gff

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bioc.gff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bioc.gff:<tag>

(see `bioconductor-bioc.gff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bioc.gff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioc.gff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioc.gff
   :alt:   (downloads)
.. |docker_bioconductor-bioc.gff| image:: https://quay.io/repository/biocontainers/bioconductor-bioc.gff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioc.gff
.. _`bioconductor-bioc.gff/tags`: https://quay.io/repository/biocontainers/bioconductor-bioc.gff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioc.gff";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioc.gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioc.gff/README.html