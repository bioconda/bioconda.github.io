:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-whopgenome'
.. highlight: bash

r-whopgenome
============

.. conda:recipe:: r-whopgenome
   :replaces_section_title:
   :noindex:

   Provides very fast access to whole genome\, population scale variation data from VCF files and sequence data from FASTA\-formatted files. It also reads in alignments from FASTA\, Phylip\, MAF and other file formats. Provides easy\-to\-use interfaces to genome annotation from UCSC and Bioconductor and gene ontology data from AmiGO and is capable to read\, modify and write PLINK .PED\-format pedigree files.

   :homepage: https://CRAN.R-project.org/package=WhopGenome
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-whopgenome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-whopgenome/meta.yaml>`_

   


.. conda:package:: r-whopgenome

   |downloads_r-whopgenome| |docker_r-whopgenome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.7-10</code>,  <code>0.9.7-9</code>,  <code>0.9.7-8</code>,  <code>0.9.7-7</code>,  <code>0.9.7-6</code>,  <code>0.9.7-5</code>,  <code>0.9.7-4</code>,  <code>0.9.7-3</code>,  <code>0.9.7-2</code>,  </span></summary>
      

      ``0.9.7-10``,  ``0.9.7-9``,  ``0.9.7-8``,  ``0.9.7-7``,  ``0.9.7-6``,  ``0.9.7-5``,  ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-1``,  ``0.9.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``

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

    pixi global install r-whopgenome

to add into an existing workspace instead, run::

    pixi add r-whopgenome

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-whopgenome

Alternatively, to install into a new environment, run::

    conda create -n envname r-whopgenome

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-whopgenome:<tag>

(see `r-whopgenome/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-whopgenome| image:: https://img.shields.io/conda/dn/bioconda/r-whopgenome.svg?style=flat
   :target: https://anaconda.org/bioconda/r-whopgenome
   :alt:   (downloads)
.. |docker_r-whopgenome| image:: https://quay.io/repository/biocontainers/r-whopgenome/status
   :target: https://quay.io/repository/biocontainers/r-whopgenome
.. _`r-whopgenome/tags`: https://quay.io/repository/biocontainers/r-whopgenome?tab=tags


.. raw:: html

    <script>
        var package = "r-whopgenome";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-whopgenome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-whopgenome/README.html