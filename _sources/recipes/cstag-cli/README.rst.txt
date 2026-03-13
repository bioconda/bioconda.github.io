:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cstag-cli'
.. highlight: bash

cstag-cli
=========

.. conda:recipe:: cstag-cli
   :replaces_section_title:
   :noindex:

   Command line interface of cstag to manipulate the minimap2\'s CS tag

   :homepage: https://github.com/akikuno/cstag-cli
   :license: MIT
   :recipe: /`cstag-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cstag-cli/meta.yaml>`_

   


.. conda:package:: cstag-cli

   |downloads_cstag-cli| |docker_cstag-cli|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on cstag: ``>=0.6.2``
   :depends on pysam: ``>=0.19.0``
   :depends on python: ``>=3.7.0,<4.0.0``

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

    pixi global install cstag-cli

to add into an existing workspace instead, run::

    pixi add cstag-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cstag-cli

Alternatively, to install into a new environment, run::

    conda create -n envname cstag-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cstag-cli:<tag>

(see `cstag-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cstag-cli| image:: https://img.shields.io/conda/dn/bioconda/cstag-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/cstag-cli
   :alt:   (downloads)
.. |docker_cstag-cli| image:: https://quay.io/repository/biocontainers/cstag-cli/status
   :target: https://quay.io/repository/biocontainers/cstag-cli
.. _`cstag-cli/tags`: https://quay.io/repository/biocontainers/cstag-cli?tab=tags


.. raw:: html

    <script>
        var package = "cstag-cli";
        var versions = ["1.0.0","1.0.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cstag-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cstag-cli/README.html