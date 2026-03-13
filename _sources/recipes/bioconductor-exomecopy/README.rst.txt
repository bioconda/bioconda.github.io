:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-exomecopy'
.. highlight: bash

bioconductor-exomecopy
======================

.. conda:recipe:: bioconductor-exomecopy
   :replaces_section_title:
   :noindex:

   Copy number variant detection from exome sequencing read depth

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/exomeCopy.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-exomecopy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomecopy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-exomecopy/meta.yaml>`_
   :links: biotools: :biotools:`exomecopy`, doi: :doi:`10.2202/1544-6115.1732`

   Detection of copy number variants \(CNV\) from exome sequencing samples\, including unpaired samples.  The package implements a hidden Markov model which uses positional covariates\, such as background read depth and GC\-content\, to simultaneously normalize and segment the samples into regions of constant copy count.


.. conda:package:: bioconductor-exomecopy

   |downloads_bioconductor-exomecopy| |docker_bioconductor-exomecopy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-1</code>,  <code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends on bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends on bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on r-base: ``>=4.3,<4.4.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-exomecopy

to add into an existing workspace instead, run::

    pixi add bioconductor-exomecopy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-exomecopy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-exomecopy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-exomecopy:<tag>

(see `bioconductor-exomecopy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-exomecopy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-exomecopy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-exomecopy
   :alt:   (downloads)
.. |docker_bioconductor-exomecopy| image:: https://quay.io/repository/biocontainers/bioconductor-exomecopy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-exomecopy
.. _`bioconductor-exomecopy/tags`: https://quay.io/repository/biocontainers/bioconductor-exomecopy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-exomecopy";
        var versions = ["1.48.0","1.48.0","1.46.0","1.44.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-exomecopy/README.html