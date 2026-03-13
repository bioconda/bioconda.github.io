:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phame'
.. highlight: bash

phame
=====

.. conda:recipe:: phame
   :replaces_section_title:
   :noindex:

   A tool to derive SNP matrices and phylogenetic tree from raw reads\, contigs\, and full genomes.

   :homepage: https://github.com/LANL-Bioinformatics/PhaME
   :license: GPLV2
   :recipe: /`phame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame/meta.yaml>`_
   :links: biotools: :biotools:`phame`

   


.. conda:package:: phame

   |downloads_phame| |docker_phame|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0-0``

      

   
   :depends on bbmap: ``>=38.0``
   :depends on bcftools: 
   :depends on bowtie2: ``>=2.4.1``
   :depends on bwa: ``>=0.7.17,<0.8.0``
   :depends on curl: ``>=7.68.0``
   :depends on fasttree: ``>=2.1.10,<2.2.0``
   :depends on hyphy: ``>=2.5.0``
   :depends on iqtree: ``>=2.0.0``
   :depends on mafft: ``>=7.471``
   :depends on mummer: 
   :depends on muscle: ``>=3.8.31,<4.0.0``
   :depends on openmpi: ``>=4.0.0``
   :depends on paml: ``>=4.9,<5.0``
   :depends on perl: ``>=5.26.0,<5.35.0``
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bioperl: ``>=1.7.2,<1.8.0``
   :depends on perl-file-path: ``>=2.12``
   :depends on perl-getopt-long: ``>=2.50``
   :depends on perl-parallel-forkmanager: ``>=1.17``
   :depends on perl-statistics-distributions: ``>=1.02``
   :depends on raxml-ng: ``>=1.0.0``
   :depends on samtools: ``>=0.1.18,<1.12``
   :depends on zlib: ``>=1.2.11``

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

    pixi global install phame

to add into an existing workspace instead, run::

    pixi add phame

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phame

Alternatively, to install into a new environment, run::

    conda create -n envname phame

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phame:<tag>

(see `phame/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phame| image:: https://img.shields.io/conda/dn/bioconda/phame.svg?style=flat
   :target: https://anaconda.org/bioconda/phame
   :alt:   (downloads)
.. |docker_phame| image:: https://quay.io/repository/biocontainers/phame/status
   :target: https://quay.io/repository/biocontainers/phame
.. _`phame/tags`: https://quay.io/repository/biocontainers/phame?tab=tags


.. raw:: html

    <script>
        var package = "phame";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phame/README.html