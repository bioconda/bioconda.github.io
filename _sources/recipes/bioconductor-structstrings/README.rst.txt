:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-structstrings'
.. highlight: bash

bioconductor-structstrings
==========================

.. conda:recipe:: bioconductor-structstrings
   :replaces_section_title:
   :noindex:

   Implementation of the dot bracket annotations with Biostrings

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Structstrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-structstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-structstrings/meta.yaml>`_

   The Structstrings package implements the widely used dot bracket annotation for storing base pairing information in structured RNA. Structstrings uses the infrastructure provided by the Biostrings package and derives the DotBracketString and related classes from the BString class. From these\, base pair tables can be produced for in depth analysis. In addition\, the loop indices of the base pairs can be retrieved as well. For better efficiency\, information conversion is implemented in C\, inspired to a large extend by the ViennaRNA package.


.. conda:package:: bioconductor-structstrings

   |downloads_bioconductor-structstrings| |docker_bioconductor-structstrings|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-crayon: 
   :depends on r-stringi: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-structstrings

to add into an existing workspace instead, run::

    pixi add bioconductor-structstrings

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-structstrings

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-structstrings

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-structstrings:<tag>

(see `bioconductor-structstrings/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-structstrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-structstrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-structstrings
   :alt:   (downloads)
.. |docker_bioconductor-structstrings| image:: https://quay.io/repository/biocontainers/bioconductor-structstrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-structstrings
.. _`bioconductor-structstrings/tags`: https://quay.io/repository/biocontainers/bioconductor-structstrings?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-structstrings";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-structstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-structstrings/README.html