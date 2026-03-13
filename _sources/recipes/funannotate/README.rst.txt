:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funannotate'
.. highlight: bash

funannotate
===========

.. conda:recipe:: funannotate
   :replaces_section_title:
   :noindex:

   funannotate\: eukaryotic genome annotation pipeline.

   :homepage: https://github.com/nextgenusfs/funannotate
   :documentation: https://funannotate.readthedocs.io/en/latest
   
   :license: BSD / BSD-2-Clause
   :recipe: /`funannotate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funannotate/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.1134477`, biotools: :biotools:`funannotate`, usegalaxy-eu: :usegalaxy-eu:`funannotate_compare`, usegalaxy-eu: :usegalaxy-eu:`funannotate_clean`, usegalaxy-eu: :usegalaxy-eu:`funannotate_predict`, usegalaxy-eu: :usegalaxy-eu:`funannotate_annotate`

   


.. conda:package:: funannotate

   |downloads_funannotate| |docker_funannotate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.17-5</code>,  <code>1.8.17-4</code>,  <code>1.8.17-3</code>,  <code>1.8.17-2</code>,  <code>1.8.17-1</code>,  <code>1.8.17-0</code>,  <code>1.8.15-2</code>,  <code>1.8.15-1</code>,  <code>1.8.15-0</code>,  </span></summary>
      

      ``1.8.17-5``,  ``1.8.17-4``,  ``1.8.17-3``,  ``1.8.17-2``,  ``1.8.17-1``,  ``1.8.17-0``,  ``1.8.15-2``,  ``1.8.15-1``,  ``1.8.15-0``,  ``1.8.13-0``,  ``1.8.11-0``,  ``1.8.9-3``,  ``1.8.9-2``,  ``1.8.9-1``,  ``1.8.9-0``,  ``1.8.7-0``,  ``1.8.5-1``,  ``1.8.5-0``,  ``1.8.3-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.7.4-1``,  ``1.7.4-0``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on augustus: ``3.5.0``
   :depends on bamtools: ``!=2.5.2``
   :depends on bedtools: 
   :depends on biopython: ``<1.80``
   :depends on blast: 
   :depends on codingquarry: 
   :depends on diamond: 
   :depends on distro: 
   :depends on ete3: 
   :depends on evidencemodeler: ``1.1.1.*``
   :depends on exonerate: 
   :depends on fasta3: 
   :depends on glimmerhmm: 
   :depends on goatools: 
   :depends on hisat2: 
   :depends on hmmer: 
   :depends on kallisto: ``>=0.46.0,<0.46.2``
   :depends on mafft: ``>=7``
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on natsort: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pasa: 
   :depends on perl: 
   :depends on perl-clone: 
   :depends on perl-db_file: 
   :depends on perl-dbd-mysql: 
   :depends on perl-hash-merge: 
   :depends on perl-json: 
   :depends on perl-local-lib: 
   :depends on perl-logger-simple: 
   :depends on perl-math-utils: 
   :depends on perl-mce: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-scalar-util-numeric: 
   :depends on perl-soap-lite: 
   :depends on perl-text-soundex: 
   :depends on phyml: 
   :depends on pigz: 
   :depends on proteinortho: 
   :depends on psutil: 
   :depends on python: ``>=3.6,<3.12``
   :depends on raxml: 
   :depends on requests: 
   :depends on salmon: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on setuptools: ``<81``
   :depends on snap: 
   :depends on stringtie: 
   :depends on tantan: 
   :depends on tbl2asn: 
   :depends on trimal: 
   :depends on trimmomatic: 
   :depends on trinity: 
   :depends on trnascan-se: 
   :depends on ucsc-blat: 
   :depends on ucsc-pslcdnafilter: 

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

    pixi global install funannotate

to add into an existing workspace instead, run::

    pixi add funannotate

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install funannotate

Alternatively, to install into a new environment, run::

    conda create -n envname funannotate

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/funannotate:<tag>

(see `funannotate/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_funannotate| image:: https://img.shields.io/conda/dn/bioconda/funannotate.svg?style=flat
   :target: https://anaconda.org/bioconda/funannotate
   :alt:   (downloads)
.. |docker_funannotate| image:: https://quay.io/repository/biocontainers/funannotate/status
   :target: https://quay.io/repository/biocontainers/funannotate
.. _`funannotate/tags`: https://quay.io/repository/biocontainers/funannotate?tab=tags


.. raw:: html

    <script>
        var package = "funannotate";
        var versions = ["1.8.17","1.8.17","1.8.17","1.8.17","1.8.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funannotate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funannotate/README.html