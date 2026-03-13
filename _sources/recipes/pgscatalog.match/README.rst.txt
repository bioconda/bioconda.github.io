:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pgscatalog.match'
.. highlight: bash

pgscatalog.match
================

.. conda:recipe:: pgscatalog.match
   :replaces_section_title:
   :noindex:

   Tools for matching variants in PGS scoring files and target variant information files.

   :homepage: https://github.com/PGScatalog/pygscatalog
   :documentation: https://pygscatalog.readthedocs.io
   
   :license: APACHE / Apache-2.0
   :recipe: /`pgscatalog.match <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.match>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pgscatalog.match/meta.yaml>`_

   


.. conda:package:: pgscatalog.match

   |downloads_pgscatalog.match| |docker_pgscatalog.match|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on pgscatalog.core: ``>=0.3.3``
   :depends on polars: ``0.20.30``
   :depends on pyarrow: ``>=15.0.0``
   :depends on python: ``>=3.10``

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

    pixi global install pgscatalog.match

to add into an existing workspace instead, run::

    pixi add pgscatalog.match

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pgscatalog.match

Alternatively, to install into a new environment, run::

    conda create -n envname pgscatalog.match

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pgscatalog.match:<tag>

(see `pgscatalog.match/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pgscatalog.match| image:: https://img.shields.io/conda/dn/bioconda/pgscatalog.match.svg?style=flat
   :target: https://anaconda.org/bioconda/pgscatalog.match
   :alt:   (downloads)
.. |docker_pgscatalog.match| image:: https://quay.io/repository/biocontainers/pgscatalog.match/status
   :target: https://quay.io/repository/biocontainers/pgscatalog.match
.. _`pgscatalog.match/tags`: https://quay.io/repository/biocontainers/pgscatalog.match?tab=tags


.. raw:: html

    <script>
        var package = "pgscatalog.match";
        var versions = ["0.4.0","0.3.3","0.3.2","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pgscatalog.match/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pgscatalog.match/README.html