:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-do.db'
.. highlight: bash

bioconductor-do.db
==================

.. conda:recipe:: bioconductor-do.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps describing the entire Disease Ontology

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/DO.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-do.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-do.db/meta.yaml>`_

   A set of annotation maps describing the entire Disease Ontology assembled using data from DO


.. conda:package:: bioconductor-do.db

   |downloads_bioconductor-do.db| |docker_bioconductor-do.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.9-18</code>,  <code>2.9-17</code>,  <code>2.9-16</code>,  <code>2.9-15</code>,  <code>2.9-14</code>,  <code>2.9-13</code>,  <code>2.9-12</code>,  <code>2.9-11</code>,  <code>2.9-10</code>,  </span></summary>
      

      ``2.9-18``,  ``2.9-17``,  ``2.9-16``,  ``2.9-15``,  ``2.9-14``,  ``2.9-13``,  ``2.9-12``,  ``2.9-11``,  ``2.9-10``,  ``2.9-9``,  ``2.9-8``,  ``2.9-7``,  ``2.9-6``,  ``2.9-4``,  ``2.9-3``,  ``2.9-1``,  ``2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-do.db

to add into an existing workspace instead, run::

    pixi add bioconductor-do.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-do.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-do.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-do.db:<tag>

(see `bioconductor-do.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-do.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-do.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-do.db
   :alt:   (downloads)
.. |docker_bioconductor-do.db| image:: https://quay.io/repository/biocontainers/bioconductor-do.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-do.db
.. _`bioconductor-do.db/tags`: https://quay.io/repository/biocontainers/bioconductor-do.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-do.db";
        var versions = ["2.9","2.9","2.9","2.9","2.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-do.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-do.db/README.html