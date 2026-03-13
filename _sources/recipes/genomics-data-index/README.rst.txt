:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomics-data-index'
.. highlight: bash

genomics-data-index
===================

.. conda:recipe:: genomics-data-index
   :replaces_section_title:
   :noindex:

   Indexes genomics data \(nucleotide variants\, kmers\, MLST\) for fast querying of features.

   :homepage: https://github.com/apetkau/genomics-data-index
   :license: Apache-2.0
   :recipe: /`genomics-data-index <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomics-data-index>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomics-data-index/meta.yaml>`_

   


.. conda:package:: genomics-data-index

   |downloads_genomics-data-index| |docker_genomics-data-index|

   :versions:
      
      

      ``0.9.2-0``

      

   
   :depends on bamtools: 
   :depends on bcftools: ``>=1.13``
   :depends on bedtools: 
   :depends on biocommons.seqrepo: 
   :depends on biopython: ``>=1.70``
   :depends on click: 
   :depends on click-config-file: 
   :depends on coloredlogs: 
   :depends on ete3: 
   :depends on fasttree: 
   :depends on htslib: ``>=1.13``
   :depends on iqtree: 
   :depends on jinja2: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pandas: ``>=1.0.0``
   :depends on pathvalidate: 
   :depends on pybedtools: 
   :depends on pymysql: 
   :depends on pyqt: 
   :depends on pyroaring: 
   :depends on pytest: 
   :depends on python: ``>=3.8,<3.10``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on requests-html: 
   :depends on samtools: ``>=1.13``
   :depends on scikit-bio: 
   :depends on scipy: ``<1.9``
   :depends on snakemake: 
   :depends on snpeff: 
   :depends on sourmash: 
   :depends on sqlalchemy: 
   :depends on vcfpy: 
   :depends on zipp: 

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

    pixi global install genomics-data-index

to add into an existing workspace instead, run::

    pixi add genomics-data-index

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genomics-data-index

Alternatively, to install into a new environment, run::

    conda create -n envname genomics-data-index

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genomics-data-index:<tag>

(see `genomics-data-index/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genomics-data-index| image:: https://img.shields.io/conda/dn/bioconda/genomics-data-index.svg?style=flat
   :target: https://anaconda.org/bioconda/genomics-data-index
   :alt:   (downloads)
.. |docker_genomics-data-index| image:: https://quay.io/repository/biocontainers/genomics-data-index/status
   :target: https://quay.io/repository/biocontainers/genomics-data-index
.. _`genomics-data-index/tags`: https://quay.io/repository/biocontainers/genomics-data-index?tab=tags


.. raw:: html

    <script>
        var package = "genomics-data-index";
        var versions = ["0.9.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomics-data-index/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomics-data-index/README.html