:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasann'
.. highlight: bash

plasann
=======

.. conda:recipe:: plasann
   :replaces_section_title:
   :noindex:

   A tool for plasmid annotation and visualization.

   :homepage: https://github.com/ajlopatkin/PlasAnn
   :license: MIT / MIT
   :recipe: /`plasann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasann/meta.yaml>`_

   A comprehensive tool for annotating plasmid sequences\, identifying coding
   sequences\, detecting origins of replication and transfer\, and generating
   plasmid maps.

   For Mac \(Apple Silicon\) users\, please install these additional dependencies\:
   \- brew install blast
   \- brew install brewsci\/bio\/prodigal

   Please ensure both tools are available in your PATH before running PlasAnn.



.. conda:package:: plasann

   |downloads_plasann| |docker_plasann|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.3-0``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on biopython: ``>=1.79``
   :depends on blast: 
   :depends on gdown: ``>=4.0.0``
   :depends on infernal: 
   :depends on matplotlib-base: ``>=3.5.0``
   :depends on numpy: ``>=1.21.0``
   :depends on pandas: ``>=1.3.0``
   :depends on prodigal: 
   :depends on pycirclize: ``>=0.3.0``
   :depends on python: ``>=3.8``
   :depends on requests: ``>=2.25.0``

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

    pixi global install plasann

to add into an existing workspace instead, run::

    pixi add plasann

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plasann

Alternatively, to install into a new environment, run::

    conda create -n envname plasann

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plasann:<tag>

(see `plasann/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plasann| image:: https://img.shields.io/conda/dn/bioconda/plasann.svg?style=flat
   :target: https://anaconda.org/bioconda/plasann
   :alt:   (downloads)
.. |docker_plasann| image:: https://quay.io/repository/biocontainers/plasann/status
   :target: https://quay.io/repository/biocontainers/plasann
.. _`plasann/tags`: https://quay.io/repository/biocontainers/plasann?tab=tags


.. raw:: html

    <script>
        var package = "plasann";
        var versions = ["1.1.6","1.1.3","1.0.8","1.0.8","1.0.3"];
    </script>





Notes
-----
This package requires external dependencies \(BLAST and Prodigal\) for Apple Silicon Macs
which must be installed separately due to platform compatibility issues.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasann/README.html