:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirnatap.db'
.. highlight: bash

bioconductor-mirnatap.db
========================

.. conda:recipe:: bioconductor-mirnatap.db
   :replaces_section_title:
   :noindex:

   Data for miRNAtap

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/miRNAtap.db.html
   :license: GPL-2
   :recipe: /`bioconductor-mirnatap.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnatap.db/meta.yaml>`_

   This package holds the database for miRNAtap.


.. conda:package:: bioconductor-mirnatap.db

   |downloads_bioconductor-mirnatap.db| |docker_bioconductor-mirnatap.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.10-17</code>,  <code>0.99.10-16</code>,  <code>0.99.10-15</code>,  <code>0.99.10-14</code>,  <code>0.99.10-13</code>,  <code>0.99.10-12</code>,  <code>0.99.10-11</code>,  <code>0.99.10-10</code>,  <code>0.99.10-9</code>,  </span></summary>
      

      ``0.99.10-17``,  ``0.99.10-16``,  ``0.99.10-15``,  ``0.99.10-14``,  ``0.99.10-13``,  ``0.99.10-12``,  ``0.99.10-11``,  ``0.99.10-10``,  ``0.99.10-9``,  ``0.99.10-8``,  ``0.99.10-7``,  ``0.99.10-6``,  ``0.99.10-5``,  ``0.99.10-3``,  ``0.99.10-2``,  ``0.99.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-mirnatap: ``>=1.44.0,<1.45.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-mirnatap.db

to add into an existing workspace instead, run::

    pixi add bioconductor-mirnatap.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirnatap.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirnatap.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirnatap.db:<tag>

(see `bioconductor-mirnatap.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirnatap.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnatap.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirnatap.db
   :alt:   (downloads)
.. |docker_bioconductor-mirnatap.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db
.. _`bioconductor-mirnatap.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirnatap.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirnatap.db";
        var versions = ["0.99.10","0.99.10","0.99.10","0.99.10","0.99.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnatap.db/README.html