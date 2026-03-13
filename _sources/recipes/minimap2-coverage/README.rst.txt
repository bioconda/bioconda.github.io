:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimap2-coverage'
.. highlight: bash

minimap2-coverage
=================

.. conda:recipe:: minimap2-coverage
   :replaces_section_title:
   :noindex:

   A versatile pairwise aligner for genomic and spliced nucleotide sequences modified for use by LongQC

   :homepage: https://github.com/yfukasawa/LongQC
   :license: MIT
   :recipe: /`minimap2-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2-coverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimap2-coverage/meta.yaml>`_

   


.. conda:package:: minimap2-coverage

   |downloads_minimap2-coverage| |docker_minimap2-coverage|

   :versions:
      
      

      ``1.2.0c-4``,  ``1.2.0c-3``,  ``1.2.0c-2``,  ``1.2.0c-1``,  ``1.2.0c-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install minimap2-coverage

to add into an existing workspace instead, run::

    pixi add minimap2-coverage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minimap2-coverage

Alternatively, to install into a new environment, run::

    conda create -n envname minimap2-coverage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minimap2-coverage:<tag>

(see `minimap2-coverage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minimap2-coverage| image:: https://img.shields.io/conda/dn/bioconda/minimap2-coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/minimap2-coverage
   :alt:   (downloads)
.. |docker_minimap2-coverage| image:: https://quay.io/repository/biocontainers/minimap2-coverage/status
   :target: https://quay.io/repository/biocontainers/minimap2-coverage
.. _`minimap2-coverage/tags`: https://quay.io/repository/biocontainers/minimap2-coverage?tab=tags


.. raw:: html

    <script>
        var package = "minimap2-coverage";
        var versions = ["1.2.0c","1.2.0c","1.2.0c","1.2.0c","1.2.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimap2-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimap2-coverage/README.html