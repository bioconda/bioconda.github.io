:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphscope-mlst-data'
.. highlight: bash

staphscope-mlst-data
====================

.. conda:recipe:: staphscope-mlst-data
   :replaces_section_title:
   :noindex:

   MLST typing database for StaphScope

   :homepage: https://github.com/bbeckley-hub/staphscope-typing-tool
   :license: MIT
   :recipe: /`staphscope-mlst-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphscope-mlst-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphscope-mlst-data/meta.yaml>`_

   


.. conda:package:: staphscope-mlst-data

   |downloads_staphscope-mlst-data| |docker_staphscope-mlst-data|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``

      

   

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

    pixi global install staphscope-mlst-data

to add into an existing workspace instead, run::

    pixi add staphscope-mlst-data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install staphscope-mlst-data

Alternatively, to install into a new environment, run::

    conda create -n envname staphscope-mlst-data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/staphscope-mlst-data:<tag>

(see `staphscope-mlst-data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_staphscope-mlst-data| image:: https://img.shields.io/conda/dn/bioconda/staphscope-mlst-data.svg?style=flat
   :target: https://anaconda.org/bioconda/staphscope-mlst-data
   :alt:   (downloads)
.. |docker_staphscope-mlst-data| image:: https://quay.io/repository/biocontainers/staphscope-mlst-data/status
   :target: https://quay.io/repository/biocontainers/staphscope-mlst-data
.. _`staphscope-mlst-data/tags`: https://quay.io/repository/biocontainers/staphscope-mlst-data?tab=tags


.. raw:: html

    <script>
        var package = "staphscope-mlst-data";
        var versions = ["1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphscope-mlst-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphscope-mlst-data/README.html