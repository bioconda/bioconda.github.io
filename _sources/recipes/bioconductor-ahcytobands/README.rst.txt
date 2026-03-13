:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ahcytobands'
.. highlight: bash

bioconductor-ahcytobands
========================

.. conda:recipe:: bioconductor-ahcytobands
   :replaces_section_title:
   :noindex:

   CytoBands for AnnotationHub

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/AHCytoBands.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ahcytobands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ahcytobands/meta.yaml>`_

   Supplies AnnotationHub with CytoBand information from UCSC. There is a track for each major organism. Giemsa\-stained bands are commonly used to decorate chromosomal overviews in visualizations of genomic data.


.. conda:package:: bioconductor-ahcytobands

   |downloads_bioconductor-ahcytobands| |docker_bioconductor-ahcytobands|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-6</code>,  <code>0.99.1-5</code>,  <code>0.99.1-4</code>,  <code>0.99.1-3</code>,  <code>0.99.1-2</code>,  <code>0.99.1-1</code>,  <code>0.99.1-0</code>,  <code>0.99.0-7</code>,  <code>0.99.0-6</code>,  </span></summary>
      

      ``0.99.1-6``,  ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-1``,  ``0.99.1-0``,  ``0.99.0-7``,  ``0.99.0-6``,  ``0.99.0-5``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-1``,  ``0.99.0-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bioconductor-ahcytobands

to add into an existing workspace instead, run::

    pixi add bioconductor-ahcytobands

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ahcytobands

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ahcytobands

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ahcytobands:<tag>

(see `bioconductor-ahcytobands/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ahcytobands| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ahcytobands.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ahcytobands
   :alt:   (downloads)
.. |docker_bioconductor-ahcytobands| image:: https://quay.io/repository/biocontainers/bioconductor-ahcytobands/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ahcytobands
.. _`bioconductor-ahcytobands/tags`: https://quay.io/repository/biocontainers/bioconductor-ahcytobands?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ahcytobands";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ahcytobands/README.html