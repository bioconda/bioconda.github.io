:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chunked-scatter'
.. highlight: bash

chunked-scatter
===============

.. conda:recipe:: chunked-scatter
   :replaces_section_title:
   :noindex:

   Chunk and scatter the regions in a bed or sequence dict file

   :homepage: https://github.com/biowdl/chunked-scatter
   :license: MIT / MIT
   :recipe: /`chunked-scatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chunked-scatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chunked-scatter/meta.yaml>`_

   


.. conda:package:: chunked-scatter

   |downloads_chunked-scatter| |docker_chunked-scatter|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends on pysam: ``>=0.11.2``
   :depends on python: ``>=3.6``

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

    pixi global install chunked-scatter

to add into an existing workspace instead, run::

    pixi add chunked-scatter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chunked-scatter

Alternatively, to install into a new environment, run::

    conda create -n envname chunked-scatter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chunked-scatter:<tag>

(see `chunked-scatter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chunked-scatter| image:: https://img.shields.io/conda/dn/bioconda/chunked-scatter.svg?style=flat
   :target: https://anaconda.org/bioconda/chunked-scatter
   :alt:   (downloads)
.. |docker_chunked-scatter| image:: https://quay.io/repository/biocontainers/chunked-scatter/status
   :target: https://quay.io/repository/biocontainers/chunked-scatter
.. _`chunked-scatter/tags`: https://quay.io/repository/biocontainers/chunked-scatter?tab=tags


.. raw:: html

    <script>
        var package = "chunked-scatter";
        var versions = ["1.0.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chunked-scatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chunked-scatter/README.html