:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'noah-cli'
.. highlight: bash

noah-cli
========

.. conda:recipe:: noah-cli
   :replaces_section_title:
   :noindex:

   a project management tool for reproducible\, portable\, and streamlined bioinformatics analysis

   :homepage: https://github.com/raymond-u/noah-cli
   :license: MIT
   :recipe: /`noah-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noah-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/noah-cli/meta.yaml>`_

   Noah is a project management tool specifically designed for bioinformatics projects. It enables reproducible analysis of large datasets\, making it effortless to share and collaborate with others.



.. conda:package:: noah-cli

   |downloads_noah-cli| |docker_noah-cli|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on dacite: ``>=1.8.0,<2.0.0``
   :depends on fabric: ``>=3.1.0,<4.0.0``
   :depends on ordered-set: ``>=4.1.0,<5.0.0``
   :depends on pysradb: ``>=2.1.0,<3.0.0``
   :depends on python: ``>=3.11.0,<4.0.0``
   :depends on requests: ``>=2.31.0,<3.0.0``
   :depends on ruamel.yaml: ``>=0.17.0,<0.18.0``
   :depends on typer: ``>=0.9.0,<0.10.0``

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

    pixi global install noah-cli

to add into an existing workspace instead, run::

    pixi add noah-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install noah-cli

Alternatively, to install into a new environment, run::

    conda create -n envname noah-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/noah-cli:<tag>

(see `noah-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_noah-cli| image:: https://img.shields.io/conda/dn/bioconda/noah-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/noah-cli
   :alt:   (downloads)
.. |docker_noah-cli| image:: https://quay.io/repository/biocontainers/noah-cli/status
   :target: https://quay.io/repository/biocontainers/noah-cli
.. _`noah-cli/tags`: https://quay.io/repository/biocontainers/noah-cli?tab=tags


.. raw:: html

    <script>
        var package = "noah-cli";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/noah-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/noah-cli/README.html