:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tncomp_finder'
.. highlight: bash

tncomp_finder
=============

.. conda:recipe:: tncomp_finder
   :replaces_section_title:
   :noindex:

   Composite transposon finder for bacterial and archaeal genomes

   :homepage: https://github.com/danillo-alvarenga/tncomp_finder
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`tncomp_finder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tncomp_finder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tncomp_finder/meta.yaml>`_

   TnComp\_finder is a program for the prediction of putative composite
   transposons in bacterial and archaeal genomes based on insertion sequence
   replicas in a relatively short span. It works by comparing nucleotide
   sequences from bacterial and archaeal genomes to a custom transposon
   database.



.. conda:package:: tncomp_finder

   |downloads_tncomp_finder| |docker_tncomp_finder|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.66,<1.78``
   :depends on blast: ``>=2.2.28``
   :depends on prodigal: ``>=2.6.1``
   :depends on python: ``>=3.6``

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

    pixi global install tncomp_finder

to add into an existing workspace instead, run::

    pixi add tncomp_finder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tncomp_finder

Alternatively, to install into a new environment, run::

    conda create -n envname tncomp_finder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tncomp_finder:<tag>

(see `tncomp_finder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tncomp_finder| image:: https://img.shields.io/conda/dn/bioconda/tncomp_finder.svg?style=flat
   :target: https://anaconda.org/bioconda/tncomp_finder
   :alt:   (downloads)
.. |docker_tncomp_finder| image:: https://quay.io/repository/biocontainers/tncomp_finder/status
   :target: https://quay.io/repository/biocontainers/tncomp_finder
.. _`tncomp_finder/tags`: https://quay.io/repository/biocontainers/tncomp_finder?tab=tags


.. raw:: html

    <script>
        var package = "tncomp_finder";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tncomp_finder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tncomp_finder/README.html