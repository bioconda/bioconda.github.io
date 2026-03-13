:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamsurgeon'
.. highlight: bash

bamsurgeon
==========

.. conda:recipe:: bamsurgeon
   :replaces_section_title:
   :noindex:

   Tools for adding genomic variants to BAM\/SAM\/CRAM files. Can be used to test variant callers.

   :homepage: https://github.com/adamewing/bamsurgeon
   :license: MIT-license
   :recipe: /`bamsurgeon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsurgeon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamsurgeon/meta.yaml>`_

   


.. conda:package:: bamsurgeon

   |downloads_bamsurgeon| |docker_bamsurgeon|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends on bwa: ``>=0.7.12``
   :depends on exonerate: ``>=2.2``
   :depends on picard: 
   :depends on pysam: 
   :depends on python: ``>=3.6``
   :depends on samtools: ``>=1.2``
   :depends on velvet: ``>=1.2``
   :depends on wgsim: ``>=0.2``

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

    pixi global install bamsurgeon

to add into an existing workspace instead, run::

    pixi add bamsurgeon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bamsurgeon

Alternatively, to install into a new environment, run::

    conda create -n envname bamsurgeon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bamsurgeon:<tag>

(see `bamsurgeon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bamsurgeon| image:: https://img.shields.io/conda/dn/bioconda/bamsurgeon.svg?style=flat
   :target: https://anaconda.org/bioconda/bamsurgeon
   :alt:   (downloads)
.. |docker_bamsurgeon| image:: https://quay.io/repository/biocontainers/bamsurgeon/status
   :target: https://quay.io/repository/biocontainers/bamsurgeon
.. _`bamsurgeon/tags`: https://quay.io/repository/biocontainers/bamsurgeon?tab=tags


.. raw:: html

    <script>
        var package = "bamsurgeon";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamsurgeon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamsurgeon/README.html