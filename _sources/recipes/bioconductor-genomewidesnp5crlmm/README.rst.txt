:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomewidesnp5crlmm'
.. highlight: bash

bioconductor-genomewidesnp5crlmm
================================

.. conda:recipe:: bioconductor-genomewidesnp5crlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/genomewidesnp5Crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomewidesnp5crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp5crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomewidesnp5crlmm/meta.yaml>`_

   Package with metadata for fast genotyping Affymetrix GenomeWideSnp\_5 arrays using the \'crlmm\' package. Annotation build is hg19.


.. conda:package:: bioconductor-genomewidesnp5crlmm

   |downloads_bioconductor-genomewidesnp5crlmm| |docker_bioconductor-genomewidesnp5crlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-14</code>,  <code>1.0.6-13</code>,  <code>1.0.6-12</code>,  <code>1.0.6-11</code>,  <code>1.0.6-10</code>,  <code>1.0.6-9</code>,  <code>1.0.6-8</code>,  <code>1.0.6-7</code>,  <code>1.0.6-6</code>,  </span></summary>
      

      ``1.0.6-14``,  ``1.0.6-13``,  ``1.0.6-12``,  ``1.0.6-11``,  ``1.0.6-10``,  ``1.0.6-9``,  ``1.0.6-8``,  ``1.0.6-7``,  ``1.0.6-6``,  ``1.0.6-5``,  ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``

      
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

    pixi global install bioconductor-genomewidesnp5crlmm

to add into an existing workspace instead, run::

    pixi add bioconductor-genomewidesnp5crlmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomewidesnp5crlmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomewidesnp5crlmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomewidesnp5crlmm:<tag>

(see `bioconductor-genomewidesnp5crlmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomewidesnp5crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomewidesnp5crlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomewidesnp5crlmm
   :alt:   (downloads)
.. |docker_bioconductor-genomewidesnp5crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm
.. _`bioconductor-genomewidesnp5crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-genomewidesnp5crlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomewidesnp5crlmm";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomewidesnp5crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomewidesnp5crlmm/README.html