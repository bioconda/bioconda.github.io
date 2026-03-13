:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.athaliana.tair.04232008'
.. highlight: bash

bioconductor-bsgenome.athaliana.tair.04232008
=============================================

.. conda:recipe:: bioconductor-bsgenome.athaliana.tair.04232008
   :replaces_section_title:
   :noindex:

   Full genome sequences for Arabidopsis thaliana \(TAIR version from April 23\, 2008\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Athaliana.TAIR.04232008.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.athaliana.tair.04232008 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.athaliana.tair.04232008>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.athaliana.tair.04232008/meta.yaml>`_

   Full genome sequences for Arabidopsis thaliana as provided by TAIR \(snapshot from April 23\, 2008\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.athaliana.tair.04232008

   |downloads_bioconductor-bsgenome.athaliana.tair.04232008| |docker_bioconductor-bsgenome.athaliana.tair.04232008|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1000-14</code>,  <code>1.3.1000-13</code>,  <code>1.3.1000-12</code>,  <code>1.3.1000-11</code>,  <code>1.3.1000-10</code>,  <code>1.3.1000-9</code>,  <code>1.3.1000-8</code>,  <code>1.3.1000-7</code>,  <code>1.3.1000-6</code>,  </span></summary>
      

      ``1.3.1000-14``,  ``1.3.1000-13``,  ``1.3.1000-12``,  ``1.3.1000-11``,  ``1.3.1000-10``,  ``1.3.1000-9``,  ``1.3.1000-8``,  ``1.3.1000-7``,  ``1.3.1000-6``,  ``1.3.1000-5``,  ``1.3.1000-4``,  ``1.3.1000-3``,  ``1.3.1000-2``,  ``1.3.1000-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
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

    pixi global install bioconductor-bsgenome.athaliana.tair.04232008

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.athaliana.tair.04232008

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.athaliana.tair.04232008

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.athaliana.tair.04232008

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.athaliana.tair.04232008:<tag>

(see `bioconductor-bsgenome.athaliana.tair.04232008/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.athaliana.tair.04232008| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.athaliana.tair.04232008.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.athaliana.tair.04232008
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.athaliana.tair.04232008| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.04232008/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.04232008
.. _`bioconductor-bsgenome.athaliana.tair.04232008/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.athaliana.tair.04232008?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.athaliana.tair.04232008";
        var versions = ["1.3.1000","1.3.1000","1.3.1000","1.3.1000","1.3.1000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.athaliana.tair.04232008/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.athaliana.tair.04232008/README.html