:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathwaymatcher'
.. highlight: bash

pathwaymatcher
==============

.. conda:recipe:: pathwaymatcher
   :replaces_section_title:
   :noindex:

   PathwayMatcher is a software tool writen in Java to search for pathways related to a list of proteins in Reactome.


   :homepage: https://github.com/PathwayAnalysisPlatform/PathwayMatcher
   :license: Apache License, Version 2.0
   :recipe: /`pathwaymatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathwaymatcher/meta.yaml>`_

   


.. conda:package:: pathwaymatcher

   |downloads_pathwaymatcher| |docker_pathwaymatcher|

   :versions:
      
      

      ``1.9.1-3``,  ``1.9.1-2``,  ``1.9.1-1``,  ``1.8.1-2``,  ``1.8.1-1``,  ``1.8-1``,  ``1.7-0``

      

   
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

    pixi global install pathwaymatcher

to add into an existing workspace instead, run::

    pixi add pathwaymatcher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathwaymatcher

Alternatively, to install into a new environment, run::

    conda create -n envname pathwaymatcher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathwaymatcher:<tag>

(see `pathwaymatcher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathwaymatcher| image:: https://img.shields.io/conda/dn/bioconda/pathwaymatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/pathwaymatcher
   :alt:   (downloads)
.. |docker_pathwaymatcher| image:: https://quay.io/repository/biocontainers/pathwaymatcher/status
   :target: https://quay.io/repository/biocontainers/pathwaymatcher
.. _`pathwaymatcher/tags`: https://quay.io/repository/biocontainers/pathwaymatcher?tab=tags


.. raw:: html

    <script>
        var package = "pathwaymatcher";
        var versions = ["1.9.1","1.9.1","1.9.1","1.8.1","1.8.1"];
    </script>





Notes
-----
PathwayMatcher is Java program that comes with a custom wrapper shell script.
By default
\"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"java \-Xms512m \-Xmx1g \-jar PathwayMatcher.jar\"


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathwaymatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathwaymatcher/README.html