:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cgen'
.. highlight: bash

bioconductor-cgen
=================

.. conda:recipe:: bioconductor-cgen
   :replaces_section_title:
   :noindex:

   An R package for analysis of case\-control studies in genetic epidemiology

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CGEN.html
   :license: GPL-2 + file LICENSE
   :recipe: /`bioconductor-cgen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cgen/meta.yaml>`_

   This is a package for analysis of case\-control data in genetic epidemiology. It provides a set of statistical methods for evaluating gene\-environment \(or gene\-genes\) interactions under multiplicative and additive risk models\, with or without assuming gene\-environment \(or gene\-gene\) independence in the underlying population.


.. conda:package:: bioconductor-cgen

   |downloads_bioconductor-cgen| |docker_bioconductor-cgen|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.46.0-0</code>,  <code>3.42.0-0</code>,  <code>3.38.0-1</code>,  <code>3.38.0-0</code>,  <code>3.36.1-0</code>,  <code>3.34.0-1</code>,  <code>3.34.0-0</code>,  <code>3.30.0-2</code>,  <code>3.30.0-1</code>,  </span></summary>
      

      ``3.46.0-0``,  ``3.42.0-0``,  ``3.38.0-1``,  ``3.38.0-0``,  ``3.36.1-0``,  ``3.34.0-1``,  ``3.34.0-0``,  ``3.30.0-2``,  ``3.30.0-1``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.23.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=14.3.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mvtnorm: 
   :depends on r-survival: 

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

    pixi global install bioconductor-cgen

to add into an existing workspace instead, run::

    pixi add bioconductor-cgen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cgen

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cgen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cgen:<tag>

(see `bioconductor-cgen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cgen| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cgen.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cgen
   :alt:   (downloads)
.. |docker_bioconductor-cgen| image:: https://quay.io/repository/biocontainers/bioconductor-cgen/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cgen
.. _`bioconductor-cgen/tags`: https://quay.io/repository/biocontainers/bioconductor-cgen?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cgen";
        var versions = ["3.46.0","3.42.0","3.38.0","3.38.0","3.36.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cgen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cgen/README.html