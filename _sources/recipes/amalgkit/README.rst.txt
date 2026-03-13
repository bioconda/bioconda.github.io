:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amalgkit'
.. highlight: bash

amalgkit
========

.. conda:recipe:: amalgkit
   :replaces_section_title:
   :noindex:

   Tools for transcriptome amalgamation

   :homepage: https://github.com/kfuku52/amalgkit
   :license: MIT
   :recipe: /`amalgkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amalgkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amalgkit/meta.yaml>`_

   


.. conda:package:: amalgkit

   |downloads_amalgkit| |docker_amalgkit|

   :versions:
      
      

      ``0.14.0-0``,  ``0.12.20-0``,  ``0.12.19-0``,  ``0.12.18-0``,  ``0.12.17-0``,  ``0.12.16-0``,  ``0.12.15-0``

      

   
   :depends on bioconductor-edger: 
   :depends on bioconductor-sva: 
   :depends on biopython: 
   :depends on ete4: 
   :depends on fastp: 
   :depends on kallisto: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on r-base: 
   :depends on r-ggplot2: 
   :depends on r-rtsne: 
   :depends on seqkit: 
   :depends on sra-tools: 

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

    pixi global install amalgkit

to add into an existing workspace instead, run::

    pixi add amalgkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install amalgkit

Alternatively, to install into a new environment, run::

    conda create -n envname amalgkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/amalgkit:<tag>

(see `amalgkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_amalgkit| image:: https://img.shields.io/conda/dn/bioconda/amalgkit.svg?style=flat
   :target: https://anaconda.org/bioconda/amalgkit
   :alt:   (downloads)
.. |docker_amalgkit| image:: https://quay.io/repository/biocontainers/amalgkit/status
   :target: https://quay.io/repository/biocontainers/amalgkit
.. _`amalgkit/tags`: https://quay.io/repository/biocontainers/amalgkit?tab=tags


.. raw:: html

    <script>
        var package = "amalgkit";
        var versions = ["0.14.0","0.12.20","0.12.19","0.12.18","0.12.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amalgkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amalgkit/README.html