:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ag.db'
.. highlight: bash

bioconductor-ag.db
==================

.. conda:recipe:: bioconductor-ag.db
   :replaces_section_title:
   :noindex:

   Affymetrix Affymetrix AG Array annotation data \(chip ag\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ag.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ag.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ag.db/meta.yaml>`_

   Affymetrix Affymetrix AG Array annotation data \(chip ag\) assembled using data from public repositories


.. conda:package:: bioconductor-ag.db

   |downloads_bioconductor-ag.db| |docker_bioconductor-ag.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.13.0-6</code>,  <code>3.13.0-5</code>,  <code>3.13.0-4</code>,  <code>3.13.0-3</code>,  <code>3.13.0-2</code>,  <code>3.13.0-1</code>,  <code>3.13.0-0</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  </span></summary>
      

      ``3.13.0-6``,  ``3.13.0-5``,  ``3.13.0-4``,  ``3.13.0-3``,  ``3.13.0-2``,  ``3.13.0-1``,  ``3.13.0-0``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-1``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.at.tair.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-ag.db

to add into an existing workspace instead, run::

    pixi add bioconductor-ag.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ag.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ag.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ag.db:<tag>

(see `bioconductor-ag.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ag.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ag.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ag.db
   :alt:   (downloads)
.. |docker_bioconductor-ag.db| image:: https://quay.io/repository/biocontainers/bioconductor-ag.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ag.db
.. _`bioconductor-ag.db/tags`: https://quay.io/repository/biocontainers/bioconductor-ag.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ag.db";
        var versions = ["3.13.0","3.13.0","3.13.0","3.13.0","3.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ag.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ag.db/README.html