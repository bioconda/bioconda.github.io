:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-retroseq'
.. highlight: bash

perl-retroseq
=============

.. conda:recipe:: perl-retroseq
   :replaces_section_title:
   :noindex:

   RetroSeq\: discovery and genotyping of TEVs from reads in BAM format.

   :homepage: https://github.com/tk2/RetroSeq
   :license: GPL
   :recipe: /`perl-retroseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-retroseq/meta.yaml>`_

   


.. conda:package:: perl-retroseq

   |downloads_perl-retroseq| |docker_perl-retroseq|

   :versions:
      
      

      ``1.5-3``,  ``1.5-2``,  ``1.5-1``,  ``1.5-0``

      

   
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on exonerate: ``2.2.0``
   :depends on ncurses: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on perl-carp: 
   :depends on samtools: ``0.1.19``
   :depends on zlib: 

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

    pixi global install perl-retroseq

to add into an existing workspace instead, run::

    pixi add perl-retroseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install perl-retroseq

Alternatively, to install into a new environment, run::

    conda create -n envname perl-retroseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/perl-retroseq:<tag>

(see `perl-retroseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_perl-retroseq| image:: https://img.shields.io/conda/dn/bioconda/perl-retroseq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-retroseq
   :alt:   (downloads)
.. |docker_perl-retroseq| image:: https://quay.io/repository/biocontainers/perl-retroseq/status
   :target: https://quay.io/repository/biocontainers/perl-retroseq
.. _`perl-retroseq/tags`: https://quay.io/repository/biocontainers/perl-retroseq?tab=tags


.. raw:: html

    <script>
        var package = "perl-retroseq";
        var versions = ["1.5","1.5","1.5","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-retroseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-retroseq/README.html