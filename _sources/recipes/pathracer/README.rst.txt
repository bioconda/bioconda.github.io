:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathracer'
.. highlight: bash

pathracer
=========

.. conda:recipe:: pathracer
   :replaces_section_title:
   :noindex:

   PathRacer is a tool for alignment of profile HMM against assembly graph.

   :homepage: http://cab.spbu.ru/software/pathracer/
   :license: GPL / GPLv2
   :recipe: /`pathracer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathracer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathracer/meta.yaml>`_
   :links: biotools: :biotools:`pathracer`, doi: :doi:`10.1007/978-3-030-18174-1_6`

   PathRacer is a novel standalone tool that aligns profile HMM directly to the assembly graph \(performing the codon translation on fly for amino acid 
   pHMMs\). The tool provides the set of most probable paths traversed by a HMM through the whole assembly graph\, regardless whether the sequence of 
   interested is encoded on the single contig or scattered across the set of edges\, therefore significantly improving the recovery of sequences of 
   interest even from fragmented metagenome assemblies.



.. conda:package:: pathracer

   |downloads_pathracer| |docker_pathracer|

   :versions:
      
      

      ``3.16.0.dev-0``,  ``3.15.0.dev-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=9.4.0``
   :depends on libstdcxx-ng: ``>=9.4.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on openmp: 
   :depends on sysroot_linux-64: ``2.17.*``

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

    pixi global install pathracer

to add into an existing workspace instead, run::

    pixi add pathracer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathracer

Alternatively, to install into a new environment, run::

    conda create -n envname pathracer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathracer:<tag>

(see `pathracer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathracer| image:: https://img.shields.io/conda/dn/bioconda/pathracer.svg?style=flat
   :target: https://anaconda.org/bioconda/pathracer
   :alt:   (downloads)
.. |docker_pathracer| image:: https://quay.io/repository/biocontainers/pathracer/status
   :target: https://quay.io/repository/biocontainers/pathracer
.. _`pathracer/tags`: https://quay.io/repository/biocontainers/pathracer?tab=tags


.. raw:: html

    <script>
        var package = "pathracer";
        var versions = ["3.16.0.dev","3.15.0.dev"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathracer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathracer/README.html