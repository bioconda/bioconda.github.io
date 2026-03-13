:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-gene-annotation-manipulation'
.. highlight: bash

atlas-gene-annotation-manipulation
==================================

.. conda:recipe:: atlas-gene-annotation-manipulation
   :replaces_section_title:
   :noindex:

   Scripts for manipulating gene annotation

   :homepage: https://github.com/ebi-gene-expression-group/atlas-gene-annotation-manipulation
   :license: Apache / Apache-2.0
   :recipe: /`atlas-gene-annotation-manipulation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-gene-annotation-manipulation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-gene-annotation-manipulation/meta.yaml>`_

   


.. conda:package:: atlas-gene-annotation-manipulation

   |downloads_atlas-gene-annotation-manipulation| |docker_atlas-gene-annotation-manipulation|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-rtracklayer: 
   :depends on r-base: 
   :depends on r-optparse: 
   :depends on r-plyr: 

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

    pixi global install atlas-gene-annotation-manipulation

to add into an existing workspace instead, run::

    pixi add atlas-gene-annotation-manipulation

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install atlas-gene-annotation-manipulation

Alternatively, to install into a new environment, run::

    conda create -n envname atlas-gene-annotation-manipulation

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/atlas-gene-annotation-manipulation:<tag>

(see `atlas-gene-annotation-manipulation/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_atlas-gene-annotation-manipulation| image:: https://img.shields.io/conda/dn/bioconda/atlas-gene-annotation-manipulation.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-gene-annotation-manipulation
   :alt:   (downloads)
.. |docker_atlas-gene-annotation-manipulation| image:: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation/status
   :target: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation
.. _`atlas-gene-annotation-manipulation/tags`: https://quay.io/repository/biocontainers/atlas-gene-annotation-manipulation?tab=tags


.. raw:: html

    <script>
        var package = "atlas-gene-annotation-manipulation";
        var versions = ["1.1.1","1.1.0","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-gene-annotation-manipulation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-gene-annotation-manipulation/README.html