:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finaletoolkit'
.. highlight: bash

finaletoolkit
=============

.. conda:recipe:: finaletoolkit
   :replaces_section_title:
   :noindex:

   Extract cfDNA fragmentation features from sequencing data.

   :homepage: https://github.com/epifluidlab/FinaleToolkit
   :license: MIT / MIT
   :recipe: /`finaletoolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finaletoolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finaletoolkit/meta.yaml>`_

   \"FinaleToolkit \(FragmentatIoN AnaLysis of cEll\-free DNA Toolkit\) is a package and standalone program to extract fragmentation features of cell\-free DNA from paired\-end sequencing data.
   It has support for many cfDNA fragmentation features\, such as fragment length\, coverage\, end motifs\, DELFI\, and more.\"



.. conda:package:: finaletoolkit

   |downloads_finaletoolkit| |docker_finaletoolkit|

   :versions:
      
      

      ``0.11.0-0``,  ``0.10.7-0``

      

   
   :depends on matplotlib-base: 
   :depends on numba: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on py2bit: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.9,<3.13``
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on tqdm: 

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

    pixi global install finaletoolkit

to add into an existing workspace instead, run::

    pixi add finaletoolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install finaletoolkit

Alternatively, to install into a new environment, run::

    conda create -n envname finaletoolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/finaletoolkit:<tag>

(see `finaletoolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_finaletoolkit| image:: https://img.shields.io/conda/dn/bioconda/finaletoolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/finaletoolkit
   :alt:   (downloads)
.. |docker_finaletoolkit| image:: https://quay.io/repository/biocontainers/finaletoolkit/status
   :target: https://quay.io/repository/biocontainers/finaletoolkit
.. _`finaletoolkit/tags`: https://quay.io/repository/biocontainers/finaletoolkit?tab=tags


.. raw:: html

    <script>
        var package = "finaletoolkit";
        var versions = ["0.11.0","0.10.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finaletoolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finaletoolkit/README.html