:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome_profiler'
.. highlight: bash

genome_profiler
===============

.. conda:recipe:: genome_profiler
   :replaces_section_title:
   :noindex:

   Prokaryotic genome and plasmid profiling pipeline.

   :homepage: https://github.com/Syrinx55/GenomeProfiler
   :documentation: https://github.com/Syrinx55/GenomeProfiler/blob/v0.4.2/README.md
   
   :license: BSD / BSD-2-Clause-Patent
   :recipe: /`genome_profiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_profiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_profiler/meta.yaml>`_

   


.. conda:package:: genome_profiler

   |downloads_genome_profiler| |docker_genome_profiler|

   :versions:
      
      

      ``0.4.2-0``

      

   
   :depends on abricate: ``>=1.0.1``
   :depends on bio: ``>=1.8``
   :depends on diamond: 
   :depends on ectyper: 
   :depends on integron_finder: 
   :depends on isescan: 
   :depends on lxml: 
   :depends on mash: 
   :depends on ncbi-datasets-cli: 
   :depends on pycurl: 
   :depends on python: ``>=3.10``
   :depends on python-dotenv: 
   :depends on ratelimit: 
   :depends on requests-toolbelt: 

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

    pixi global install genome_profiler

to add into an existing workspace instead, run::

    pixi add genome_profiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genome_profiler

Alternatively, to install into a new environment, run::

    conda create -n envname genome_profiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genome_profiler:<tag>

(see `genome_profiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genome_profiler| image:: https://img.shields.io/conda/dn/bioconda/genome_profiler.svg?style=flat
   :target: https://anaconda.org/bioconda/genome_profiler
   :alt:   (downloads)
.. |docker_genome_profiler| image:: https://quay.io/repository/biocontainers/genome_profiler/status
   :target: https://quay.io/repository/biocontainers/genome_profiler
.. _`genome_profiler/tags`: https://quay.io/repository/biocontainers/genome_profiler?tab=tags


.. raw:: html

    <script>
        var package = "genome_profiler";
        var versions = ["0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome_profiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome_profiler/README.html