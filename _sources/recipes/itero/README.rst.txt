:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itero'
.. highlight: bash

itero
=====

.. conda:recipe:: itero
   :replaces_section_title:
   :noindex:

   A pipeline for iterative\, guided contig assembly that integrates spades\, bwa\, and samtools to produce assembled contigs.

   :homepage: https://github.com/faircloth-lab/itero
   :license: BSD
   :recipe: /`itero <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itero>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itero/meta.yaml>`_

   


.. conda:package:: itero

   |downloads_itero| |docker_itero|

   :versions:
      
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-2``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on argcomplete: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on gawk: 
   :depends on grep: 
   :depends on mpi4py: 
   :depends on nomkl: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on samtools: 
   :depends on schwimmbad: 
   :depends on six: 
   :depends on spades: ``3.12.*``

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

    pixi global install itero

to add into an existing workspace instead, run::

    pixi add itero

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install itero

Alternatively, to install into a new environment, run::

    conda create -n envname itero

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/itero:<tag>

(see `itero/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_itero| image:: https://img.shields.io/conda/dn/bioconda/itero.svg?style=flat
   :target: https://anaconda.org/bioconda/itero
   :alt:   (downloads)
.. |docker_itero| image:: https://quay.io/repository/biocontainers/itero/status
   :target: https://quay.io/repository/biocontainers/itero
.. _`itero/tags`: https://quay.io/repository/biocontainers/itero?tab=tags


.. raw:: html

    <script>
        var package = "itero";
        var versions = ["1.1.2","1.1.2","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itero/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itero/README.html