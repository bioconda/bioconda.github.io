:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maast'
.. highlight: bash

maast
=====

.. conda:recipe:: maast
   :replaces_section_title:
   :noindex:

   Microbial agile accurate SNP Typer

   :homepage: https://github.com/zjshi/Maast
   :license: MIT / MIT
   :recipe: /`maast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maast/meta.yaml>`_

   


.. conda:package:: maast

   |downloads_maast| |docker_maast|

   :versions:
      
      

      ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``

      

   
   :depends on biopython: ``>=1.58``
   :depends on fasttree: 
   :depends on lbzip2: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on lz4: 
   :depends on mash: 
   :depends on mummer4: 
   :depends on networkx: 
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pigz: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 

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

    pixi global install maast

to add into an existing workspace instead, run::

    pixi add maast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maast

Alternatively, to install into a new environment, run::

    conda create -n envname maast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maast:<tag>

(see `maast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maast| image:: https://img.shields.io/conda/dn/bioconda/maast.svg?style=flat
   :target: https://anaconda.org/bioconda/maast
   :alt:   (downloads)
.. |docker_maast| image:: https://quay.io/repository/biocontainers/maast/status
   :target: https://quay.io/repository/biocontainers/maast
.. _`maast/tags`: https://quay.io/repository/biocontainers/maast?tab=tags


.. raw:: html

    <script>
        var package = "maast";
        var versions = ["1.0.8","1.0.8","1.0.8","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maast/README.html