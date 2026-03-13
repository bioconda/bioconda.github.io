:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dragonflye'
.. highlight: bash

dragonflye
==========

.. conda:recipe:: dragonflye
   :replaces_section_title:
   :noindex:

   Microbial assembly pipeline for Nanopore reads

   :homepage: https://github.com/rpetit3/dragonflye
   :license: GPL2
   :recipe: /`dragonflye <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragonflye>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dragonflye/meta.yaml>`_
   :links: biotools: :biotools:`dragonflye`, usegalaxy-eu: :usegalaxy-eu:`dragonflye`

   


.. conda:package:: dragonflye

   |downloads_dragonflye| |docker_dragonflye|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.1-0</code>,  <code>1.2.0-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.14-0</code>,  <code>1.0.13-0</code>,  <code>1.0.12-0</code>,  <code>1.0.11-0</code>,  </span></summary>
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on any2fasta: ``>=0.4.2``
   :depends on assembly-scan: ``>=1.0.0``
   :depends on bwa: 
   :depends on dnaapler: 
   :depends on fastp: 
   :depends on flye: ``>=2.9.2``
   :depends on kmc: ``>=3.1``
   :depends on medaka: ``>=1.11.0``
   :depends on miniasm: ``>=0.3_r179``
   :depends on nanoq: ``>=0.10.0``
   :depends on perl: ``>=5.26``
   :depends on perl-file-spec: 
   :depends on perl-findbin: 
   :depends on pigz: ``>=2.6``
   :depends on pilon: 
   :depends on polypolish: ``>=0.6.0``
   :depends on porechop: 
   :depends on racon: ``>=1.5.0``
   :depends on rasusa: ``>=1.0.0``
   :depends on raven-assembler: ``>=1.8.3``
   :depends on samclip: 
   :depends on samtools: 
   :depends on seqtk: ``>=1.4``

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

    pixi global install dragonflye

to add into an existing workspace instead, run::

    pixi add dragonflye

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dragonflye

Alternatively, to install into a new environment, run::

    conda create -n envname dragonflye

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dragonflye:<tag>

(see `dragonflye/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dragonflye| image:: https://img.shields.io/conda/dn/bioconda/dragonflye.svg?style=flat
   :target: https://anaconda.org/bioconda/dragonflye
   :alt:   (downloads)
.. |docker_dragonflye| image:: https://quay.io/repository/biocontainers/dragonflye/status
   :target: https://quay.io/repository/biocontainers/dragonflye
.. _`dragonflye/tags`: https://quay.io/repository/biocontainers/dragonflye?tab=tags


.. raw:: html

    <script>
        var package = "dragonflye";
        var versions = ["1.2.1","1.2.0","1.1.2","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dragonflye/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dragonflye/README.html