:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'staphscope-sccmec-data'
.. highlight: bash

staphscope-sccmec-data
======================

.. conda:recipe:: staphscope-sccmec-data
   :replaces_section_title:
   :noindex:

   SCCmec typing database and scripts for StaphScope

   :homepage: https://github.com/bbeckley-hub/staphscope-typing-tool
   :license: MIT
   :recipe: /`staphscope-sccmec-data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphscope-sccmec-data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/staphscope-sccmec-data/meta.yaml>`_

   


.. conda:package:: staphscope-sccmec-data

   |downloads_staphscope-sccmec-data| |docker_staphscope-sccmec-data|

   :versions:
      
      

      ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   

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

    pixi global install staphscope-sccmec-data

to add into an existing workspace instead, run::

    pixi add staphscope-sccmec-data

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install staphscope-sccmec-data

Alternatively, to install into a new environment, run::

    conda create -n envname staphscope-sccmec-data

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/staphscope-sccmec-data:<tag>

(see `staphscope-sccmec-data/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_staphscope-sccmec-data| image:: https://img.shields.io/conda/dn/bioconda/staphscope-sccmec-data.svg?style=flat
   :target: https://anaconda.org/bioconda/staphscope-sccmec-data
   :alt:   (downloads)
.. |docker_staphscope-sccmec-data| image:: https://quay.io/repository/biocontainers/staphscope-sccmec-data/status
   :target: https://quay.io/repository/biocontainers/staphscope-sccmec-data
.. _`staphscope-sccmec-data/tags`: https://quay.io/repository/biocontainers/staphscope-sccmec-data?tab=tags


.. raw:: html

    <script>
        var package = "staphscope-sccmec-data";
        var versions = ["1.2.2","1.2.1","1.2.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/staphscope-sccmec-data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/staphscope-sccmec-data/README.html