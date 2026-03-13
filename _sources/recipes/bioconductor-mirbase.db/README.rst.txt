:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbase.db'
.. highlight: bash

bioconductor-mirbase.db
=======================

.. conda:recipe:: bioconductor-mirbase.db
   :replaces_section_title:
   :noindex:

   miRBase\: the microRNA database

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/mirbase.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-mirbase.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbase.db/meta.yaml>`_

   miRBase\: the microRNA database assembled using data from miRBase \(http\:\/\/www.mirbase.org\/\).


.. conda:package:: bioconductor-mirbase.db

   |downloads_bioconductor-mirbase.db| |docker_bioconductor-mirbase.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-13</code>,  <code>1.2.0-12</code>,  <code>1.2.0-11</code>,  <code>1.2.0-10</code>,  <code>1.2.0-9</code>,  <code>1.2.0-8</code>,  <code>1.2.0-7</code>,  <code>1.2.0-6</code>,  <code>1.2.0-5</code>,  </span></summary>
      

      ``1.2.0-13``,  ``1.2.0-12``,  ``1.2.0-11``,  ``1.2.0-10``,  ``1.2.0-9``,  ``1.2.0-8``,  ``1.2.0-7``,  ``1.2.0-6``,  ``1.2.0-5``,  ``1.2.0-4``,  ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-data-packages: ``>=20241103``
   :depends on curl: 
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install bioconductor-mirbase.db

to add into an existing workspace instead, run::

    pixi add bioconductor-mirbase.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirbase.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirbase.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirbase.db:<tag>

(see `bioconductor-mirbase.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirbase.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbase.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbase.db
   :alt:   (downloads)
.. |docker_bioconductor-mirbase.db| image:: https://quay.io/repository/biocontainers/bioconductor-mirbase.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbase.db
.. _`bioconductor-mirbase.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbase.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirbase.db";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbase.db/README.html