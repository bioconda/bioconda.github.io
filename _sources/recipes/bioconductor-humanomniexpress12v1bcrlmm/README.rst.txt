:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanomniexpress12v1bcrlmm'
.. highlight: bash

bioconductor-humanomniexpress12v1bcrlmm
=======================================

.. conda:recipe:: bioconductor-humanomniexpress12v1bcrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/humanomniexpress12v1bCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanomniexpress12v1bcrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomniexpress12v1bcrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanomniexpress12v1bcrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina Omni Express 12 arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-humanomniexpress12v1bcrlmm

   |downloads_bioconductor-humanomniexpress12v1bcrlmm| |docker_bioconductor-humanomniexpress12v1bcrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-14</code>,  <code>1.0.1-13</code>,  <code>1.0.1-12</code>,  <code>1.0.1-11</code>,  <code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  </span></summary>
      

      ``1.0.1-14``,  ``1.0.1-13``,  ``1.0.1-12``,  ``1.0.1-11``,  ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
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

    pixi global install bioconductor-humanomniexpress12v1bcrlmm

to add into an existing workspace instead, run::

    pixi add bioconductor-humanomniexpress12v1bcrlmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-humanomniexpress12v1bcrlmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-humanomniexpress12v1bcrlmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-humanomniexpress12v1bcrlmm:<tag>

(see `bioconductor-humanomniexpress12v1bcrlmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-humanomniexpress12v1bcrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanomniexpress12v1bcrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanomniexpress12v1bcrlmm
   :alt:   (downloads)
.. |docker_bioconductor-humanomniexpress12v1bcrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm
.. _`bioconductor-humanomniexpress12v1bcrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-humanomniexpress12v1bcrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-humanomniexpress12v1bcrlmm";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanomniexpress12v1bcrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanomniexpress12v1bcrlmm/README.html