:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bbmapy'
.. highlight: bash

bbmapy
======

.. conda:recipe:: bbmapy
   :replaces_section_title:
   :noindex:

   A Python wrapper for BBTools.

   :homepage: https://github.com/urineri/bbmapy
   :license: Custom
   :recipe: /`bbmapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bbmapy/meta.yaml>`_

   bbmapy is a Python wrapper for BBTools\, a suite of bioinformatics tools.
   It provides a convenient interface to use BBTools from Python scripts.



.. conda:package:: bbmapy

   |downloads_bbmapy| |docker_bbmapy|

   :versions:
      
      

      ``0.0.51-0``,  ``0.0.46-0``

      

   
   :depends on install-jdk: 
   :depends on python: ``>=3.9``
   :depends on rich: 

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

    pixi global install bbmapy

to add into an existing workspace instead, run::

    pixi add bbmapy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bbmapy

Alternatively, to install into a new environment, run::

    conda create -n envname bbmapy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bbmapy:<tag>

(see `bbmapy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bbmapy| image:: https://img.shields.io/conda/dn/bioconda/bbmapy.svg?style=flat
   :target: https://anaconda.org/bioconda/bbmapy
   :alt:   (downloads)
.. |docker_bbmapy| image:: https://quay.io/repository/biocontainers/bbmapy/status
   :target: https://quay.io/repository/biocontainers/bbmapy
.. _`bbmapy/tags`: https://quay.io/repository/biocontainers/bbmapy?tab=tags


.. raw:: html

    <script>
        var package = "bbmapy";
        var versions = ["0.0.51","0.0.46"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bbmapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bbmapy/README.html