:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stainwarpy'
.. highlight: bash

stainwarpy
==========

.. conda:recipe:: stainwarpy
   :replaces_section_title:
   :noindex:

   Tools for image registration between multiplexed and H\&E stained tissue images

   :homepage: https://github.com/tckumarasekara/stainwarpy
   :license: MIT
   :recipe: /`stainwarpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stainwarpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stainwarpy/meta.yaml>`_

   


.. conda:package:: stainwarpy

   |downloads_stainwarpy| |docker_stainwarpy|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``,  ``0.1.7-0``

      

   
   :depends on imagecodecs: ``>=2025.11.11``
   :depends on numpy: ``>=2.2``
   :depends on python: ``>=3.11,<3.13``
   :depends on scikit-image: ``>=0.25``
   :depends on scipy: ``>=1.16``
   :depends on tifffile: ``>=2025.5.10``
   :depends on typer: ``>=0.20``

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

    pixi global install stainwarpy

to add into an existing workspace instead, run::

    pixi add stainwarpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install stainwarpy

Alternatively, to install into a new environment, run::

    conda create -n envname stainwarpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/stainwarpy:<tag>

(see `stainwarpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_stainwarpy| image:: https://img.shields.io/conda/dn/bioconda/stainwarpy.svg?style=flat
   :target: https://anaconda.org/bioconda/stainwarpy
   :alt:   (downloads)
.. |docker_stainwarpy| image:: https://quay.io/repository/biocontainers/stainwarpy/status
   :target: https://quay.io/repository/biocontainers/stainwarpy
.. _`stainwarpy/tags`: https://quay.io/repository/biocontainers/stainwarpy?tab=tags


.. raw:: html

    <script>
        var package = "stainwarpy";
        var versions = ["0.2.4","0.2.3","0.2.1","0.2.0","0.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stainwarpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stainwarpy/README.html