:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hs.mirna'
.. highlight: bash

bioconductor-rmir.hs.mirna
==========================

.. conda:recipe:: bioconductor-rmir.hs.mirna
   :replaces_section_title:
   :noindex:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/RmiR.Hs.miRNA.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hs.mirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna/meta.yaml>`_

   Various databases of microRNA Targets


.. conda:package:: bioconductor-rmir.hs.mirna

   |downloads_bioconductor-rmir.hs.mirna| |docker_bioconductor-rmir.hs.mirna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-17</code>,  <code>1.0.7-16</code>,  <code>1.0.7-15</code>,  <code>1.0.7-14</code>,  <code>1.0.7-13</code>,  <code>1.0.7-12</code>,  <code>1.0.7-11</code>,  <code>1.0.7-10</code>,  <code>1.0.7-9</code>,  </span></summary>
      

      ``1.0.7-17``,  ``1.0.7-16``,  ``1.0.7-15``,  ``1.0.7-14``,  ``1.0.7-13``,  ``1.0.7-12``,  ``1.0.7-11``,  ``1.0.7-10``,  ``1.0.7-9``,  ``1.0.7-8``,  ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-0``

      
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

    pixi global install bioconductor-rmir.hs.mirna

to add into an existing workspace instead, run::

    pixi add bioconductor-rmir.hs.mirna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rmir.hs.mirna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rmir.hs.mirna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rmir.hs.mirna:<tag>

(see `bioconductor-rmir.hs.mirna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rmir.hs.mirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hs.mirna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir.hs.mirna
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hs.mirna| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna
.. _`bioconductor-rmir.hs.mirna/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmir.hs.mirna";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html