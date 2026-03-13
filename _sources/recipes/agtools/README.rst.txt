:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'agtools'
.. highlight: bash

agtools
=======

.. conda:recipe:: agtools
   :replaces_section_title:
   :noindex:

   agtools\: A Software Framework to Manipulate Assembly Graphs

   :homepage: https://github.com/Vini2/agtools
   :documentation: https://agtools.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`agtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/agtools/meta.yaml>`_

   agtools is a Python framework for manipulating assembly graphs for downstream metagenomic applications\, with a focus on the Graphical Fragment Assembly \(GFA\) format.



.. conda:package:: agtools

   |downloads_agtools| |docker_agtools|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on bidict: 
   :depends on biopython: 
   :depends on click: 
   :depends on loguru: 
   :depends on pandas: 
   :depends on pycairo: 
   :depends on python: ``>=3.13,<3.14.0a0``
   :depends on python-igraph: 

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

    pixi global install agtools

to add into an existing workspace instead, run::

    pixi add agtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install agtools

Alternatively, to install into a new environment, run::

    conda create -n envname agtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/agtools:<tag>

(see `agtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_agtools| image:: https://img.shields.io/conda/dn/bioconda/agtools.svg?style=flat
   :target: https://anaconda.org/bioconda/agtools
   :alt:   (downloads)
.. |docker_agtools| image:: https://quay.io/repository/biocontainers/agtools/status
   :target: https://quay.io/repository/biocontainers/agtools
.. _`agtools/tags`: https://quay.io/repository/biocontainers/agtools?tab=tags


.. raw:: html

    <script>
        var package = "agtools";
        var versions = ["1.0.2","1.0.1","1.0.1","1.0.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/agtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/agtools/README.html