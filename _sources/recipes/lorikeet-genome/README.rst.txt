:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lorikeet-genome'
.. highlight: bash

lorikeet-genome
===============

.. conda:recipe:: lorikeet-genome
   :replaces_section_title:
   :noindex:

   Metagenomic Variant Calling \& Diversity Analysis

   :homepage: https://github.com/rhysnewell/Lorikeet
   :documentation: https://rhysnewell.github.io/Lorikeet/
   
   :license: GPL3
   :recipe: /`lorikeet-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lorikeet-genome/meta.yaml>`_

   Lorikeet aims to call variants in metagenomes using local reassembly of haplotypes.


.. conda:package:: lorikeet-genome

   |downloads_lorikeet-genome| |docker_lorikeet-genome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.7.3-1</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-0</code>,  </span></summary>
      

      ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.3-1``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.6-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on bwa: ``>=0.7.17``
   :depends on bwa-mem2: 
   :depends on cmake: ``>=3.21``
   :depends on coreutils: 
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on minimap2: ``>=2.24``
   :depends on numpy: 
   :depends on openssl: ``>=3.5.5,<4.0a0``
   :depends on pip: 
   :depends on polars: ``>=0.18``
   :depends on prodigal: 
   :depends on python: ``3.10``
   :depends on samtools: ``>=1.9``
   :depends on scikit-allel: ``>=1.3.6``
   :depends on scipy: ``>=1.11``
   :depends on svim: 

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

    pixi global install lorikeet-genome

to add into an existing workspace instead, run::

    pixi add lorikeet-genome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lorikeet-genome

Alternatively, to install into a new environment, run::

    conda create -n envname lorikeet-genome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lorikeet-genome:<tag>

(see `lorikeet-genome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lorikeet-genome| image:: https://img.shields.io/conda/dn/bioconda/lorikeet-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/lorikeet-genome
   :alt:   (downloads)
.. |docker_lorikeet-genome| image:: https://quay.io/repository/biocontainers/lorikeet-genome/status
   :target: https://quay.io/repository/biocontainers/lorikeet-genome
.. _`lorikeet-genome/tags`: https://quay.io/repository/biocontainers/lorikeet-genome?tab=tags


.. raw:: html

    <script>
        var package = "lorikeet-genome";
        var versions = ["0.8.2","0.8.2","0.7.3","0.7.3","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lorikeet-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lorikeet-genome/README.html