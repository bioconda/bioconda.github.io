:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epitxdb.mm.mm10'
.. highlight: bash

bioconductor-epitxdb.mm.mm10
============================

.. conda:recipe:: bioconductor-epitxdb.mm.mm10
   :replaces_section_title:
   :noindex:

   Annotation package for EpiTxDb objects

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/EpiTxDb.Mm.mm10.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epitxdb.mm.mm10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.mm.mm10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epitxdb.mm.mm10/meta.yaml>`_

   Exposes an annotation databases generated from several sources by exposing these as EpiTxDb object. Generated for Mus musculus\/mm10.


.. conda:package:: bioconductor-epitxdb.mm.mm10

   |downloads_bioconductor-epitxdb.mm.mm10| |docker_bioconductor-epitxdb.mm.mm10|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.6-9</code>,  <code>0.99.6-8</code>,  <code>0.99.6-7</code>,  <code>0.99.6-6</code>,  <code>0.99.6-5</code>,  <code>0.99.6-4</code>,  <code>0.99.6-3</code>,  <code>0.99.6-2</code>,  <code>0.99.6-1</code>,  </span></summary>
      

      ``0.99.6-9``,  ``0.99.6-8``,  ``0.99.6-7``,  ``0.99.6-6``,  ``0.99.6-5``,  ``0.99.6-4``,  ``0.99.6-3``,  ``0.99.6-2``,  ``0.99.6-1``,  ``0.99.6-0``,  ``0.99.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-epitxdb: ``>=1.22.0,<1.23.0``
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

    pixi global install bioconductor-epitxdb.mm.mm10

to add into an existing workspace instead, run::

    pixi add bioconductor-epitxdb.mm.mm10

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epitxdb.mm.mm10

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epitxdb.mm.mm10

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epitxdb.mm.mm10:<tag>

(see `bioconductor-epitxdb.mm.mm10/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epitxdb.mm.mm10| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epitxdb.mm.mm10.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epitxdb.mm.mm10
   :alt:   (downloads)
.. |docker_bioconductor-epitxdb.mm.mm10| image:: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10
.. _`bioconductor-epitxdb.mm.mm10/tags`: https://quay.io/repository/biocontainers/bioconductor-epitxdb.mm.mm10?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epitxdb.mm.mm10";
        var versions = ["0.99.6","0.99.6","0.99.6","0.99.6","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epitxdb.mm.mm10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epitxdb.mm.mm10/README.html