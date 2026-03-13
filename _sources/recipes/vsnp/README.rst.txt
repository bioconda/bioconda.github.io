:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsnp'
.. highlight: bash

vsnp
====

.. conda:recipe:: vsnp
   :replaces_section_title:
   :noindex:

   Rapidly call\, validate\, and compare SNPs from FASTQ files in a timely manner utilizing large data sets.

   :homepage: https://github.com/USDA-VS/vSNP
   :license: GPL3
   :recipe: /`vsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp/meta.yaml>`_

   


.. conda:package:: vsnp

   |downloads_vsnp| |docker_vsnp|

   :versions:
      
      

      ``2.03-2``,  ``2.03-1``,  ``2.03-0``,  ``0.2.02-0``,  ``0.2.01-0``,  ``0.2.0-0``

      

   
   :depends on abyss: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on dask: 
   :depends on freebayes: 
   :depends on humanize: 
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on picard: 
   :depends on py-cpuinfo: 
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on pyvcf: 
   :depends on raxml: 
   :depends on regex: 
   :depends on samtools: 
   :depends on scikit-allel: 
   :depends on vcflib: 
   :depends on xlrd: 
   :depends on xlsxwriter: 

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

    pixi global install vsnp

to add into an existing workspace instead, run::

    pixi add vsnp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vsnp

Alternatively, to install into a new environment, run::

    conda create -n envname vsnp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vsnp:<tag>

(see `vsnp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vsnp| image:: https://img.shields.io/conda/dn/bioconda/vsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/vsnp
   :alt:   (downloads)
.. |docker_vsnp| image:: https://quay.io/repository/biocontainers/vsnp/status
   :target: https://quay.io/repository/biocontainers/vsnp
.. _`vsnp/tags`: https://quay.io/repository/biocontainers/vsnp?tab=tags


.. raw:: html

    <script>
        var package = "vsnp";
        var versions = ["2.03","2.03","2.03","0.2.02","0.2.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsnp/README.html