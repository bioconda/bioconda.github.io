:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treesap'
.. highlight: bash

treesap
=======

.. conda:recipe:: treesap
   :replaces_section_title:
   :noindex:

   TreeSAP\: Tree SAmpling under Phylogenetic models

   :homepage: https://github.com/niemasd/TreeSAP
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`treesap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treesap/meta.yaml>`_
   :links: biotools: :biotools:`treesap`

   


.. conda:package:: treesap

   |downloads_treesap| |docker_treesap|

   :versions:
      
      

      ``1.0.10-0``

      

   
   :depends on numpy: 
   :depends on python: 
   :depends on scipy: 
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

    pixi global install treesap

to add into an existing workspace instead, run::

    pixi add treesap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treesap

Alternatively, to install into a new environment, run::

    conda create -n envname treesap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treesap:<tag>

(see `treesap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treesap| image:: https://img.shields.io/conda/dn/bioconda/treesap.svg?style=flat
   :target: https://anaconda.org/bioconda/treesap
   :alt:   (downloads)
.. |docker_treesap| image:: https://quay.io/repository/biocontainers/treesap/status
   :target: https://quay.io/repository/biocontainers/treesap
.. _`treesap/tags`: https://quay.io/repository/biocontainers/treesap?tab=tags


.. raw:: html

    <script>
        var package = "treesap";
        var versions = ["1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treesap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treesap/README.html