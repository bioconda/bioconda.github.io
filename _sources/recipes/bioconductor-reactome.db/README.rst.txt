:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reactome.db'
.. highlight: bash

bioconductor-reactome.db
========================

.. conda:recipe:: bioconductor-reactome.db
   :replaces_section_title:
   :noindex:

   A set of annotation maps for reactome

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/reactome.db.html
   :license: CC BY 4.0
   :recipe: /`bioconductor-reactome.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reactome.db/meta.yaml>`_

   A set of annotation maps for reactome assembled using data from reactome. This package has been created by a third\-party developer\, and is not affiliated with the Reactome team.


.. conda:package:: bioconductor-reactome.db

   |downloads_bioconductor-reactome.db| |docker_bioconductor-reactome.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.95.0-0</code>,  <code>1.89.0-0</code>,  <code>1.86.2-0</code>,  <code>1.84.0-0</code>,  <code>1.82.0-0</code>,  <code>1.77.0-1</code>,  <code>1.77.0-0</code>,  <code>1.76.0-0</code>,  <code>1.74.0-1</code>,  </span></summary>
      

      ``1.95.0-0``,  ``1.89.0-0``,  ``1.86.2-0``,  ``1.84.0-0``,  ``1.82.0-0``,  ``1.77.0-1``,  ``1.77.0-0``,  ``1.76.0-0``,  ``1.74.0-1``,  ``1.74.0-0``,  ``1.70.0-1``,  ``1.70.0-0``,  ``1.68.0-1``,  ``1.66.0-0``,  ``1.64.0-0``,  ``1.62.0-0``

      
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

    pixi global install bioconductor-reactome.db

to add into an existing workspace instead, run::

    pixi add bioconductor-reactome.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-reactome.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-reactome.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-reactome.db:<tag>

(see `bioconductor-reactome.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-reactome.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reactome.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reactome.db
   :alt:   (downloads)
.. |docker_bioconductor-reactome.db| image:: https://quay.io/repository/biocontainers/bioconductor-reactome.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reactome.db
.. _`bioconductor-reactome.db/tags`: https://quay.io/repository/biocontainers/bioconductor-reactome.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reactome.db";
        var versions = ["1.95.0","1.89.0","1.86.2","1.84.0","1.82.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reactome.db/README.html