:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ops'
.. highlight: bash

galaxy-ops
==========

.. conda:recipe:: galaxy-ops
   :replaces_section_title:
   :noindex:

   Galaxy interval operations

   :homepage: https://github.com/galaxyproject/gops
   :license: Academic Free License version 3.0
   :recipe: /`galaxy-ops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ops/meta.yaml>`_

   


.. conda:package:: galaxy-ops

   |downloads_galaxy-ops| |docker_galaxy-ops|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on bx-python: 
   :depends on python: ``<3``

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

    pixi global install galaxy-ops

to add into an existing workspace instead, run::

    pixi add galaxy-ops

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install galaxy-ops

Alternatively, to install into a new environment, run::

    conda create -n envname galaxy-ops

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/galaxy-ops:<tag>

(see `galaxy-ops/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_galaxy-ops| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ops.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ops
   :alt:   (downloads)
.. |docker_galaxy-ops| image:: https://quay.io/repository/biocontainers/galaxy-ops/status
   :target: https://quay.io/repository/biocontainers/galaxy-ops
.. _`galaxy-ops/tags`: https://quay.io/repository/biocontainers/galaxy-ops?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-ops";
        var versions = ["1.1.0","1.1.0","1.1.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ops/README.html