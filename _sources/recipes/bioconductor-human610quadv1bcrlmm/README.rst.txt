:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-human610quadv1bcrlmm'
.. highlight: bash

bioconductor-human610quadv1bcrlmm
=================================

.. conda:recipe:: bioconductor-human610quadv1bcrlmm
   :replaces_section_title:
   :noindex:

   Metadata for fast genotyping with the \'crlmm\' package

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/human610quadv1bCrlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-human610quadv1bcrlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human610quadv1bcrlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-human610quadv1bcrlmm/meta.yaml>`_

   Package with metadata for genotyping Illumina 610kQuad arrays using the \'crlmm\' package.


.. conda:package:: bioconductor-human610quadv1bcrlmm

   |downloads_bioconductor-human610quadv1bcrlmm| |docker_bioconductor-human610quadv1bcrlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.3-14</code>,  <code>1.0.3-13</code>,  <code>1.0.3-12</code>,  <code>1.0.3-11</code>,  <code>1.0.3-10</code>,  <code>1.0.3-9</code>,  <code>1.0.3-8</code>,  <code>1.0.3-7</code>,  <code>1.0.3-6</code>,  </span></summary>
      

      ``1.0.3-14``,  ``1.0.3-13``,  ``1.0.3-12``,  ``1.0.3-11``,  ``1.0.3-10``,  ``1.0.3-9``,  ``1.0.3-8``,  ``1.0.3-7``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
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

    pixi global install bioconductor-human610quadv1bcrlmm

to add into an existing workspace instead, run::

    pixi add bioconductor-human610quadv1bcrlmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-human610quadv1bcrlmm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-human610quadv1bcrlmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-human610quadv1bcrlmm:<tag>

(see `bioconductor-human610quadv1bcrlmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-human610quadv1bcrlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-human610quadv1bcrlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-human610quadv1bcrlmm
   :alt:   (downloads)
.. |docker_bioconductor-human610quadv1bcrlmm| image:: https://quay.io/repository/biocontainers/bioconductor-human610quadv1bcrlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-human610quadv1bcrlmm
.. _`bioconductor-human610quadv1bcrlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-human610quadv1bcrlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-human610quadv1bcrlmm";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-human610quadv1bcrlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-human610quadv1bcrlmm/README.html