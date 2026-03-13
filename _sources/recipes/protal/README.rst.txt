:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protal'
.. highlight: bash

protal
======

.. conda:recipe:: protal
   :replaces_section_title:
   :noindex:

   Reference\-based metagenomic analysis.

   :homepage: https://github.com/4less/protal
   :license: MIT / MIT
   :recipe: /`protal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protal/meta.yaml>`_

   Protal is a computational tool for taxonomic profiling and strain\-resolved analyses of bacterial communities from 
   metagenomic shotgun sequencing data \(short\-reads\). Following a reference\-based approach\, protal uses the same
   120 universal marker genes GTDB uses to build their phylogeny \(TIGRFAM\, PFAM\) and thus integrates well with other
   120 universal marker genes GTDB uses to build their phylogeny \(TIGRFAM\, PFAM\) and thus integrates well with other
   tools working in the GTDB taxonomy space.


.. conda:package:: protal

   |downloads_protal| |docker_protal|

   :versions:
      
      

      ``0.2.1a-0``,  ``0.2.0a-0``,  ``0.1.0a-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on pigz: 
   :depends on python: ``>=3``

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

    pixi global install protal

to add into an existing workspace instead, run::

    pixi add protal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install protal

Alternatively, to install into a new environment, run::

    conda create -n envname protal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/protal:<tag>

(see `protal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_protal| image:: https://img.shields.io/conda/dn/bioconda/protal.svg?style=flat
   :target: https://anaconda.org/bioconda/protal
   :alt:   (downloads)
.. |docker_protal| image:: https://quay.io/repository/biocontainers/protal/status
   :target: https://quay.io/repository/biocontainers/protal
.. _`protal/tags`: https://quay.io/repository/biocontainers/protal?tab=tags


.. raw:: html

    <script>
        var package = "protal";
        var versions = ["0.2.1a","0.2.0a","0.1.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protal/README.html