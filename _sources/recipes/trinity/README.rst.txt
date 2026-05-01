:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinity'
.. highlight: bash

trinity
=======

.. conda:recipe:: trinity
   :replaces_section_title:
   :noindex:

   Trinity assembles transcript sequences from Illumina RNA\-Seq data.

   :homepage: https://github.com/trinityrnaseq/trinityrnaseq
   :documentation: https://github.com/trinityrnaseq/trinityrnaseq/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`trinity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity/meta.yaml>`_
   :links: biotools: :biotools:`trinity`, usegalaxy-eu: :usegalaxy-eu:`trinity`, doi: :doi:`10.1038/nbt.1883`, doi: :doi:`10.1038/nprot.2013.084`

   


.. conda:package:: trinity

   |downloads_trinity| |docker_trinity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.15.2-6</code>,  <code>2.15.2-5</code>,  <code>2.15.2-4</code>,  <code>2.15.2-3</code>,  <code>2.15.2-2</code>,  <code>2.15.2-1</code>,  <code>2.15.2-0</code>,  <code>2.15.1-4</code>,  <code>2.15.1-3</code>,  </span></summary>
      

      ``2.15.2-6``,  ``2.15.2-5``,  ``2.15.2-4``,  ``2.15.2-3``,  ``2.15.2-2``,  ``2.15.2-1``,  ``2.15.2-0``,  ``2.15.1-4``,  ``2.15.1-3``,  ``2.15.1-2``,  ``2.15.1-1``,  ``2.15.1-0``,  ``2.13.2-4``,  ``2.13.2-3``,  ``2.13.2-2``,  ``2.13.2-1``,  ``2.13.2-0``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.5-5``,  ``2.8.5-4``,  ``2.8.5-3``,  ``2.8.5-2``,  ``2.8.5-1``,  ``2.8.5-0``,  ``2.8.4-1``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.6.6-2``,  ``2.6.6-1``,  ``2.6.6-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-6``,  ``date.2011_11_26-8``,  ``date.2011_11_26-7``,  ``date.2011_11_26-6``,  ``date.2011_11_26-5``,  ``date.2011_11_26-4``,  ``date.2011_11_26-3``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bioconductor-ctc: 
   :depends on bioconductor-dexseq: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-go.db: 
   :depends on bioconductor-goseq: 
   :depends on bioconductor-qvalue: 
   :depends on bowtie2: ``>=2.3.0``
   :depends on coreutils: 
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on kallisto: 
   :depends on kmer-jellyfish: ``>=2.3``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on openjdk: ``>=17``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-db_file: 
   :depends on python: ``>=3.7``
   :depends on r-ape: 
   :depends on r-argparse: 
   :depends on r-base: 
   :depends on r-cluster: 
   :depends on r-fastcluster: 
   :depends on r-gplots: 
   :depends on r-phangorn: 
   :depends on r-sm: 
   :depends on r-tidyverse: 
   :depends on r-vioplot: 
   :depends on salmon: 
   :depends on samtools: ``>=1.14``
   :depends on trimmomatic: ``>=0.39``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install trinity

to add into an existing workspace instead, run::

    pixi add trinity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trinity

Alternatively, to install into a new environment, run::

    conda create -n envname trinity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trinity:<tag>

(see `trinity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trinity| image:: https://img.shields.io/conda/dn/bioconda/trinity.svg?style=flat
   :target: https://anaconda.org/bioconda/trinity
   :alt:   (downloads)
.. |docker_trinity| image:: https://quay.io/repository/biocontainers/trinity/status
   :target: https://quay.io/repository/biocontainers/trinity
.. _`trinity/tags`: https://quay.io/repository/biocontainers/trinity?tab=tags


.. raw:: html

    <script>
        var package = "trinity";
        var versions = ["2.15.2","2.15.2","2.15.2","2.15.2","2.15.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinity/README.html