:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbsx'
.. highlight: bash

gbsx
====

.. conda:recipe:: gbsx
   :replaces_section_title:
   :noindex:

   Toolkit for experimental design and demultiplexing genotyping by sequencing experiments

   :homepage: https://github.com/GenomicsCoreLeuven/GBSX
   :license: GPL / GPL-3.0
   :recipe: /`gbsx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbsx/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0514-3`

   Genotyping By Sequencing demultipleXing toolkit \(GBSX\) is a toolkit with an
   inline barcode demultiplexer for usage in the analysis of single read or
   paired\-end genotyping by sequence \(GBS\) data\, a barcode generator\, a barcode
   discovery tool\, and a restriction enzyme predictor. GBSX can easily be
   incorperated as a preceding analysis step for already deployed SNP pipelines.



.. conda:package:: gbsx

   |downloads_gbsx| |docker_gbsx|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   
   :depends on openjdk: ``>=6``
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

    pixi global install gbsx

to add into an existing workspace instead, run::

    pixi add gbsx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gbsx

Alternatively, to install into a new environment, run::

    conda create -n envname gbsx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gbsx:<tag>

(see `gbsx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gbsx| image:: https://img.shields.io/conda/dn/bioconda/gbsx.svg?style=flat
   :target: https://anaconda.org/bioconda/gbsx
   :alt:   (downloads)
.. |docker_gbsx| image:: https://quay.io/repository/biocontainers/gbsx/status
   :target: https://quay.io/repository/biocontainers/gbsx
.. _`gbsx/tags`: https://quay.io/repository/biocontainers/gbsx?tab=tags


.. raw:: html

    <script>
        var package = "gbsx";
        var versions = ["1.3","1.3"];
    </script>





Notes
-----
GBSX is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"gbsx\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"gbsx \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbsx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbsx/README.html