:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lz4-bin'
.. highlight: bash

lz4-bin
=======

.. conda:recipe:: lz4-bin
   :replaces_section_title:
   :noindex:

   Extremely Fast Compression Application

   :homepage: http://cyan4973.github.io/lz4
   :license: BSD
   :recipe: /`lz4-bin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lz4-bin/meta.yaml>`_

   


.. conda:package:: lz4-bin

   |downloads_lz4-bin| |docker_lz4-bin|

   :versions:
      
      

      ``131-8``,  ``131-7``,  ``131-6``,  ``131-5``,  ``131-4``,  ``131-3``,  ``131-2``,  ``131-1``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install lz4-bin

to add into an existing workspace instead, run::

    pixi add lz4-bin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lz4-bin

Alternatively, to install into a new environment, run::

    conda create -n envname lz4-bin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lz4-bin:<tag>

(see `lz4-bin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lz4-bin| image:: https://img.shields.io/conda/dn/bioconda/lz4-bin.svg?style=flat
   :target: https://anaconda.org/bioconda/lz4-bin
   :alt:   (downloads)
.. |docker_lz4-bin| image:: https://quay.io/repository/biocontainers/lz4-bin/status
   :target: https://quay.io/repository/biocontainers/lz4-bin
.. _`lz4-bin/tags`: https://quay.io/repository/biocontainers/lz4-bin?tab=tags


.. raw:: html

    <script>
        var package = "lz4-bin";
        var versions = ["131","131","131","131","131"];
    </script>





Notes
-----
This package is for the lz4 C binary\, while the package in the default channel is \(as of 9\/9\/16\) for the lz4 Python bindings \(hence the \'\-bin\' suffix of this package\)


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lz4-bin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lz4-bin/README.html