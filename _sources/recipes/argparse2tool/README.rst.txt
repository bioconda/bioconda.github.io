:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argparse2tool'
.. highlight: bash

argparse2tool
=============

.. conda:recipe:: argparse2tool
   :replaces_section_title:
   :noindex:

   Instrument for forming Galaxy XML and CWL tool descriptions from argparse arguments

   :homepage: https://github.com/erasche/argparse2tool
   :license: Apache / Apache-2.0
   :recipe: /`argparse2tool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse2tool/meta.yaml>`_

   


.. conda:package:: argparse2tool

   |downloads_argparse2tool| |docker_argparse2tool|

   :versions:
      
      

      ``0.5.2-0``,  ``0.4.9-0``

      

   
   :depends on galaxyxml: ``>=0.4.6``
   :depends on jinja2: 
   :depends on python: ``>=3``

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

    pixi global install argparse2tool

to add into an existing workspace instead, run::

    pixi add argparse2tool

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install argparse2tool

Alternatively, to install into a new environment, run::

    conda create -n envname argparse2tool

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/argparse2tool:<tag>

(see `argparse2tool/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_argparse2tool| image:: https://img.shields.io/conda/dn/bioconda/argparse2tool.svg?style=flat
   :target: https://anaconda.org/bioconda/argparse2tool
   :alt:   (downloads)
.. |docker_argparse2tool| image:: https://quay.io/repository/biocontainers/argparse2tool/status
   :target: https://quay.io/repository/biocontainers/argparse2tool
.. _`argparse2tool/tags`: https://quay.io/repository/biocontainers/argparse2tool?tab=tags


.. raw:: html

    <script>
        var package = "argparse2tool";
        var versions = ["0.5.2","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argparse2tool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argparse2tool/README.html