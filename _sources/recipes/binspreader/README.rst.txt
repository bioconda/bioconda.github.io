:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binspreader'
.. highlight: bash

binspreader
===========

.. conda:recipe:: binspreader
   :replaces_section_title:
   :noindex:

   BinSPreader is a tool for improving existing binning using assembly
   graph and other sources of connectivity information


   :homepage: https://cab.spbu.ru/software/binspreader/
   :license: GPL2 / GPL-2.0-only
   :recipe: /`binspreader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binspreader/meta.yaml>`_
   :links: biotools: :biotools:`binspreader`, doi: :doi:`10.1016/j.isci.2022.104770`

   BinSPreader is a novel tool that attempts to refine metagenome\-assembled
   genomes \(MAGs\) obtained from existing tools. BinSPreader exploits the
   assembly graph topology and other connectivity information\, such as
   paired\-end and Hi\-C reads\, to refine the existing binning\, correct binning
   errors\, propagate binning from longer contigs to shorter contigs and infer
   contigs belonging to multiple bins.



.. conda:package:: binspreader

   |downloads_binspreader| |docker_binspreader|

   :versions:
      
      

      ``3.16.0.dev-0``

      

   
   :depends on __glibc: ``>=2.17,<3.0.a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on openmp: 
   :depends on sysroot_linux-64: ``>=2.17``

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

    pixi global install binspreader

to add into an existing workspace instead, run::

    pixi add binspreader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install binspreader

Alternatively, to install into a new environment, run::

    conda create -n envname binspreader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/binspreader:<tag>

(see `binspreader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_binspreader| image:: https://img.shields.io/conda/dn/bioconda/binspreader.svg?style=flat
   :target: https://anaconda.org/bioconda/binspreader
   :alt:   (downloads)
.. |docker_binspreader| image:: https://quay.io/repository/biocontainers/binspreader/status
   :target: https://quay.io/repository/biocontainers/binspreader
.. _`binspreader/tags`: https://quay.io/repository/biocontainers/binspreader?tab=tags


.. raw:: html

    <script>
        var package = "binspreader";
        var versions = ["3.16.0.dev"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binspreader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binspreader/README.html