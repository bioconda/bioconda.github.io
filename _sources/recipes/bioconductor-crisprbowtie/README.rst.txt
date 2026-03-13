:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbowtie'
.. highlight: bash

bioconductor-crisprbowtie
=========================

.. conda:recipe:: bioconductor-crisprbowtie
   :replaces_section_title:
   :noindex:

   Bowtie\-based alignment of CRISPR gRNA spacer sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprBowtie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbowtie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbowtie/meta.yaml>`_

   Provides a user\-friendly interface to map on\-targets and off\-targets of CRISPR gRNA spacer sequences using bowtie. The alignment is fast\, and can be performed using either commonly\-used or custom CRISPR nucleases. The alignment can work with any reference or custom genomes. Both DNA\- and RNA\-targeting nucleases are supported.


.. conda:package:: bioconductor-crisprbowtie

   |downloads_bioconductor-crisprbowtie| |docker_bioconductor-crisprbowtie|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprbase: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rbowtie: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-crisprbowtie

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprbowtie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprbowtie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprbowtie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprbowtie:<tag>

(see `bioconductor-crisprbowtie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprbowtie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbowtie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbowtie
   :alt:   (downloads)
.. |docker_bioconductor-crisprbowtie| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie
.. _`bioconductor-crisprbowtie/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbowtie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbowtie";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbowtie/README.html