:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phenix'
.. highlight: bash

phenix
======

.. conda:recipe:: phenix
   :replaces_section_title:
   :noindex:

   Public Health England SNP calling pipeline

   :homepage: https://github.com/phe-bioinformatics/PHEnix
   :license: GPL3
   :recipe: /`phenix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phenix/meta.yaml>`_
   :links: biotools: :biotools:`phenix`

   


.. conda:package:: phenix

   |downloads_phenix| |docker_phenix|

   :versions:
      
      

      ``1.4.1a-2``,  ``1.4.1a-1``,  ``1.4.1a-0``

      

   
   :depends on argparse: 
   :depends on bcftools: 
   :depends on bintrees: 
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on gatk: 
   :depends on matplotlib: 
   :depends on matplotlib-venn: 
   :depends on numpy: 
   :depends on picard: 
   :depends on psycopg2: 
   :depends on pysam: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27m``
   :depends on pyvcf: 
   :depends on pyyaml: 
   :depends on samtools: 

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

    pixi global install phenix

to add into an existing workspace instead, run::

    pixi add phenix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phenix

Alternatively, to install into a new environment, run::

    conda create -n envname phenix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phenix:<tag>

(see `phenix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phenix| image:: https://img.shields.io/conda/dn/bioconda/phenix.svg?style=flat
   :target: https://anaconda.org/bioconda/phenix
   :alt:   (downloads)
.. |docker_phenix| image:: https://quay.io/repository/biocontainers/phenix/status
   :target: https://quay.io/repository/biocontainers/phenix
.. _`phenix/tags`: https://quay.io/repository/biocontainers/phenix?tab=tags


.. raw:: html

    <script>
        var package = "phenix";
        var versions = ["1.4.1a","1.4.1a","1.4.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phenix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phenix/README.html