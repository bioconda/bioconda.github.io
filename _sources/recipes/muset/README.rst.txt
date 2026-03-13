:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'muset'
.. highlight: bash

muset
=====

.. conda:recipe:: muset
   :replaces_section_title:
   :noindex:

   A pipeline for building an abundance unitig matrix from FASTA\/FASTQ files

   :homepage: https://github.com/CamilaDuitama/muset
   :license: GPL-3.0-or-later
   :recipe: /`muset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/muset/meta.yaml>`_

   MUSET is a software for generating an abundance unitig matrix from a collection of input samples \(in FASTA\/Q format\).


.. conda:package:: muset

   |downloads_muset| |docker_muset|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends on ggcat: ``>=1.1.0``
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install muset

to add into an existing workspace instead, run::

    pixi add muset

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install muset

Alternatively, to install into a new environment, run::

    conda create -n envname muset

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/muset:<tag>

(see `muset/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_muset| image:: https://img.shields.io/conda/dn/bioconda/muset.svg?style=flat
   :target: https://anaconda.org/bioconda/muset
   :alt:   (downloads)
.. |docker_muset| image:: https://quay.io/repository/biocontainers/muset/status
   :target: https://quay.io/repository/biocontainers/muset
.. _`muset/tags`: https://quay.io/repository/biocontainers/muset?tab=tags


.. raw:: html

    <script>
        var package = "muset";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/muset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/muset/README.html