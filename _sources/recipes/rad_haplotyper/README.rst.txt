:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rad_haplotyper'
.. highlight: bash

rad_haplotyper
==============

.. conda:recipe:: rad_haplotyper
   :replaces_section_title:
   :noindex:

   A program for building SNP haplotypes from RAD sequencing data

   :homepage: https://github.com/chollenbeck/rad_haplotyper
   :license: Perl
   :recipe: /`rad_haplotyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rad_haplotyper/meta.yaml>`_

   


.. conda:package:: rad_haplotyper

   |downloads_rad_haplotyper| |docker_rad_haplotyper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.9-8</code>,  <code>1.1.9-7</code>,  <code>1.1.9-6</code>,  <code>1.1.9-5</code>,  <code>1.1.9-4</code>,  <code>1.1.9-3</code>,  <code>1.1.9-2</code>,  <code>1.1.9-1</code>,  <code>1.1.9-0</code>,  </span></summary>
      

      ``1.1.9-8``,  ``1.1.9-7``,  ``1.1.9-6``,  ``1.1.9-5``,  ``1.1.9-4``,  ``1.1.9-3``,  ``1.1.9-2``,  ``1.1.9-1``,  ``1.1.9-0``,  ``1.1.7-0``,  ``1.1.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ddocent: ``>=2.9.8,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-bio-cigar: 
   :depends on perl-bio-samtools: 
   :depends on perl-bioperl: 
   :depends on perl-data-dumper: 
   :depends on perl-getopt-long: ``>=2.58,<3.0a0``
   :depends on perl-list-moreutils: 
   :depends on perl-module-build: ``0.4232.*``
   :depends on perl-parallel-forkmanager: ``>=2.3,<3.0a0``
   :depends on perl-pod-usage: 
   :depends on perl-term-progressbar: 
   :depends on perl-vcftools-vcf: ``<0.700``

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

    pixi global install rad_haplotyper

to add into an existing workspace instead, run::

    pixi add rad_haplotyper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rad_haplotyper

Alternatively, to install into a new environment, run::

    conda create -n envname rad_haplotyper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rad_haplotyper:<tag>

(see `rad_haplotyper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rad_haplotyper| image:: https://img.shields.io/conda/dn/bioconda/rad_haplotyper.svg?style=flat
   :target: https://anaconda.org/bioconda/rad_haplotyper
   :alt:   (downloads)
.. |docker_rad_haplotyper| image:: https://quay.io/repository/biocontainers/rad_haplotyper/status
   :target: https://quay.io/repository/biocontainers/rad_haplotyper
.. _`rad_haplotyper/tags`: https://quay.io/repository/biocontainers/rad_haplotyper?tab=tags


.. raw:: html

    <script>
        var package = "rad_haplotyper";
        var versions = ["1.1.9","1.1.9","1.1.9","1.1.9","1.1.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rad_haplotyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rad_haplotyper/README.html