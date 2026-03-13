:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dazz_db'
.. highlight: bash

dazz_db
=======

.. conda:recipe:: dazz_db
   :replaces_section_title:
   :noindex:

   DAZZ\_DB\: The Dazzler Data Base

   :homepage: https://github.com/thegenemyers/DAZZ_DB
   :license: Custom
   :recipe: /`dazz_db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dazz_db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dazz_db/meta.yaml>`_

   


.. conda:package:: dazz_db

   |downloads_dazz_db| |docker_dazz_db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-0</code>,  <code>1.0p2-8</code>,  <code>1.0p2-7</code>,  <code>1.0p2-6</code>,  <code>1.0p2-5</code>,  <code>1.0p2-4</code>,  <code>1.0p2-3</code>,  <code>1.0p2-2</code>,  <code>1.0p2-1</code>,  </span></summary>
      

      ``1.0-0``,  ``1.0p2-8``,  ``1.0p2-7``,  ``1.0p2-6``,  ``1.0p2-5``,  ``1.0p2-4``,  ``1.0p2-3``,  ``1.0p2-2``,  ``1.0p2-1``,  ``1.0p2-0``,  ``1.0p1-1``,  ``1.0p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: 

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

    pixi global install dazz_db

to add into an existing workspace instead, run::

    pixi add dazz_db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dazz_db

Alternatively, to install into a new environment, run::

    conda create -n envname dazz_db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dazz_db:<tag>

(see `dazz_db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dazz_db| image:: https://img.shields.io/conda/dn/bioconda/dazz_db.svg?style=flat
   :target: https://anaconda.org/bioconda/dazz_db
   :alt:   (downloads)
.. |docker_dazz_db| image:: https://quay.io/repository/biocontainers/dazz_db/status
   :target: https://quay.io/repository/biocontainers/dazz_db
.. _`dazz_db/tags`: https://quay.io/repository/biocontainers/dazz_db?tab=tags


.. raw:: html

    <script>
        var package = "dazz_db";
        var versions = ["1.0","1.0p2","1.0p2","1.0p2","1.0p2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dazz_db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dazz_db/README.html