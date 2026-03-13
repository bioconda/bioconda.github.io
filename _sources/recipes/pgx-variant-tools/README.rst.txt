:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgx-variant-tools'
.. highlight: bash

pgx-variant-tools
=================

.. conda:recipe:: pgx-variant-tools
   :replaces_section_title:
   :noindex:

   This library contains various methods and utilities for the calling and manipulation of normalized variants.

   :homepage: https://github.com/LUMC/pgx-variant-tools
   :license: MIT / MIT
   :recipe: /`pgx-variant-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgx-variant-tools/meta.yaml>`_

   


.. conda:package:: pgx-variant-tools

   |downloads_pgx-variant-tools| |docker_pgx-variant-tools|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-2``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on biopython: 
   :depends on click: 
   :depends on cyvcf2: 
   :depends on numpy: 
   :depends on pyinterval: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 
   :depends on requests: 
   :depends on suds-jurko: 

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

    pixi global install pgx-variant-tools

to add into an existing workspace instead, run::

    pixi add pgx-variant-tools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgx-variant-tools

Alternatively, to install into a new environment, run::

    conda create -n envname pgx-variant-tools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgx-variant-tools:<tag>

(see `pgx-variant-tools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgx-variant-tools| image:: https://img.shields.io/conda/dn/bioconda/pgx-variant-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/pgx-variant-tools
   :alt:   (downloads)
.. |docker_pgx-variant-tools| image:: https://quay.io/repository/biocontainers/pgx-variant-tools/status
   :target: https://quay.io/repository/biocontainers/pgx-variant-tools
.. _`pgx-variant-tools/tags`: https://quay.io/repository/biocontainers/pgx-variant-tools?tab=tags


.. raw:: html

    <script>
        var package = "pgx-variant-tools";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgx-variant-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgx-variant-tools/README.html