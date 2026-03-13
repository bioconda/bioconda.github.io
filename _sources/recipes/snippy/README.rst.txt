:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snippy'
.. highlight: bash

snippy
======

.. conda:recipe:: snippy
   :replaces_section_title:
   :noindex:

   Rapid bacterial SNP calling and core genome alignments

   :homepage: https://github.com/tseemann/snippy
   :license: GPL / GPL-2.0
   :recipe: /`snippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snippy/meta.yaml>`_
   :links: biotools: :biotools:`snippy`, usegalaxy-eu: :usegalaxy-eu:`snippy`

   


.. conda:package:: snippy

   |downloads_snippy| |docker_snippy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.6.0-6</code>,  <code>4.6.0-5</code>,  <code>4.6.0-4</code>,  <code>4.6.0-3</code>,  <code>4.6.0-2</code>,  <code>4.6.0-1</code>,  <code>4.6.0-0</code>,  <code>4.5.1-0</code>,  <code>4.5.0-0</code>,  </span></summary>
      

      ``4.6.0-6``,  ``4.6.0-5``,  ``4.6.0-4``,  ``4.6.0-3``,  ``4.6.0-2``,  ``4.6.0-1``,  ``4.6.0-0``,  ``4.5.1-0``,  ``4.5.0-0``,  ``4.4.5-1``,  ``4.4.5-0``,  ``4.4.3-1``,  ``4.4.3-0``,  ``4.4.1-0``,  ``4.4.0-2``,  ``4.4.0-1``,  ``4.4.0-0``,  ``4.3.6-0``,  ``4.3.5-0``,  ``4.3.3-0``,  ``4.2.3-0``,  ``4.1.0-0``,  ``4.0.7-0``,  ``4.0.5-0``,  ``4.0.2-0``,  ``3.2-1``,  ``3.1-4``,  ``3.1-3``,  ``3.1-2``,  ``3.1-1``,  ``3.1-0``,  ``3.0-1``,  ``3.0-0``,  ``2.9-1``,  ``2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on any2fasta: ``>=0.4``
   :depends on bcftools: ``>=1.10``
   :depends on bedtools: ``>=2.28.0``
   :depends on bwa: ``>=0.7.17``
   :depends on freebayes: ``>=1.3.1``
   :depends on minimap2: ``>=2.17``
   :depends on openjdk: ``>=11``
   :depends on parallel: ``>=20170422``
   :depends on perl: 
   :depends on perl-bioperl: ``>=1.7.2``
   :depends on samclip: ``>=0.4``
   :depends on samtools: ``>=1.10,<=1.20``
   :depends on seqtk: ``>=1.3``
   :depends on snp-sites: ``>=2.4``
   :depends on snpeff: ``>=4.3,<=5.0``
   :depends on tabixpp: ``1.1.0.*``
   :depends on vcflib: ``>=1.0.0_rc3,<=1.0.2``
   :depends on vt: ``>=0.5772,<2015``

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

    pixi global install snippy

to add into an existing workspace instead, run::

    pixi add snippy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snippy

Alternatively, to install into a new environment, run::

    conda create -n envname snippy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snippy:<tag>

(see `snippy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snippy| image:: https://img.shields.io/conda/dn/bioconda/snippy.svg?style=flat
   :target: https://anaconda.org/bioconda/snippy
   :alt:   (downloads)
.. |docker_snippy| image:: https://quay.io/repository/biocontainers/snippy/status
   :target: https://quay.io/repository/biocontainers/snippy
.. _`snippy/tags`: https://quay.io/repository/biocontainers/snippy?tab=tags


.. raw:: html

    <script>
        var package = "snippy";
        var versions = ["4.6.0","4.6.0","4.6.0","4.6.0","4.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snippy/README.html