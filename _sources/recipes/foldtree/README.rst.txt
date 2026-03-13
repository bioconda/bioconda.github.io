:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'foldtree'
.. highlight: bash

foldtree
========

.. conda:recipe:: foldtree
   :replaces_section_title:
   :noindex:

   Foldtree creates phylogenetic trees from protein structures using Foldseek.

   :homepage: https://github.com/DessimozLab/fold_tree
   :license: MIT / MIT
   :recipe: /`foldtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/foldtree/meta.yaml>`_

   


.. conda:package:: foldtree

   |downloads_foldtree| |docker_foldtree|

   :versions:
      
      

      ``1.1.0-0``,  ``1.1.0rc2-1``,  ``1.1.0rc2-0``

      

   
   :depends on click: 
   :depends on python: 
   :depends on snakemake-minimal: ``<8``

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

    pixi global install foldtree

to add into an existing workspace instead, run::

    pixi add foldtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install foldtree

Alternatively, to install into a new environment, run::

    conda create -n envname foldtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/foldtree:<tag>

(see `foldtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_foldtree| image:: https://img.shields.io/conda/dn/bioconda/foldtree.svg?style=flat
   :target: https://anaconda.org/bioconda/foldtree
   :alt:   (downloads)
.. |docker_foldtree| image:: https://quay.io/repository/biocontainers/foldtree/status
   :target: https://quay.io/repository/biocontainers/foldtree
.. _`foldtree/tags`: https://quay.io/repository/biocontainers/foldtree?tab=tags


.. raw:: html

    <script>
        var package = "foldtree";
        var versions = ["1.1.0","1.1.0rc2","1.1.0rc2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/foldtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/foldtree/README.html