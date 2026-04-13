:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lfa'
.. highlight: bash

bioconductor-lfa
================

.. conda:recipe:: bioconductor-lfa
   :replaces_section_title:
   :noindex:

   Logistic Factor Analysis for Categorical Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lfa.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-lfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lfa/meta.yaml>`_
   :links: biotools: :biotools:`lfa`, doi: :doi:`10.1093/bioinformatics/btv641`

   Logistic Factor Analysis is a method for a PCA analogue on Binomial data via estimation of latent structure in the natural parameter.  The main method estimates genetic population structure from genotype data.  There are also methods for estimating individual\-specific allele frequencies using the population structure.  Lastly\, a structured Hardy\-Weinberg equilibrium \(HWE\) test is developed\, which quantifies the goodness of fit of the genotype data to the estimated population structure\, via the estimated individual\-specific allele frequencies \(all of which generalizes traditional HWE tests\).


.. conda:package:: bioconductor-lfa

   |downloads_bioconductor-lfa| |docker_bioconductor-lfa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.11-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.11-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-rspectra: 

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

    pixi global install bioconductor-lfa

to add into an existing workspace instead, run::

    pixi add bioconductor-lfa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lfa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lfa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lfa:<tag>

(see `bioconductor-lfa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lfa
   :alt:   (downloads)
.. |docker_bioconductor-lfa| image:: https://quay.io/repository/biocontainers/bioconductor-lfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lfa
.. _`bioconductor-lfa/tags`: https://quay.io/repository/biocontainers/bioconductor-lfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lfa";
        var versions = ["2.10.0","2.6.0","2.2.0","2.0.11","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lfa/README.html