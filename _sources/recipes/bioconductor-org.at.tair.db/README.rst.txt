:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-org.at.tair.db'
.. highlight: bash

bioconductor-org.at.tair.db
===========================

.. conda:recipe:: bioconductor-org.at.tair.db
   :replaces_section_title:
   :noindex:

   Genome wide annotation for Arabidopsis

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/org.At.tair.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-org.at.tair.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.at.tair.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-org.at.tair.db/meta.yaml>`_

   Genome wide annotation for Arabidopsis\, primarily based on mapping using TAIR identifiers.


.. conda:package:: bioconductor-org.at.tair.db

   |downloads_bioconductor-org.at.tair.db| |docker_bioconductor-org.at.tair.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.22.0-0</code>,  <code>3.20.0-0</code>,  <code>3.18.0-0</code>,  <code>3.17.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.13.0-0</code>,  <code>3.12.0-1</code>,  </span></summary>
      

      ``3.22.0-0``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.17.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.13.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-0``,  ``3.10.0-0``,  ``3.8.2-1``,  ``3.7.0-0``

      
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

    pixi global install bioconductor-org.at.tair.db

to add into an existing workspace instead, run::

    pixi add bioconductor-org.at.tair.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-org.at.tair.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-org.at.tair.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-org.at.tair.db:<tag>

(see `bioconductor-org.at.tair.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-org.at.tair.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-org.at.tair.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-org.at.tair.db
   :alt:   (downloads)
.. |docker_bioconductor-org.at.tair.db| image:: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db
.. _`bioconductor-org.at.tair.db/tags`: https://quay.io/repository/biocontainers/bioconductor-org.at.tair.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-org.at.tair.db";
        var versions = ["3.22.0","3.20.0","3.18.0","3.17.0","3.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-org.at.tair.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-org.at.tair.db/README.html