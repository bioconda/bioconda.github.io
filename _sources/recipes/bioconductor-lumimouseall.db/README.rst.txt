:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lumimouseall.db'
.. highlight: bash

bioconductor-lumimouseall.db
============================

.. conda:recipe:: bioconductor-lumimouseall.db
   :replaces_section_title:
   :noindex:

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/lumiMouseAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumimouseall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumimouseall.db/meta.yaml>`_

   Illumina Mouse Illumina expression annotation data \(chip lumiMouseAll\) assembled using data from public repositories


.. conda:package:: bioconductor-lumimouseall.db

   |downloads_bioconductor-lumimouseall.db| |docker_bioconductor-lumimouseall.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-14</code>,  <code>1.22.0-13</code>,  <code>1.22.0-12</code>,  <code>1.22.0-11</code>,  <code>1.22.0-10</code>,  <code>1.22.0-9</code>,  <code>1.22.0-8</code>,  <code>1.22.0-7</code>,  <code>1.22.0-6</code>,  </span></summary>
      

      ``1.22.0-14``,  ``1.22.0-13``,  ``1.22.0-12``,  ``1.22.0-11``,  ``1.22.0-10``,  ``1.22.0-9``,  ``1.22.0-8``,  ``1.22.0-7``,  ``1.22.0-6``,  ``1.22.0-5``,  ``1.22.0-4``,  ``1.22.0-3``,  ``1.22.0-2``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-lumimouseall.db

to add into an existing workspace instead, run::

    pixi add bioconductor-lumimouseall.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lumimouseall.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lumimouseall.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lumimouseall.db:<tag>

(see `bioconductor-lumimouseall.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lumimouseall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumimouseall.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lumimouseall.db
   :alt:   (downloads)
.. |docker_bioconductor-lumimouseall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db
.. _`bioconductor-lumimouseall.db/tags`: https://quay.io/repository/biocontainers/bioconductor-lumimouseall.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lumimouseall.db";
        var versions = ["1.22.0","1.22.0","1.22.0","1.22.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumimouseall.db/README.html