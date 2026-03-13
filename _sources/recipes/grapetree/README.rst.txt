:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grapetree'
.. highlight: bash

grapetree
=========

.. conda:recipe:: grapetree
   :replaces_section_title:
   :noindex:

   Web interface of GrapeTree\, which is a program for phylogenetic analysis.

   :homepage: https://github.com/achtman-lab/GrapeTree
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`grapetree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grapetree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grapetree/meta.yaml>`_

   


.. conda:package:: grapetree

   |downloads_grapetree| |docker_grapetree|

   :versions:
      
      

      ``2.1-0``

      

   
   :depends on ete3: 
   :depends on flask: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on python: 
   :depends on requests: 
   :depends on unidecode: 

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

    pixi global install grapetree

to add into an existing workspace instead, run::

    pixi add grapetree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grapetree

Alternatively, to install into a new environment, run::

    conda create -n envname grapetree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grapetree:<tag>

(see `grapetree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grapetree| image:: https://img.shields.io/conda/dn/bioconda/grapetree.svg?style=flat
   :target: https://anaconda.org/bioconda/grapetree
   :alt:   (downloads)
.. |docker_grapetree| image:: https://quay.io/repository/biocontainers/grapetree/status
   :target: https://quay.io/repository/biocontainers/grapetree
.. _`grapetree/tags`: https://quay.io/repository/biocontainers/grapetree?tab=tags


.. raw:: html

    <script>
        var package = "grapetree";
        var versions = ["2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grapetree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grapetree/README.html