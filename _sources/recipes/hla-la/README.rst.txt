:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-la'
.. highlight: bash

hla-la
======

.. conda:recipe:: hla-la
   :replaces_section_title:
   :noindex:

   HLA typing from short and long reads

   :homepage: https://github.com/DiltheyLab/HLA-LA
   :license: GPL
   :recipe: /`hla-la <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-la/meta.yaml>`_
   :links: biotools: :biotools:`hla-la`

   


.. conda:package:: hla-la

   |downloads_hla-la| |docker_hla-la|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  </span></summary>
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``2.5.1``
   :depends on boost-cpp: ``1.74.00``
   :depends on bwa: ``0.7.12``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
   :depends on mummer: 
   :depends on perl-bio-db-hts: ``>=3.1,<4.0a0``
   :depends on perl-bio-featureio: 
   :depends on perl-bioperl: 
   :depends on perl-bioperl-core: ``1.7.8.*``
   :depends on perl-list-moreutils: 
   :depends on perl-text-levenshtein: 
   :depends on picard: 
   :depends on r-base: ``4.*``
   :depends on samtools: ``>=1.10``

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

    pixi global install hla-la

to add into an existing workspace instead, run::

    pixi add hla-la

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hla-la

Alternatively, to install into a new environment, run::

    conda create -n envname hla-la

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hla-la:<tag>

(see `hla-la/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hla-la| image:: https://img.shields.io/conda/dn/bioconda/hla-la.svg?style=flat
   :target: https://anaconda.org/bioconda/hla-la
   :alt:   (downloads)
.. |docker_hla-la| image:: https://quay.io/repository/biocontainers/hla-la/status
   :target: https://quay.io/repository/biocontainers/hla-la
.. _`hla-la/tags`: https://quay.io/repository/biocontainers/hla-la?tab=tags


.. raw:: html

    <script>
        var package = "hla-la";
        var versions = ["1.0.4","1.0.4","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-la/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-la/README.html