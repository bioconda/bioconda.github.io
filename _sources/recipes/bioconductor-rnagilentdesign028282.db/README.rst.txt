:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnagilentdesign028282.db'
.. highlight: bash

bioconductor-rnagilentdesign028282.db
=====================================

.. conda:recipe:: bioconductor-rnagilentdesign028282.db
   :replaces_section_title:
   :noindex:

   Agilent Chips that use Agilent design number 028282 annotation data \(chip RnAgilentDesign028282\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/RnAgilentDesign028282.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rnagilentdesign028282.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnagilentdesign028282.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnagilentdesign028282.db/meta.yaml>`_

   Agilent Chips that use Agilent design number 028282 annotation data \(chip RnAgilentDesign028282\) assembled using data from public repositories


.. conda:package:: bioconductor-rnagilentdesign028282.db

   |downloads_bioconductor-rnagilentdesign028282.db| |docker_bioconductor-rnagilentdesign028282.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-14</code>,  <code>3.2.3-13</code>,  <code>3.2.3-12</code>,  <code>3.2.3-11</code>,  <code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  </span></summary>
      

      ``3.2.3-14``,  ``3.2.3-13``,  ``3.2.3-12``,  ``3.2.3-11``,  ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
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

    pixi global install bioconductor-rnagilentdesign028282.db

to add into an existing workspace instead, run::

    pixi add bioconductor-rnagilentdesign028282.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rnagilentdesign028282.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rnagilentdesign028282.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rnagilentdesign028282.db:<tag>

(see `bioconductor-rnagilentdesign028282.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rnagilentdesign028282.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnagilentdesign028282.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnagilentdesign028282.db
   :alt:   (downloads)
.. |docker_bioconductor-rnagilentdesign028282.db| image:: https://quay.io/repository/biocontainers/bioconductor-rnagilentdesign028282.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnagilentdesign028282.db
.. _`bioconductor-rnagilentdesign028282.db/tags`: https://quay.io/repository/biocontainers/bioconductor-rnagilentdesign028282.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnagilentdesign028282.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnagilentdesign028282.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnagilentdesign028282.db/README.html