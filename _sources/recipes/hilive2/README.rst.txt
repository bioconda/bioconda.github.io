:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hilive2'
.. highlight: bash

hilive2
=======

.. conda:recipe:: hilive2
   :replaces_section_title:
   :noindex:

   Tool for real\-time read alignment of Illumina sequencing data

   :homepage: https://gitlab.com/rki_bioinformatics/HiLive2
   :license: BSD / BSD-3-Clause
   :recipe: /`hilive2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilive2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilive2/meta.yaml>`_

   


.. conda:package:: hilive2

   |downloads_hilive2| |docker_hilive2|

   :versions:
      
      

      ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``2.0a-2``,  ``2.0a-1``,  ``2.0a-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on lz4-c: ``>=1.9.3,<1.10.0a0``

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

    pixi global install hilive2

to add into an existing workspace instead, run::

    pixi add hilive2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hilive2

Alternatively, to install into a new environment, run::

    conda create -n envname hilive2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hilive2:<tag>

(see `hilive2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hilive2| image:: https://img.shields.io/conda/dn/bioconda/hilive2.svg?style=flat
   :target: https://anaconda.org/bioconda/hilive2
   :alt:   (downloads)
.. |docker_hilive2| image:: https://quay.io/repository/biocontainers/hilive2/status
   :target: https://quay.io/repository/biocontainers/hilive2
.. _`hilive2/tags`: https://quay.io/repository/biocontainers/hilive2?tab=tags


.. raw:: html

    <script>
        var package = "hilive2";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hilive2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hilive2/README.html