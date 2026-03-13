:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'athena_meta'
.. highlight: bash

athena_meta
===========

.. conda:recipe:: athena_meta
   :replaces_section_title:
   :noindex:

   Athena read cloud assembler for metagenomes

   :homepage: https://github.com/abishara/athena_meta/
   :license: MIT
   :recipe: /`athena_meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/athena_meta/meta.yaml>`_

   


.. conda:package:: athena_meta

   |downloads_athena_meta| |docker_athena_meta|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``,  ``1.2-0``

      

   
   :depends on bwa: ``0.7.*``
   :depends on bx-python: ``0.8.*``
   :depends on flye: ``2.3.1.*``
   :depends on htslib: ``1.9.*``
   :depends on idba_subasm: ``1.1.3a1.*``
   :depends on ipython-cluster-helper: ``0.6.*``
   :depends on numpy: ``1.11.*``
   :depends on pysam: ``0.15.*``
   :depends on python: ``<3``
   :depends on samtools: ``1.9.*``

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

    pixi global install athena_meta

to add into an existing workspace instead, run::

    pixi add athena_meta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install athena_meta

Alternatively, to install into a new environment, run::

    conda create -n envname athena_meta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/athena_meta:<tag>

(see `athena_meta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_athena_meta| image:: https://img.shields.io/conda/dn/bioconda/athena_meta.svg?style=flat
   :target: https://anaconda.org/bioconda/athena_meta
   :alt:   (downloads)
.. |docker_athena_meta| image:: https://quay.io/repository/biocontainers/athena_meta/status
   :target: https://quay.io/repository/biocontainers/athena_meta
.. _`athena_meta/tags`: https://quay.io/repository/biocontainers/athena_meta?tab=tags


.. raw:: html

    <script>
        var package = "athena_meta";
        var versions = ["1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/athena_meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/athena_meta/README.html