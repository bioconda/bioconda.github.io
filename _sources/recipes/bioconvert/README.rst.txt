:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconvert'
.. highlight: bash

bioconvert
==========

.. conda:recipe:: bioconvert
   :replaces_section_title:
   :noindex:

   Convert between bioinformatics formats.

   :homepage: https://github.com/bioconvert/bioconvert
   :documentation: https://bioconvert.readthedocs.io/en/dev
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`bioconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert/meta.yaml>`_

   


.. conda:package:: bioconvert

   |downloads_bioconvert| |docker_bioconvert|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-3</code>,  <code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0.post0-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  </span></summary>
      

      ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0.post0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.0.10-1``,  ``0.0.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: 
   :depends on bcftools: 
   :depends on bedops: 
   :depends on bedtools: 
   :depends on biopython: ``>=1.70``
   :depends on biosniff: 
   :depends on colorlog: 
   :depends on deeptools: 
   :depends on dsrc: 
   :depends on easydev: 
   :depends on gffread: 
   :depends on go: ``1.24.*``
   :depends on goalign: 
   :depends on gotree: 
   :depends on graphviz: 
   :depends on htslib: 
   :depends on jinja2: ``<3.1``
   :depends on mappy: 
   :depends on matplotlib-base: 
   :depends on mawk: 
   :depends on mosdepth: 
   :depends on networkx: 
   :depends on numpydoc: 
   :depends on openpyxl: ``<=3.0.10``
   :depends on pandas: 
   :depends on pbzip2: 
   :depends on picard-slim: 
   :depends on pigz: 
   :depends on plink: 
   :depends on psutil: 
   :depends on py2bit: 
   :depends on pybigwig: 
   :depends on pyexcel: 
   :depends on pyexcel-ods3: 
   :depends on pyexcel-xls: 
   :depends on pyexcel-xlsx: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on sambamba: 
   :depends on samtools: 
   :depends on sed: 
   :depends on seqkit: 
   :depends on seqtk: 
   :depends on squizz: 
   :depends on sra-tools: 
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-bigwigtobedgraph: 
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-twobittofa: 
   :depends on ucsc-wigtobigwig: 
   :depends on wiggletools: 
   :depends on xlrd: ``>2.0``

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

    pixi global install bioconvert

to add into an existing workspace instead, run::

    pixi add bioconvert

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconvert

Alternatively, to install into a new environment, run::

    conda create -n envname bioconvert

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconvert:<tag>

(see `bioconvert/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconvert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconvert
   :alt:   (downloads)
.. |docker_bioconvert| image:: https://quay.io/repository/biocontainers/bioconvert/status
   :target: https://quay.io/repository/biocontainers/bioconvert
.. _`bioconvert/tags`: https://quay.io/repository/biocontainers/bioconvert?tab=tags


.. raw:: html

    <script>
        var package = "bioconvert";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconvert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconvert/README.html