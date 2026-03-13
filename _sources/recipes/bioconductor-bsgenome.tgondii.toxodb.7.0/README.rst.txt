:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.tgondii.toxodb.7.0'
.. highlight: bash

bioconductor-bsgenome.tgondii.toxodb.7.0
========================================

.. conda:recipe:: bioconductor-bsgenome.tgondii.toxodb.7.0
   :replaces_section_title:
   :noindex:

   Toxoplasma gondii ME49 \(ToxoDB\-7.0\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Tgondii.ToxoDB.7.0.html
   :license: GPL 3
   :recipe: /`bioconductor-bsgenome.tgondii.toxodb.7.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/meta.yaml>`_

   Toxoplasma gondii ME49 genome Release 7.0 available at http\:\/\/www.toxodb.org


.. conda:package:: bioconductor-bsgenome.tgondii.toxodb.7.0

   |downloads_bioconductor-bsgenome.tgondii.toxodb.7.0| |docker_bioconductor-bsgenome.tgondii.toxodb.7.0|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.99.1-7</code>,  <code>0.99.1-6</code>,  <code>0.99.1-5</code>,  <code>0.99.1-4</code>,  <code>0.99.1-3</code>,  <code>0.99.1-2</code>,  <code>0.99.1-1</code>,  <code>0.99.1-0</code>,  <code>0.99.0-4</code>,  </span></summary>
      

      ``0.99.1-7``,  ``0.99.1-6``,  ``0.99.1-5``,  ``0.99.1-4``,  ``0.99.1-3``,  ``0.99.1-2``,  ``0.99.1-1``,  ``0.99.1-0``,  ``0.99.0-4``,  ``0.99.0-3``,  ``0.99.0-2``,  ``0.99.0-0``

      
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

    pixi global install bioconductor-bsgenome.tgondii.toxodb.7.0

to add into an existing workspace instead, run::

    pixi add bioconductor-bsgenome.tgondii.toxodb.7.0

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bsgenome.tgondii.toxodb.7.0

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bsgenome.tgondii.toxodb.7.0

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0:<tag>

(see `bioconductor-bsgenome.tgondii.toxodb.7.0/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bsgenome.tgondii.toxodb.7.0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.tgondii.toxodb.7.0.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.tgondii.toxodb.7.0
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.tgondii.toxodb.7.0| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0
.. _`bioconductor-bsgenome.tgondii.toxodb.7.0/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.tgondii.toxodb.7.0?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.tgondii.toxodb.7.0";
        var versions = ["0.99.1","0.99.1","0.99.1","0.99.1","0.99.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.tgondii.toxodb.7.0/README.html