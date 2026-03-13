:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome2tree'
.. highlight: bash

genome2tree
===========

.. conda:recipe:: genome2tree
   :replaces_section_title:
   :noindex:

   A pipeline to build phylogenetic trees from genome comparisons

   :homepage: https://github.com/RicoLeiser/Genome2Tree
   :license: Apache-2.0
   :recipe: /`genome2tree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome2tree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome2tree/meta.yaml>`_

   


.. conda:package:: genome2tree

   |downloads_genome2tree| |docker_genome2tree|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on clipkit: ``>=0.1.2``
   :depends on mafft: 
   :depends on numpy: ``>=1.21``
   :depends on orthofinder: 
   :depends on phykit: 
   :depends on prodigal: 
   :depends on python: ``>=3.7``
   :depends on tqdm: ``>=4.45``

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

    pixi global install genome2tree

to add into an existing workspace instead, run::

    pixi add genome2tree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genome2tree

Alternatively, to install into a new environment, run::

    conda create -n envname genome2tree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genome2tree:<tag>

(see `genome2tree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genome2tree| image:: https://img.shields.io/conda/dn/bioconda/genome2tree.svg?style=flat
   :target: https://anaconda.org/bioconda/genome2tree
   :alt:   (downloads)
.. |docker_genome2tree| image:: https://quay.io/repository/biocontainers/genome2tree/status
   :target: https://quay.io/repository/biocontainers/genome2tree
.. _`genome2tree/tags`: https://quay.io/repository/biocontainers/genome2tree?tab=tags


.. raw:: html

    <script>
        var package = "genome2tree";
        var versions = ["1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome2tree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome2tree/README.html