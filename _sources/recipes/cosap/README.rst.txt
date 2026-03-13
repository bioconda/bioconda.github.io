:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosap'
.. highlight: bash

cosap
=====

.. conda:recipe:: cosap
   :replaces_section_title:
   :noindex:

   COSAP \- Comparative Sequencing Analysis Platform

   :homepage: https://github.com/MBaysanLab/cosap
   :documentation: https://docs.cosap.bio
   
   :license: MIT
   :recipe: /`cosap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosap/meta.yaml>`_

   


.. conda:package:: cosap

   |downloads_cosap| |docker_cosap|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bbmap: ``39.01``
   :depends on bcftools: ``>=1.16,<1.17``
   :depends on black: 
   :depends on bowtie2: ``2.5.1``
   :depends on bwa: ``0.7.17``
   :depends on bwa-mem2: ``2.2.1``
   :depends on click: 
   :depends on docker-py: 
   :depends on elprep: ``5.1.3``
   :depends on fastp: ``0.23.2``
   :depends on fastqc: ``0.11.9``
   :depends on gatk4: ``>=4.5,<4.6``
   :depends on genefuse: 
   :depends on libtiff: 
   :depends on matplotlib-venn: 
   :depends on msisensor-pro: 
   :depends on numpy: 
   :depends on openjdk: ``>=17,<18``
   :depends on perl-dbi: 
   :depends on perl-lwp-simple: 
   :depends on picard: ``>=2,<3``
   :depends on pillow: 
   :depends on pygraphviz: 
   :depends on pyranges: 
   :depends on python: ``>=3.9``
   :depends on qualimap: ``2.2.2d``
   :depends on samtools: ``>=1.16,<1.17``
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on shortuuid: 
   :depends on snakefmt: 
   :depends on snakemake: ``>=7,<8``
   :depends on snpeff: ``5.1``
   :depends on somatic-sniper: ``1.0.5.0``
   :depends on upsetplot: 
   :depends on vardict-java: ``1.8.3``
   :depends on varscan: ``2.4.4``
   :depends on yaml: 

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

    pixi global install cosap

to add into an existing workspace instead, run::

    pixi add cosap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cosap

Alternatively, to install into a new environment, run::

    conda create -n envname cosap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cosap:<tag>

(see `cosap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cosap| image:: https://img.shields.io/conda/dn/bioconda/cosap.svg?style=flat
   :target: https://anaconda.org/bioconda/cosap
   :alt:   (downloads)
.. |docker_cosap| image:: https://quay.io/repository/biocontainers/cosap/status
   :target: https://quay.io/repository/biocontainers/cosap
.. _`cosap/tags`: https://quay.io/repository/biocontainers/cosap?tab=tags


.. raw:: html

    <script>
        var package = "cosap";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosap/README.html