:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clove'
.. highlight: bash

clove
=====

.. conda:recipe:: clove
   :replaces_section_title:
   :noindex:

   CLOVE\: Classification of genomic fusions into structural variation events.

   :homepage: https://github.com/PapenfussLab/clove
   :license: GPL-2.0
   :recipe: /`clove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clove/meta.yaml>`_

   


.. conda:package:: clove

   |downloads_clove| |docker_clove|

   :versions:
      
      

      ``0.17-2``,  ``0.17-1``,  ``0.17-0``

      

   
   :depends on openjdk: ``>=8``
   :depends on python: 

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

    pixi global install clove

to add into an existing workspace instead, run::

    pixi add clove

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clove

Alternatively, to install into a new environment, run::

    conda create -n envname clove

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clove:<tag>

(see `clove/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clove| image:: https://img.shields.io/conda/dn/bioconda/clove.svg?style=flat
   :target: https://anaconda.org/bioconda/clove
   :alt:   (downloads)
.. |docker_clove| image:: https://quay.io/repository/biocontainers/clove/status
   :target: https://quay.io/repository/biocontainers/clove
.. _`clove/tags`: https://quay.io/repository/biocontainers/clove?tab=tags


.. raw:: html

    <script>
        var package = "clove";
        var versions = ["0.17","0.17","0.17"];
    </script>





Notes
-----
Clove is a Java program that comes with a custom wrapper shell script.
This shell wrapper is called \"clove\" and is on \$PATH by default. By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"clove \-Xms512m \-Xmx1g\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clove/README.html