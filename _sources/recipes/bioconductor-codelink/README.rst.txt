:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-codelink'
.. highlight: bash

bioconductor-codelink
=====================

.. conda:recipe:: bioconductor-codelink
   :replaces_section_title:
   :noindex:

   Manipulation of Codelink microarray data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/codelink.html
   :license: GPL-2
   :recipe: /`bioconductor-codelink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codelink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-codelink/meta.yaml>`_
   :links: biotools: :biotools:`codelink`

   This package facilitates reading\, preprocessing and manipulating Codelink microarray data. The raw data must be exported as text file using the Codelink software.


.. conda:package:: bioconductor-codelink

   |downloads_bioconductor-codelink| |docker_bioconductor-codelink|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.78.0-0</code>,  <code>1.74.0-0</code>,  <code>1.70.0-0</code>,  <code>1.68.0-0</code>,  <code>1.66.0-0</code>,  <code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.58.0-1</code>,  <code>1.58.0-0</code>,  </span></summary>
      

      ``1.78.0-0``,  ``1.74.0-0``,  ``1.70.0-0``,  ``1.68.0-0``,  ``1.66.0-0``,  ``1.62.0-0``,  ``1.60.0-0``,  ``1.58.0-1``,  ``1.58.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
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

    pixi global install bioconductor-codelink

to add into an existing workspace instead, run::

    pixi add bioconductor-codelink

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-codelink

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-codelink

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-codelink:<tag>

(see `bioconductor-codelink/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-codelink| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-codelink.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-codelink
   :alt:   (downloads)
.. |docker_bioconductor-codelink| image:: https://quay.io/repository/biocontainers/bioconductor-codelink/status
   :target: https://quay.io/repository/biocontainers/bioconductor-codelink
.. _`bioconductor-codelink/tags`: https://quay.io/repository/biocontainers/bioconductor-codelink?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-codelink";
        var versions = ["1.78.0","1.74.0","1.70.0","1.68.0","1.66.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-codelink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-codelink/README.html