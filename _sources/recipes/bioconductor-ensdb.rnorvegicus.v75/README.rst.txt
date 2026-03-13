:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ensdb.rnorvegicus.v75'
.. highlight: bash

bioconductor-ensdb.rnorvegicus.v75
==================================

.. conda:recipe:: bioconductor-ensdb.rnorvegicus.v75
   :replaces_section_title:
   :noindex:

   Ensembl based annotation package

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/EnsDb.Rnorvegicus.v75.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ensdb.rnorvegicus.v75 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.rnorvegicus.v75>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ensdb.rnorvegicus.v75/meta.yaml>`_

   Exposes an annotation databases generated from Ensembl.


.. conda:package:: bioconductor-ensdb.rnorvegicus.v75

   |downloads_bioconductor-ensdb.rnorvegicus.v75| |docker_bioconductor-ensdb.rnorvegicus.v75|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.99.0-14</code>,  <code>2.99.0-13</code>,  <code>2.99.0-12</code>,  <code>2.99.0-11</code>,  <code>2.99.0-10</code>,  <code>2.99.0-9</code>,  <code>2.99.0-8</code>,  <code>2.99.0-7</code>,  <code>2.99.0-6</code>,  </span></summary>
      

      ``2.99.0-14``,  ``2.99.0-13``,  ``2.99.0-12``,  ``2.99.0-11``,  ``2.99.0-10``,  ``2.99.0-9``,  ``2.99.0-8``,  ``2.99.0-7``,  ``2.99.0-6``,  ``2.99.0-5``,  ``2.99.0-4``,  ``2.99.0-3``,  ``2.99.0-2``,  ``2.99.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
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

    pixi global install bioconductor-ensdb.rnorvegicus.v75

to add into an existing workspace instead, run::

    pixi add bioconductor-ensdb.rnorvegicus.v75

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ensdb.rnorvegicus.v75

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ensdb.rnorvegicus.v75

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ensdb.rnorvegicus.v75:<tag>

(see `bioconductor-ensdb.rnorvegicus.v75/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ensdb.rnorvegicus.v75| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ensdb.rnorvegicus.v75.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ensdb.rnorvegicus.v75
   :alt:   (downloads)
.. |docker_bioconductor-ensdb.rnorvegicus.v75| image:: https://quay.io/repository/biocontainers/bioconductor-ensdb.rnorvegicus.v75/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ensdb.rnorvegicus.v75
.. _`bioconductor-ensdb.rnorvegicus.v75/tags`: https://quay.io/repository/biocontainers/bioconductor-ensdb.rnorvegicus.v75?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ensdb.rnorvegicus.v75";
        var versions = ["2.99.0","2.99.0","2.99.0","2.99.0","2.99.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ensdb.rnorvegicus.v75/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ensdb.rnorvegicus.v75/README.html