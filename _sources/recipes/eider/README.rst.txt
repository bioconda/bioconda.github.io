:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eider'
.. highlight: bash

eider
=====

.. conda:recipe:: eider
   :replaces_section_title:
   :noindex:

   Command line bioinformatics tools for DuckDB.

   :homepage: https://github.com/heuermh/eider
   :license: Apache / Apache-2.0
   :recipe: /`eider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eider/meta.yaml>`_

   


.. conda:package:: eider

   |downloads_eider| |docker_eider|

   :versions:
      
      

      ``0.3-0``,  ``0.1-0``

      

   
   :depends on openjdk: ``>=17``
   :depends on zlib: 

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

    pixi global install eider

to add into an existing workspace instead, run::

    pixi add eider

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eider

Alternatively, to install into a new environment, run::

    conda create -n envname eider

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eider:<tag>

(see `eider/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eider| image:: https://img.shields.io/conda/dn/bioconda/eider.svg?style=flat
   :target: https://anaconda.org/bioconda/eider
   :alt:   (downloads)
.. |docker_eider| image:: https://quay.io/repository/biocontainers/eider/status
   :target: https://quay.io/repository/biocontainers/eider
.. _`eider/tags`: https://quay.io/repository/biocontainers/eider?tab=tags


.. raw:: html

    <script>
        var package = "eider";
        var versions = ["0.3","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eider/README.html