:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapfabia'
.. highlight: bash

bioconductor-hapfabia
=====================

.. conda:recipe:: bioconductor-hapfabia
   :replaces_section_title:
   :noindex:

   hapFabia\: Identification of very short segments of identity by descent \(IBD\) characterized by rare variants in large sequencing data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hapFabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-hapfabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia/meta.yaml>`_
   :links: biotools: :biotools:`hapfabia`

   A package to identify very short IBD segments in large sequencing data by FABIA biclustering. Two haplotypes are identical by descent \(IBD\) if they share a segment that both inherited from a common ancestor. Current IBD methods reliably detect long IBD segments because many minor alleles in the segment are concordant between the two haplotypes. However\, many cohort studies contain unrelated individuals which share only short IBD segments. This package provides software to identify short IBD segments in sequencing data. Knowledge of short IBD segments are relevant for phasing of genotyping data\, association studies\, and for population genetics\, where they shed light on the evolutionary history of humans. The package supports VCF formats\, is based on sparse matrix operations\, and provides visualization of haplotype clusters in different formats.


.. conda:package:: bioconductor-hapfabia

   |downloads_bioconductor-hapfabia| |docker_bioconductor-hapfabia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.36.0-2</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.36.0-2``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-fabia: ``>=2.56.0,<2.57.0``
   :depends on bioconductor-fabia: ``>=2.56.0,<2.57.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
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

    pixi global install bioconductor-hapfabia

to add into an existing workspace instead, run::

    pixi add bioconductor-hapfabia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hapfabia

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hapfabia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hapfabia:<tag>

(see `bioconductor-hapfabia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hapfabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapfabia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapfabia
   :alt:   (downloads)
.. |docker_bioconductor-hapfabia| image:: https://quay.io/repository/biocontainers/bioconductor-hapfabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapfabia
.. _`bioconductor-hapfabia/tags`: https://quay.io/repository/biocontainers/bioconductor-hapfabia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapfabia";
        var versions = ["1.52.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html