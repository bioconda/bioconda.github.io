:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mikrokondo-tools'
.. highlight: bash

mikrokondo-tools
================

.. conda:recipe:: mikrokondo-tools
   :replaces_section_title:
   :noindex:

   A collection of utilities to make using the mikrokondo pipeline easier

   :homepage: https://pypi.org/project/mikrokondo-tools
   :developer docs: https://github.com/DOED-DAAD/mikrokondo-tools
   :license: Apache-2.0
   :recipe: /`mikrokondo-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikrokondo-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mikrokondo-tools/meta.yaml>`_

   


.. conda:package:: mikrokondo-tools

   |downloads_mikrokondo-tools| |docker_mikrokondo-tools|

   :versions:
      
      

      ``0.0.1rc0-0``

      

   
   :depends on click: 
   :depends on jsonschema: 
   :depends on python: ``>=3.8``
   :depends on requests: 

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

    pixi global install mikrokondo-tools

to add into an existing workspace instead, run::

    pixi add mikrokondo-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mikrokondo-tools

Alternatively, to install into a new environment, run::

    conda create -n envname mikrokondo-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mikrokondo-tools:<tag>

(see `mikrokondo-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mikrokondo-tools| image:: https://img.shields.io/conda/dn/bioconda/mikrokondo-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/mikrokondo-tools
   :alt:   (downloads)
.. |docker_mikrokondo-tools| image:: https://quay.io/repository/biocontainers/mikrokondo-tools/status
   :target: https://quay.io/repository/biocontainers/mikrokondo-tools
.. _`mikrokondo-tools/tags`: https://quay.io/repository/biocontainers/mikrokondo-tools?tab=tags


.. raw:: html

    <script>
        var package = "mikrokondo-tools";
        var versions = ["0.0.1rc0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mikrokondo-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mikrokondo-tools/README.html