:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nullarbor'
.. highlight: bash

nullarbor
=========

.. conda:recipe:: nullarbor
   :replaces_section_title:
   :noindex:

   Reads to report pipeline for bacterial isolate NGS data

   :homepage: https://github.com/tseemann/nullarbor
   :license: GPL2
   :recipe: /`nullarbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor/meta.yaml>`_

   


.. conda:package:: nullarbor

   |downloads_nullarbor| |docker_nullarbor|

   :versions:
      
      

      ``2.0.20191013-3``,  ``2.0.20191013-2``,  ``2.0.20191013-1``,  ``2.0.20191013-0``,  ``2.0.20191007-0``,  ``2.0.20191003-0``,  ``2.0.20181010-5``,  ``2.0.20181010-4``,  ``2.0.20181010-2``

      

   
   :depends on abricate: ``>=1.0.1``
   :depends on any2fasta: ``>=0.4.2``
   :depends on centrifuge: ``>=1.0``
   :depends on fasttree: ``>=2.1.10``
   :depends on iqtree: ``>=2.2.0``
   :depends on kraken: ``>=1.1``
   :depends on kraken2: ``>=2.1.2``
   :depends on make: ``>=4.2``
   :depends on mash: ``>=2.3``
   :depends on megahit: ``>=1.1.3``
   :depends on mlst: ``>=2.22.0``
   :depends on newick_utils: ``>=1.6``
   :depends on perl: ``5.26.2.*``
   :depends on perl-bioperl: ``1.7.2.*``
   :depends on perl-file-spec: 
   :depends on perl-file-which: 
   :depends on perl-findbin: 
   :depends on perl-json: 
   :depends on perl-list-moreutils: ``>=0.428``
   :depends on perl-path-tiny: 
   :depends on perl-svg: 
   :depends on perl-text-csv: 
   :depends on perl-time-piece: 
   :depends on perl-yaml-tiny: 
   :depends on pigz: 
   :depends on prokka: ``>=1.14.6``
   :depends on quicktree: ``>=2.5``
   :depends on roary: ``>=3.13``
   :depends on samtools: ``>=1.9``
   :depends on seqtk: ``>=1.3``
   :depends on shovill: ``>=1.1.0``
   :depends on skesa: ``>=2.4``
   :depends on snippy: ``>=4.4.3``
   :depends on snp-dists: ``>=0.8.2``
   :depends on snpeff: ``5.0.*``
   :depends on spades: ``>=3.15``
   :depends on trimmomatic: ``>=0.39``

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

    pixi global install nullarbor

to add into an existing workspace instead, run::

    pixi add nullarbor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nullarbor

Alternatively, to install into a new environment, run::

    conda create -n envname nullarbor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nullarbor:<tag>

(see `nullarbor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nullarbor| image:: https://img.shields.io/conda/dn/bioconda/nullarbor.svg?style=flat
   :target: https://anaconda.org/bioconda/nullarbor
   :alt:   (downloads)
.. |docker_nullarbor| image:: https://quay.io/repository/biocontainers/nullarbor/status
   :target: https://quay.io/repository/biocontainers/nullarbor
.. _`nullarbor/tags`: https://quay.io/repository/biocontainers/nullarbor?tab=tags


.. raw:: html

    <script>
        var package = "nullarbor";
        var versions = ["2.0.20191013","2.0.20191013","2.0.20191013","2.0.20191013","2.0.20191007"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nullarbor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nullarbor/README.html