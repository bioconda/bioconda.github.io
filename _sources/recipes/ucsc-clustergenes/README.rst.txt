:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-clustergenes'
.. highlight: bash

ucsc-clustergenes
=================

.. conda:recipe:: ucsc-clustergenes
   :replaces_section_title:
   :noindex:

   Cluster genes from genePred tracks

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-clustergenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-clustergenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-clustergenes/meta.yaml>`_

   


.. conda:package:: ucsc-clustergenes

   |downloads_ucsc-clustergenes| |docker_ucsc-clustergenes|

   :versions:
      
      

      ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-1``,  ``357-0``

      

   
   :depends on libgcc-ng: ``>=9.4.0``
   :depends on libpng: ``>=1.6.37,<1.7.0a0``
   :depends on libuuid: ``>=2.32.1,<3.0a0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends on openssl: ``>=1.1.1l,<1.1.2a``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install ucsc-clustergenes

to add into an existing workspace instead, run::

    pixi add ucsc-clustergenes

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ucsc-clustergenes

Alternatively, to install into a new environment, run::

    conda create -n envname ucsc-clustergenes

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ucsc-clustergenes:<tag>

(see `ucsc-clustergenes/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ucsc-clustergenes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-clustergenes.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-clustergenes
   :alt:   (downloads)
.. |docker_ucsc-clustergenes| image:: https://quay.io/repository/biocontainers/ucsc-clustergenes/status
   :target: https://quay.io/repository/biocontainers/ucsc-clustergenes
.. _`ucsc-clustergenes/tags`: https://quay.io/repository/biocontainers/ucsc-clustergenes?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-clustergenes";
        var versions = ["377","377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-clustergenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-clustergenes/README.html