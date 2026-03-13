:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'curlywhirly'
.. highlight: bash

curlywhirly
===========

.. conda:recipe:: curlywhirly
   :replaces_section_title:
   :noindex:

   CurlyWhirly is an application for viewing multi\-dimensional data\, with a particular focus on the outputs of Principle Coordinate Analysis and Principal Components Analysis

   :homepage: https://ics.hutton.ac.uk/curlywhirly
   :license: BSD-2-Clause
   :recipe: /`curlywhirly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curlywhirly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/curlywhirly/meta.yaml>`_

   


.. conda:package:: curlywhirly

   |downloads_curlywhirly| |docker_curlywhirly|

   :versions:
      
      

      ``1.17.08.31-2``,  ``1.17.08.31-1``,  ``1.17.08.31-0``

      

   
   :depends on openjdk: ``>=8,<9``

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

    pixi global install curlywhirly

to add into an existing workspace instead, run::

    pixi add curlywhirly

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install curlywhirly

Alternatively, to install into a new environment, run::

    conda create -n envname curlywhirly

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/curlywhirly:<tag>

(see `curlywhirly/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_curlywhirly| image:: https://img.shields.io/conda/dn/bioconda/curlywhirly.svg?style=flat
   :target: https://anaconda.org/bioconda/curlywhirly
   :alt:   (downloads)
.. |docker_curlywhirly| image:: https://quay.io/repository/biocontainers/curlywhirly/status
   :target: https://quay.io/repository/biocontainers/curlywhirly
.. _`curlywhirly/tags`: https://quay.io/repository/biocontainers/curlywhirly?tab=tags


.. raw:: html

    <script>
        var package = "curlywhirly";
        var versions = ["1.17.08.31","1.17.08.31","1.17.08.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/curlywhirly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/curlywhirly/README.html