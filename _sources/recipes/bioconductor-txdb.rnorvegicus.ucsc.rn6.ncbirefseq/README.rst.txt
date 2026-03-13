:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq'
.. highlight: bash

bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
=================================================

.. conda:recipe:: bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
   :replaces_section_title:
   :noindex:

   Annotation package for TxDb object\(s\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/TxDb.Rnorvegicus.UCSC.rn6.ncbiRefSeq.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/meta.yaml>`_

   Exposes an annotation databases generated from UCSC by exposing these as TxDb objects


.. conda:package:: bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

   |downloads_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| |docker_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.12.0-9</code>,  <code>3.12.0-8</code>,  <code>3.12.0-7</code>,  <code>3.12.0-6</code>,  <code>3.12.0-5</code>,  <code>3.12.0-4</code>,  <code>3.12.0-3</code>,  <code>3.12.0-2</code>,  <code>3.12.0-1</code>,  </span></summary>
      

      ``3.12.0-9``,  ``3.12.0-8``,  ``3.12.0-7``,  ``3.12.0-6``,  ``3.12.0-5``,  ``3.12.0-4``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
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

    pixi global install bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

to add into an existing workspace instead, run::

    pixi add bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq:<tag>

(see `bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
   :alt:   (downloads)
.. |docker_bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq| image:: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq
.. _`bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/tags`: https://quay.io/repository/biocontainers/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq";
        var versions = ["3.12.0","3.12.0","3.12.0","3.12.0","3.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txdb.rnorvegicus.ucsc.rn6.ncbirefseq/README.html