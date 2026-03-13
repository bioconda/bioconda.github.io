:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polap'
.. highlight: bash

polap
=====

.. conda:recipe:: polap
   :replaces_section_title:
   :noindex:

   POLAP\: plant organelle long\-read assembly pipeline

   :homepage: https://github.com/goshng/polap
   :documentation: https://goshng.github.io/polap/polap.html
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`polap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polap/meta.yaml>`_

   


.. conda:package:: polap

   |downloads_polap| |docker_polap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.3.1-0</code>,  <code>0.4.3.7.9-0</code>,  <code>0.4.3.7.8-0</code>,  <code>0.4.3.7.7-0</code>,  <code>0.4.3.7.6-1</code>,  <code>0.4.3.7.6-0</code>,  <code>0.4.3.7.5-3</code>,  <code>0.4.3.7.5-1</code>,  <code>0.4.3.7.5-0</code>,  </span></summary>
      

      ``0.5.3.1-0``,  ``0.4.3.7.9-0``,  ``0.4.3.7.8-0``,  ``0.4.3.7.7-0``,  ``0.4.3.7.6-1``,  ``0.4.3.7.6-0``,  ``0.4.3.7.5-3``,  ``0.4.3.7.5-1``,  ``0.4.3.7.5-0``,  ``0.4.3.7.4-0``,  ``0.4.3.7.3-0``,  ``0.4.3.7.2-0``,  ``0.4.3.7-1``,  ``0.4.3.7-0``,  ``0.4.1.1-0``,  ``0.3.7.3-1``,  ``0.3.7.3-0``,  ``0.3.7.2-0``,  ``0.3.7.1-0``,  ``0.3.7-1``,  ``0.3.7-0``,  ``0.2.6-0``,  ``0.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on assembly-stats: 
   :depends on bedtools: 
   :depends on bioawk: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-ggtree: 
   :depends on blast: 
   :depends on clustalw: 
   :depends on csvtk: 
   :depends on entrez-direct: 
   :depends on flye: ``>=2.9.6``
   :depends on getorganelle: 
   :depends on gfastats: 
   :depends on gfatools: 
   :depends on icu: 
   :depends on kmer-jellyfish: 
   :depends on libxml2: 
   :depends on mafft: 
   :depends on minimap2: ``>=2.28``
   :depends on networkx: 
   :depends on newick_utils: 
   :depends on orthofinder: 
   :depends on pandas: 
   :depends on pandoc: 
   :depends on parallel: 
   :depends on perl: 
   :depends on perl-xml-libxml: 
   :depends on progressivemauve: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on r-optparse: 
   :depends on r-readr: 
   :depends on r-rgbif: 
   :depends on r-stringr: 
   :depends on r-taxize: 
   :depends on r-tidyr: 
   :depends on samtools: 
   :depends on seqkit: 
   :depends on seqtk: 
   :depends on sra-tools: 

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

    pixi global install polap

to add into an existing workspace instead, run::

    pixi add polap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install polap

Alternatively, to install into a new environment, run::

    conda create -n envname polap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/polap:<tag>

(see `polap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_polap| image:: https://img.shields.io/conda/dn/bioconda/polap.svg?style=flat
   :target: https://anaconda.org/bioconda/polap
   :alt:   (downloads)
.. |docker_polap| image:: https://quay.io/repository/biocontainers/polap/status
   :target: https://quay.io/repository/biocontainers/polap
.. _`polap/tags`: https://quay.io/repository/biocontainers/polap?tab=tags


.. raw:: html

    <script>
        var package = "polap";
        var versions = ["0.5.3.1","0.4.3.7.9","0.4.3.7.8","0.4.3.7.7","0.4.3.7.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polap/README.html