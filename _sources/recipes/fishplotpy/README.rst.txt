:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fishplotpy'
.. highlight: bash

fishplotpy
==========

.. conda:recipe:: fishplotpy
   :replaces_section_title:
   :noindex:

   A Python implementation for visualizing clonal evolution dynamics using fish plots

   :homepage: https://github.com/Sayitobar/fishplotpy
   :license: Apache / Apache-2.0
   :recipe: /`fishplotpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishplotpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fishplotpy/meta.yaml>`_

   fishplotpy is a Python translation of the R package fishplot by Chris Miller et al.
   It provides functionality for calculating plot layout for clonal evolution and supports
   multiple plot shapes \(polygon\, spline\, bezier\) with customizable appearance and annotations.
   Designed for cancer genomics and evolutionary biology applications.



.. conda:package:: fishplotpy

   |downloads_fishplotpy| |docker_fishplotpy|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.9``
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

    pixi global install fishplotpy

to add into an existing workspace instead, run::

    pixi add fishplotpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fishplotpy

Alternatively, to install into a new environment, run::

    conda create -n envname fishplotpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fishplotpy:<tag>

(see `fishplotpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fishplotpy| image:: https://img.shields.io/conda/dn/bioconda/fishplotpy.svg?style=flat
   :target: https://anaconda.org/bioconda/fishplotpy
   :alt:   (downloads)
.. |docker_fishplotpy| image:: https://quay.io/repository/biocontainers/fishplotpy/status
   :target: https://quay.io/repository/biocontainers/fishplotpy
.. _`fishplotpy/tags`: https://quay.io/repository/biocontainers/fishplotpy?tab=tags


.. raw:: html

    <script>
        var package = "fishplotpy";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fishplotpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fishplotpy/README.html