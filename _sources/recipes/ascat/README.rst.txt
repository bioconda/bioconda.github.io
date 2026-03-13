:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ascat'
.. highlight: bash

ascat
=====

.. conda:recipe:: ascat
   :replaces_section_title:
   :noindex:

   ASCAT is a method to derive copy number profiles of tumour cells\,
   accounting for normal cell admixture and tumour aneuploidy \(Figure 1\).
   ASCAT infers tumour purity \(the fraction of tumour cells\) and ploidy \(the
   amount of DNA per tumour cell\, expressed as multiples of haploid genomes\)
   from SNP array or massively parallel sequencing data\, and calculates
   whole\-genome allele\-specific copy number profiles \(the number of copies of
   both parental alleles for all SNP loci across the genome\).


   :homepage: https://www.crick.ac.uk/research/a-z-researchers/researchers-v-y/peter-van-loo/software
   :documentation: https://github.com/VanLoo-lab/ascat/blob/v3.2.0/README.md
   
   :developer docs: https://github.com/Crick-CancerGenomics/ascat
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`ascat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ascat/meta.yaml>`_
   :links: biotools: :biotools:`ascat`, doi: :doi:`10.1073/pnas.1009843107`

   


.. conda:package:: ascat

   |downloads_ascat| |docker_ascat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.1-1</code>,  <code>3.1.1-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.5.2-4</code>,  <code>2.5.2-3</code>,  <code>2.5.2-2</code>,  </span></summary>
      

      ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.5.2-4``,  ``2.5.2-3``,  ``2.5.2-2``,  ``2.5.2-1``,  ``2.5.2-0``,  ``2.5.1-2``,  ``2.5.1-0``,  ``2.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-r.devices: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 

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

    pixi global install ascat

to add into an existing workspace instead, run::

    pixi add ascat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ascat

Alternatively, to install into a new environment, run::

    conda create -n envname ascat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ascat:<tag>

(see `ascat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ascat| image:: https://img.shields.io/conda/dn/bioconda/ascat.svg?style=flat
   :target: https://anaconda.org/bioconda/ascat
   :alt:   (downloads)
.. |docker_ascat| image:: https://quay.io/repository/biocontainers/ascat/status
   :target: https://quay.io/repository/biocontainers/ascat
.. _`ascat/tags`: https://quay.io/repository/biocontainers/ascat?tab=tags


.. raw:: html

    <script>
        var package = "ascat";
        var versions = ["3.2.0","3.2.0","3.1.1","3.1.1","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ascat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ascat/README.html