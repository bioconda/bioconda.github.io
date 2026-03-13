:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gep2pep'
.. highlight: bash

bioconductor-gep2pep
====================

.. conda:recipe:: bioconductor-gep2pep
   :replaces_section_title:
   :noindex:

   Creation and Analysis of Pathway Expression Profiles \(PEPs\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/gep2pep.html
   :license: GPL-3
   :recipe: /`bioconductor-gep2pep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gep2pep/meta.yaml>`_

   Pathway Expression Profiles \(PEPs\) are based on the expression of pathways \(defined as sets of genes\) as opposed to individual genes. This package converts gene expression profiles to PEPs and performs enrichment analysis of both pathways and experimental conditions\, such as \"drug set enrichment analysis\" and \"gene2drug\" drug discovery analysis respectively.


.. conda:package:: bioconductor-gep2pep

   |downloads_bioconductor-gep2pep| |docker_bioconductor-gep2pep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-digest: 
   :depends on r-foreach: 
   :depends on r-iterators: 
   :depends on r-repo: ``>=2.1.1``
   :depends on r-xml: 

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

    pixi global install bioconductor-gep2pep

to add into an existing workspace instead, run::

    pixi add bioconductor-gep2pep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gep2pep

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gep2pep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gep2pep:<tag>

(see `bioconductor-gep2pep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gep2pep| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gep2pep.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gep2pep
   :alt:   (downloads)
.. |docker_bioconductor-gep2pep| image:: https://quay.io/repository/biocontainers/bioconductor-gep2pep/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gep2pep
.. _`bioconductor-gep2pep/tags`: https://quay.io/repository/biocontainers/bioconductor-gep2pep?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gep2pep";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gep2pep/README.html