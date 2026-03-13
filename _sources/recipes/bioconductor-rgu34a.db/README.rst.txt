:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgu34a.db'
.. highlight: bash

bioconductor-rgu34a.db
======================

.. conda:recipe:: bioconductor-rgu34a.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix RG\_U34A Array annotation data \(chip rgu34a\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/rgu34a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rgu34a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34a.db/meta.yaml>`_

   Affymetrix Affymetrix RG\_U34A Array annotation data \(chip rgu34a\) assembled using data from public repositories


.. conda:package:: bioconductor-rgu34a.db

   |downloads_bioconductor-rgu34a.db| |docker_bioconductor-rgu34a.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-6</code>,  <code>3.13.0-5</code>,  <code>3.13.0-4</code>,  <code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  </span></summary>
      

      ``3.13.0-6``,  ``3.13.0-5``,  ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.rn.eg.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-rgu34a.db

to add into an existing workspace instead, run::

    pixi add bioconductor-rgu34a.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rgu34a.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rgu34a.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rgu34a.db:<tag>

(see `bioconductor-rgu34a.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rgu34a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgu34a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgu34a.db
   :alt:   (downloads)
.. |docker_bioconductor-rgu34a.db| image:: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db
.. _`bioconductor-rgu34a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rgu34a.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgu34a.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgu34a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgu34a.db/README.html