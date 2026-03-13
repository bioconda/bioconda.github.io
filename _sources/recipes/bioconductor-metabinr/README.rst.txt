:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabinr'
.. highlight: bash

bioconductor-metabinr
=====================

.. conda:recipe:: bioconductor-metabinr
   :replaces_section_title:
   :noindex:

   Abundance and Compositional Based Binning of Metagenomes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/metabinR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabinr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabinr/meta.yaml>`_

   Provide functions for performing abundance and compositional based binning on metagenomic samples\, directly from FASTA or FASTQ files. Functions are implemented in Java and called via rJava. Parallel implementation that operates directly on input FASTA\/FASTQ files for fast execution.


.. conda:package:: bioconductor-metabinr

   |downloads_bioconductor-metabinr| |docker_bioconductor-metabinr|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on openjdk: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rjava: 

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

    pixi global install bioconductor-metabinr

to add into an existing workspace instead, run::

    pixi add bioconductor-metabinr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metabinr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metabinr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metabinr:<tag>

(see `bioconductor-metabinr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metabinr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabinr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabinr
   :alt:   (downloads)
.. |docker_bioconductor-metabinr| image:: https://quay.io/repository/biocontainers/bioconductor-metabinr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabinr
.. _`bioconductor-metabinr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabinr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabinr";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabinr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabinr/README.html