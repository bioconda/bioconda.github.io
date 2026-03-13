:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tritimap'
.. highlight: bash

tritimap
========

.. conda:recipe:: tritimap
   :replaces_section_title:
   :noindex:

   Triti\-Map is a Snakemake\-based pipeline for gene mapping in Triticeae.

   :homepage: https://github.com/fei0810/Triti-Map
   :documentation: https://github.com/fei0810/Triti-Map/wiki
   
   :license: MIT
   :recipe: /`tritimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tritimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tritimap/meta.yaml>`_

   Triti\-Map is a Snakemake\-based pipeline for gene mapping in Triticeae\, which contains a suite of user\-friendly computational packages and web\-interface integrating multi\-omics data from Triticeae species including genomic\, epigenomic\, evolutionary and homologous information.

   Triti\-Map could efficiently explore trait\-related genes or functional elements not present in the reference genome and reduce the time and labor required for gene mapping in large genome species.



.. conda:package:: tritimap

   |downloads_tritimap| |docker_tritimap|

   :versions:
      
      

      ``0.9.7-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends on abyss: ``2.0.2.*``
   :depends on bedops: ``2.4.39.*``
   :depends on bioawk: 
   :depends on biopython: 
   :depends on blast: ``>=2.5.0``
   :depends on bwa: ``0.7.17.*``
   :depends on bwa-mem2: ``2.2.1.*``
   :depends on click: ``>=7``
   :depends on fastp: ``>=0.20.1``
   :depends on gatk4: ``>=4.2.0``
   :depends on hmmer: ``3.3.2.*``
   :depends on minimap2: ``>=2.17``
   :depends on python: ``3.9.2.*``
   :depends on r-base: ``4.0.2.*``
   :depends on r-jsonlite: ``1.7.2.*``
   :depends on r-qtlseqr: ``0.7.5.2.*``
   :depends on samtools: ``1.12.*``
   :depends on seqkit: ``>=0.15.0``
   :depends on snakemake: ``>=6.0.3``
   :depends on spades: ``3.15.0.*``
   :depends on star: ``2.7.6a.*``
   :depends on xmltramp2: ``3.1.1.*``

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

    pixi global install tritimap

to add into an existing workspace instead, run::

    pixi add tritimap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tritimap

Alternatively, to install into a new environment, run::

    conda create -n envname tritimap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tritimap:<tag>

(see `tritimap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tritimap| image:: https://img.shields.io/conda/dn/bioconda/tritimap.svg?style=flat
   :target: https://anaconda.org/bioconda/tritimap
   :alt:   (downloads)
.. |docker_tritimap| image:: https://quay.io/repository/biocontainers/tritimap/status
   :target: https://quay.io/repository/biocontainers/tritimap
.. _`tritimap/tags`: https://quay.io/repository/biocontainers/tritimap?tab=tags


.. raw:: html

    <script>
        var package = "tritimap";
        var versions = ["0.9.7","0.9.6","0.9.5","0.9.4","0.9.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tritimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tritimap/README.html