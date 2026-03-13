:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argparse-tui'
.. highlight: bash

argparse-tui
============

.. conda:recipe:: argparse-tui
   :replaces_section_title:
   :noindex:

   Present your Argparse CLI as a Textual UI \(TUI\).

   :homepage: https://github.com/fresh2dev/argparse-tui
   :documentation: https://github.com/fresh2dev/argparse-tui/blob/0.3.1/README.md
   
   :license: MIT / MIT
   :recipe: /`argparse-tui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse-tui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argparse-tui/meta.yaml>`_

   


.. conda:package:: argparse-tui

   |downloads_argparse-tui| |docker_argparse-tui|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends on python: ``>=3.9``
   :depends on textual: ``>=0.61.0,<1``

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

    pixi global install argparse-tui

to add into an existing workspace instead, run::

    pixi add argparse-tui

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install argparse-tui

Alternatively, to install into a new environment, run::

    conda create -n envname argparse-tui

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/argparse-tui:<tag>

(see `argparse-tui/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_argparse-tui| image:: https://img.shields.io/conda/dn/bioconda/argparse-tui.svg?style=flat
   :target: https://anaconda.org/bioconda/argparse-tui
   :alt:   (downloads)
.. |docker_argparse-tui| image:: https://quay.io/repository/biocontainers/argparse-tui/status
   :target: https://quay.io/repository/biocontainers/argparse-tui
.. _`argparse-tui/tags`: https://quay.io/repository/biocontainers/argparse-tui?tab=tags


.. raw:: html

    <script>
        var package = "argparse-tui";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argparse-tui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argparse-tui/README.html