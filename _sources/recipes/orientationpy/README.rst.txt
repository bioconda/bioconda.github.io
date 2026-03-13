:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orientationpy'
.. highlight: bash

orientationpy
=============

.. conda:recipe:: orientationpy
   :replaces_section_title:
   :noindex:

   OrientationPy is the pythonic successor to the well\-loved OrientationJ Fiji Plugin. It is a library that takes in 2D images or 3D volumes and computes the orientation of the greylevels.

   :homepage: https://pypi.org/project/orientationpy
   :documentation: https://epfl-center-for-imaging.gitlab.io/orientationpy/introduction.html
   
   :developer docs: https://gitlab.com/epfl-center-for-imaging/orientationpy
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`orientationpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientationpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orientationpy/meta.yaml>`_

   


.. conda:package:: orientationpy

   |downloads_orientationpy| |docker_orientationpy|

   :versions:
      
      

      ``0.2.0.4-0``

      

   
   :depends on matplotlib-base: ``>=3.1.3``
   :depends on numba: 
   :depends on numba-progress: 
   :depends on numpy: 
   :depends on python: ``>=3.8``
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

    pixi global install orientationpy

to add into an existing workspace instead, run::

    pixi add orientationpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orientationpy

Alternatively, to install into a new environment, run::

    conda create -n envname orientationpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orientationpy:<tag>

(see `orientationpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orientationpy| image:: https://img.shields.io/conda/dn/bioconda/orientationpy.svg?style=flat
   :target: https://anaconda.org/bioconda/orientationpy
   :alt:   (downloads)
.. |docker_orientationpy| image:: https://quay.io/repository/biocontainers/orientationpy/status
   :target: https://quay.io/repository/biocontainers/orientationpy
.. _`orientationpy/tags`: https://quay.io/repository/biocontainers/orientationpy?tab=tags


.. raw:: html

    <script>
        var package = "orientationpy";
        var versions = ["0.2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orientationpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orientationpy/README.html