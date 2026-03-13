:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pasa'
.. highlight: bash

pasa
====

.. conda:recipe:: pasa
   :replaces_section_title:
   :noindex:

   PASA\, acronym for Program to Assemble Spliced Alignments \(and pronounced \'pass\-uh\'\)\, is a eukaryotic genome annotation tool that exploits spliced alignments of expressed transcript sequences to automatically model gene structures\, and to maintain gene structure annotation consistent with the most recently available experimental sequence data. PASA also identifies and classifies all splicing variations supported by the transcript alignments.

   :homepage: https://github.com/PASApipeline/PASApipeline
   :documentation: https://github.com/PASApipeline/PASApipeline/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`pasa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pasa/meta.yaml>`_
   :links: biotools: :biotools:`PASA`, doi: :doi:`10.1093/nar/gkg770`, doi: :doi:`10.1186/gb-2008-9-1-r7`

   


.. conda:package:: pasa

   |downloads_pasa| |docker_pasa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.3-2</code>,  <code>2.5.3-1</code>,  <code>2.5.3-0</code>,  <code>2.5.2-3</code>,  <code>2.5.2-2</code>,  <code>2.5.2-1</code>,  <code>2.5.2-0</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  </span></summary>
      

      ``2.5.3-2``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.5.2-3``,  ``2.5.2-2``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on cdbtools: 
   :depends on fasta3: ``>=36.3.8i``
   :depends on gmap: ``>=2023.10.10``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on lighttpd: 
   :depends on minimap2: ``>=2.22``
   :depends on pblat: ``>=2.5``
   :depends on perl: 
   :depends on perl-cgi: 
   :depends on perl-db_file: 
   :depends on perl-dbd-sqlite: 
   :depends on perl-uri: 
   :depends on r-base: 
   :depends on samtools: 
   :depends on slclust: 
   :depends on transdecoder: 
   :depends on ucsc-blat: 

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

    pixi global install pasa

to add into an existing workspace instead, run::

    pixi add pasa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pasa

Alternatively, to install into a new environment, run::

    conda create -n envname pasa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pasa:<tag>

(see `pasa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pasa| image:: https://img.shields.io/conda/dn/bioconda/pasa.svg?style=flat
   :target: https://anaconda.org/bioconda/pasa
   :alt:   (downloads)
.. |docker_pasa| image:: https://quay.io/repository/biocontainers/pasa/status
   :target: https://quay.io/repository/biocontainers/pasa
.. _`pasa/tags`: https://quay.io/repository/biocontainers/pasa?tab=tags


.. raw:: html

    <script>
        var package = "pasa";
        var versions = ["2.5.3","2.5.3","2.5.3","2.5.2","2.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pasa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pasa/README.html