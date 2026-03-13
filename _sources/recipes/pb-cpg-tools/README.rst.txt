:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-cpg-tools'
.. highlight: bash

pb-cpg-tools
============

.. conda:recipe:: pb-cpg-tools
   :replaces_section_title:
   :noindex:

   Collection of tools for the analysis of CpG data

   :homepage: https://github.com/PacificBiosciences/pb-CpG-tools
   :license: Pacific Biosciences Software License Agreement
   :recipe: /`pb-cpg-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-cpg-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-cpg-tools/meta.yaml>`_

   


.. conda:package:: pb-cpg-tools

   |downloads_pb-cpg-tools| |docker_pb-cpg-tools|

   :versions:
      
      

      ``3.0.0-0``

      

   

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

    pixi global install pb-cpg-tools

to add into an existing workspace instead, run::

    pixi add pb-cpg-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pb-cpg-tools

Alternatively, to install into a new environment, run::

    conda create -n envname pb-cpg-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pb-cpg-tools:<tag>

(see `pb-cpg-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pb-cpg-tools| image:: https://img.shields.io/conda/dn/bioconda/pb-cpg-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-cpg-tools
   :alt:   (downloads)
.. |docker_pb-cpg-tools| image:: https://quay.io/repository/biocontainers/pb-cpg-tools/status
   :target: https://quay.io/repository/biocontainers/pb-cpg-tools
.. _`pb-cpg-tools/tags`: https://quay.io/repository/biocontainers/pb-cpg-tools?tab=tags


.. raw:: html

    <script>
        var package = "pb-cpg-tools";
        var versions = ["3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-cpg-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-cpg-tools/README.html