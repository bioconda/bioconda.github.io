:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spechla'
.. highlight: bash

spechla
=======

.. conda:recipe:: spechla
   :replaces_section_title:
   :noindex:

   Full\-resolution HLA typing from sequencing data

   :homepage: https://github.com/deepomicslab/SpecHLA
   :license: MIT / MIT
   :recipe: /`spechla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spechla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spechla/meta.yaml>`_

   SpecHLA enables full\-resolution HLA typing from various sequencing
   data types including WGS\, WES\, RNA\-seq\, and long\-read sequencing.



.. conda:package:: spechla

   |downloads_spechla| |docker_spechla|

   :versions:
      
      

      ``1.0.10-0``

      

   
   :depends on arpack: ``>=3.9.1,<3.10.0a0 nompi_*``
   :depends on bamutil: 
   :depends on bcftools: 
   :depends on bedtools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on blat: 
   :depends on bowtie2: ``>=2.5.5,<3.0a0``
   :depends on bwa: 
   :depends on fermikit: 
   :depends on freebayes: 
   :depends on htslib: ``>=1.23,<2.0a0``
   :depends on k8: 
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on longshot: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on parallel: 
   :depends on pbmm2: 
   :depends on pbsv: 
   :depends on perl: 
   :depends on perl-findbin: 
   :depends on perl-getopt-long: 
   :depends on pulp: 
   :depends on pysam: 
   :depends on python: ``>=3.12,<3.13.0a0``
   :depends on python-edlib: 
   :depends on python_abi: ``3.12.* *_cp312``
   :depends on pyvcf3: 
   :depends on samtools: ``>=1.13``
   :depends on scipy: 
   :depends on trinity: 

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

    pixi global install spechla

to add into an existing workspace instead, run::

    pixi add spechla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spechla

Alternatively, to install into a new environment, run::

    conda create -n envname spechla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spechla:<tag>

(see `spechla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spechla| image:: https://img.shields.io/conda/dn/bioconda/spechla.svg?style=flat
   :target: https://anaconda.org/bioconda/spechla
   :alt:   (downloads)
.. |docker_spechla| image:: https://quay.io/repository/biocontainers/spechla/status
   :target: https://quay.io/repository/biocontainers/spechla
.. _`spechla/tags`: https://quay.io/repository/biocontainers/spechla?tab=tags


.. raw:: html

    <script>
        var package = "spechla";
        var versions = ["1.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spechla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spechla/README.html