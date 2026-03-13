:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treecluster'
.. highlight: bash

treecluster
===========

.. conda:recipe:: treecluster
   :replaces_section_title:
   :noindex:

   Identify clusters in phylogenetic trees based on a distance threshold and other constraints.

   :homepage: https://github.com/niemasd/TreeCluster
   :license: GPL3 / GPL-3.0-only
   :recipe: /`treecluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treecluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treecluster/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0221068`

   


.. conda:package:: treecluster

   |downloads_treecluster| |docker_treecluster|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on niemads: 
   :depends on python: 
   :depends on treeswift: 

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

    pixi global install treecluster

to add into an existing workspace instead, run::

    pixi add treecluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treecluster

Alternatively, to install into a new environment, run::

    conda create -n envname treecluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treecluster:<tag>

(see `treecluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treecluster| image:: https://img.shields.io/conda/dn/bioconda/treecluster.svg?style=flat
   :target: https://anaconda.org/bioconda/treecluster
   :alt:   (downloads)
.. |docker_treecluster| image:: https://quay.io/repository/biocontainers/treecluster/status
   :target: https://quay.io/repository/biocontainers/treecluster
.. _`treecluster/tags`: https://quay.io/repository/biocontainers/treecluster?tab=tags


.. raw:: html

    <script>
        var package = "treecluster";
        var versions = ["1.0.5","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treecluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treecluster/README.html