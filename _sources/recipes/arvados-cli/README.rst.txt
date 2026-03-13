:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-cli'
.. highlight: bash

arvados-cli
===========

.. conda:recipe:: arvados-cli
   :replaces_section_title:
   :noindex:

   Command line interface to Arvados\, a free and open source platform for big data science

   :homepage: http://doc.arvados.org/sdk/cli/index.html
   :license: Apache v2
   :recipe: /`arvados-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-cli/meta.yaml>`_

   


.. conda:package:: arvados-cli

   |downloads_arvados-cli| |docker_arvados-cli|

   :versions:
      
      

      ``0.1.20151207150126-0``

      

   
   :depends on curl: 
   :depends on ruby: 

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

    pixi global install arvados-cli

to add into an existing workspace instead, run::

    pixi add arvados-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install arvados-cli

Alternatively, to install into a new environment, run::

    conda create -n envname arvados-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/arvados-cli:<tag>

(see `arvados-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_arvados-cli| image:: https://img.shields.io/conda/dn/bioconda/arvados-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-cli
   :alt:   (downloads)
.. |docker_arvados-cli| image:: https://quay.io/repository/biocontainers/arvados-cli/status
   :target: https://quay.io/repository/biocontainers/arvados-cli
.. _`arvados-cli/tags`: https://quay.io/repository/biocontainers/arvados-cli?tab=tags


.. raw:: html

    <script>
        var package = "arvados-cli";
        var versions = ["0.1.20151207150126"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-cli/README.html