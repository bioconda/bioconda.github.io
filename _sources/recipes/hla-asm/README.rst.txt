:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-asm'
.. highlight: bash

hla-asm
=======

.. conda:recipe:: hla-asm
   :replaces_section_title:
   :noindex:

   find HLA gene exon coordinates in long read\-based assemblies and carry out HLA typing at G group resolution

   :homepage: https://github.com/DiltheyLab/HLA-LA/blob/master/HLA-ASM.md
   :license: GPL
   :recipe: /`hla-asm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-asm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-asm/meta.yaml>`_
   :links: biotools: :biotools:`hla-asm`

   


.. conda:package:: hla-asm

   |downloads_hla-asm| |docker_hla-asm|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on bwa: 
   :depends on mummer: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-bio-db-hts: 
   :depends on perl-bioperl: 
   :depends on perl-list-moreutils: 
   :depends on perl-text-levenshteinxs: 
   :depends on samtools: 

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

    pixi global install hla-asm

to add into an existing workspace instead, run::

    pixi add hla-asm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hla-asm

Alternatively, to install into a new environment, run::

    conda create -n envname hla-asm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hla-asm:<tag>

(see `hla-asm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hla-asm| image:: https://img.shields.io/conda/dn/bioconda/hla-asm.svg?style=flat
   :target: https://anaconda.org/bioconda/hla-asm
   :alt:   (downloads)
.. |docker_hla-asm| image:: https://quay.io/repository/biocontainers/hla-asm/status
   :target: https://quay.io/repository/biocontainers/hla-asm
.. _`hla-asm/tags`: https://quay.io/repository/biocontainers/hla-asm?tab=tags


.. raw:: html

    <script>
        var package = "hla-asm";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-asm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-asm/README.html