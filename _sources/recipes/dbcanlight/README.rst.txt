:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dbcanlight'
.. highlight: bash

dbcanlight
==========

.. conda:recipe:: dbcanlight
   :replaces_section_title:
   :noindex:

   A lightweight CAZyme annotation tool

   :homepage: https://github.com/chtsai0105/dbcanlight
   :documentation: https://github.com/chtsai0105/dbcanlight/blob/v1.1.1/README.md
   
   :license: MIT / MIT
   :recipe: /`dbcanlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcanlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dbcanlight/meta.yaml>`_

   Dbcanlight is a lightweight rewrite of a widely used CAZyme annotation tool run\_dbcan. It uses pyhmmer\, a Cython binding to
   HMMER3\, in place of the HMMER3 CLI suite as the backend for search processes\, improving multithreading performance. In
   addition\, it removes a limitation in run\_dbcan that required manual splitting of large sequence files beforehand.

   The main program dbcanlight comprises three modules \- build\, search and conclude. The build module help to download the
   required databases from dbcan website\; the search module searches against protein HMM\, substrate HMM or diamond databases and
   reports the hits separately\; and the conclude module gathers all the results made by each module and provides a summary. The
   output format closely resembles that of run\_dbcan\, with minor cleanup. For example\, run\_dbcan may report the same substrate
   multiple times for a gene matching several profiles with that substrate\, whereas dbcanlight reports it only once.

   Dbcanlight only reimplemented the core features of run\_dbcan\, that is searching for CAZyme and substrate matches by
   hmmer\/diamond\/dbcansub. Submodules like signalP\, CGCFinder\, etc. are not implemented.



.. conda:package:: dbcanlight

   |downloads_dbcanlight| |docker_dbcanlight|

   :versions:
      
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.81``
   :depends on pyhmmer: ``>=0.11.0``
   :depends on python: ``>=3.9``
   :depends on urllib3: ``>=2.3.0``

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

    pixi global install dbcanlight

to add into an existing workspace instead, run::

    pixi add dbcanlight

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dbcanlight

Alternatively, to install into a new environment, run::

    conda create -n envname dbcanlight

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dbcanlight:<tag>

(see `dbcanlight/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dbcanlight| image:: https://img.shields.io/conda/dn/bioconda/dbcanlight.svg?style=flat
   :target: https://anaconda.org/bioconda/dbcanlight
   :alt:   (downloads)
.. |docker_dbcanlight| image:: https://quay.io/repository/biocontainers/dbcanlight/status
   :target: https://quay.io/repository/biocontainers/dbcanlight
.. _`dbcanlight/tags`: https://quay.io/repository/biocontainers/dbcanlight?tab=tags


.. raw:: html

    <script>
        var package = "dbcanlight";
        var versions = ["1.1.1","1.1.0","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dbcanlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dbcanlight/README.html