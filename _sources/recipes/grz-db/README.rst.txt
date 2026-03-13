:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grz-db'
.. highlight: bash

grz-db
======

.. conda:recipe:: grz-db
   :replaces_section_title:
   :noindex:

   SQL models for grz\-cli and grz\-watchdog

   :homepage: https://github.com/BfArM-MVH/grz-tools
   :license: MIT
   :recipe: /`grz-db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grz-db/meta.yaml>`_

   


.. conda:package:: grz-db

   |downloads_grz-db| |docker_grz-db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on alembic: ``>=1.16.1``
   :depends on cryptography: ``>=45.0.3``
   :depends on grz-pydantic-models: ``>=2.5,<3``
   :depends on psycopg: ``>=3.2,<4``
   :depends on python: ``>=3.12,<4.0``
   :depends on sqlmodel: ``>=0.0.24``

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

    pixi global install grz-db

to add into an existing workspace instead, run::

    pixi add grz-db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grz-db

Alternatively, to install into a new environment, run::

    conda create -n envname grz-db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grz-db:<tag>

(see `grz-db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grz-db| image:: https://img.shields.io/conda/dn/bioconda/grz-db.svg?style=flat
   :target: https://anaconda.org/bioconda/grz-db
   :alt:   (downloads)
.. |docker_grz-db| image:: https://quay.io/repository/biocontainers/grz-db/status
   :target: https://quay.io/repository/biocontainers/grz-db
.. _`grz-db/tags`: https://quay.io/repository/biocontainers/grz-db?tab=tags


.. raw:: html

    <script>
        var package = "grz-db";
        var versions = ["1.2.0","1.1.0","1.0.1","1.0.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grz-db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grz-db/README.html