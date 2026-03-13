:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-modstrings'
.. highlight: bash

bioconductor-modstrings
=======================

.. conda:recipe:: bioconductor-modstrings
   :replaces_section_title:
   :noindex:

   Working with modified nucleotide sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Modstrings.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-modstrings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modstrings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-modstrings/meta.yaml>`_

   Representing nucleotide modifications in a nucleotide sequence is usually done via special characters from a number of sources. This represents a challenge to work with in R and the Biostrings package. The Modstrings package implements this functionallity for RNA and DNA sequences containing modified nucleotides by translating the character internally in order to work with the infrastructure of the Biostrings package. For this the ModRNAString and ModDNAString classes and derivates and functions to construct and modify these objects despite the encoding issues are implemenented. In addition the conversion from sequences to list like location information \(and the reverse operation\) is implemented as well.


.. conda:package:: bioconductor-modstrings

   |downloads_bioconductor-modstrings| |docker_bioconductor-modstrings|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
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

    pixi global install bioconductor-modstrings

to add into an existing workspace instead, run::

    pixi add bioconductor-modstrings

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-modstrings

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-modstrings

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-modstrings:<tag>

(see `bioconductor-modstrings/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-modstrings| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-modstrings.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-modstrings
   :alt:   (downloads)
.. |docker_bioconductor-modstrings| image:: https://quay.io/repository/biocontainers/bioconductor-modstrings/status
   :target: https://quay.io/repository/biocontainers/bioconductor-modstrings
.. _`bioconductor-modstrings/tags`: https://quay.io/repository/biocontainers/bioconductor-modstrings?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-modstrings";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-modstrings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-modstrings/README.html