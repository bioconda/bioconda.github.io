:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'figtree'
.. highlight: bash

figtree
=======

.. conda:recipe:: figtree
   :replaces_section_title:
   :noindex:

   FigTree is designed as a graphical viewer of phylogenetic trees and as a program for producing publication\-ready figures.

   :homepage: https://github.com/rambaut/figtree
   :license: GPL / GPLv2
   :recipe: /`figtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/figtree/meta.yaml>`_

   


.. conda:package:: figtree

   |downloads_figtree| |docker_figtree|

   :versions:
      
      

      ``1.4.4-1``,  ``1.4.4-0``

      

   
   :depends on openjdk: ``>=5``
   :depends on python: 
   :depends on xorg-libxtst: 

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

    pixi global install figtree

to add into an existing workspace instead, run::

    pixi add figtree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install figtree

Alternatively, to install into a new environment, run::

    conda create -n envname figtree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/figtree:<tag>

(see `figtree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_figtree| image:: https://img.shields.io/conda/dn/bioconda/figtree.svg?style=flat
   :target: https://anaconda.org/bioconda/figtree
   :alt:   (downloads)
.. |docker_figtree| image:: https://quay.io/repository/biocontainers/figtree/status
   :target: https://quay.io/repository/biocontainers/figtree
.. _`figtree/tags`: https://quay.io/repository/biocontainers/figtree?tab=tags


.. raw:: html

    <script>
        var package = "figtree";
        var versions = ["1.4.4","1.4.4"];
    </script>





Notes
-----
FigTree is Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"figtree\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"figtree \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/figtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/figtree/README.html