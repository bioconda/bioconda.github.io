:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationdbi'
.. highlight: bash

bioconductor-annotationdbi
==========================

.. conda:recipe:: bioconductor-annotationdbi
   :replaces_section_title:
   :noindex:

   Manipulation of SQLite\-based annotations in Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnnotationDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi/meta.yaml>`_
   :links: biotools: :biotools:`annotationdbi`, doi: :doi:`10.1038/nmeth.3252`

   Implements a user\-friendly interface for querying SQLite\-based annotation data packages.


.. conda:package:: bioconductor-annotationdbi

   |downloads_bioconductor-annotationdbi| |docker_bioconductor-annotationdbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.72.0-0</code>,  <code>1.68.0-0</code>,  <code>1.64.1-0</code>,  <code>1.62.2-0</code>,  <code>1.60.0-0</code>,  <code>1.56.2-0</code>,  <code>1.56.1-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  </span></summary>
      

      ``1.72.0-0``,  ``1.68.0-0``,  ``1.64.1-0``,  ``1.62.2-0``,  ``1.60.0-0``,  ``1.56.2-0``,  ``1.56.1-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.1-0``,  ``1.40.0-0``,  ``1.38.2-0``,  ``1.38.0-0``,  ``1.36.2-0``,  ``1.36.0-1``,  ``1.34.4-1``,  ``1.34.4-0``,  ``1.32.3-0``,  ``1.32.2-0``,  ``1.32.0-0``,  ``1.30.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-annotationdbi

to add into an existing workspace instead, run::

    pixi add bioconductor-annotationdbi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-annotationdbi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-annotationdbi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-annotationdbi:<tag>

(see `bioconductor-annotationdbi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-annotationdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationdbi
   :alt:   (downloads)
.. |docker_bioconductor-annotationdbi| image:: https://quay.io/repository/biocontainers/bioconductor-annotationdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationdbi
.. _`bioconductor-annotationdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationdbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationdbi";
        var versions = ["1.72.0","1.68.0","1.64.1","1.62.2","1.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html