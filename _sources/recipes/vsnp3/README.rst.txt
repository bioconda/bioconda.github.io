:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vsnp3'
.. highlight: bash

vsnp3
=====

.. conda:recipe:: vsnp3
   :replaces_section_title:
   :noindex:

   Rapidly call\, validate\, and compare SNPs from FASTQ files in a timely manner utilizing large data sets.

   :homepage: https://github.com/USDA-VS/vsnp3
   :license: GPL-3.0-or-later
   :recipe: /`vsnp3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3/meta.yaml>`_

   


.. conda:package:: vsnp3

   |downloads_vsnp3| |docker_vsnp3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.35-0</code>,  <code>3.34-0</code>,  <code>3.33-0</code>,  <code>3.32-0</code>,  <code>3.31-0</code>,  <code>3.30-0</code>,  <code>3.29-0</code>,  <code>3.28-0</code>,  <code>3.27-0</code>,  </span></summary>
      

      ``3.35-0``,  ``3.34-0``,  ``3.33-0``,  ``3.32-0``,  ``3.31-0``,  ``3.30-0``,  ``3.29-0``,  ``3.28-0``,  ``3.27-0``,  ``3.26-0``,  ``3.25-0``,  ``3.24-0``,  ``3.23-0``,  ``3.22-0``,  ``3.21-0``,  ``3.20-0``,  ``3.19-0``,  ``3.18-0``,  ``3.17-0``,  ``3.16-0``,  ``3.15-0``,  ``3.14-0``,  ``3.13-0``,  ``3.12-0``,  ``3.11-0``,  ``3.10-0``,  ``3.09-0``,  ``3.08-0``,  ``3.07-0``,  ``3.06-0``,  ``3.05-0``,  ``3.04-0``,  ``3.02-0``,  ``3.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bcftools: 
   :depends on biopython: ``>=1.79``
   :depends on bwa: 
   :depends on cairosvg: ``>=2.5.2``
   :depends on dask: ``>=2022.01.1``
   :depends on freebayes: ``>=1.3.5``
   :depends on humanize: ``>=3.14.0``
   :depends on minimap2: ``>=2.24``
   :depends on numpy: ``>=1.16,<=1.26``
   :depends on openpyxl: ``>=3.0.9``
   :depends on pandas: ``>=1.3,<=2.2``
   :depends on parallel: 
   :depends on pigz: 
   :depends on plotly: 
   :depends on py-cpuinfo: 
   :depends on python: ``>=3.8,<=3.12``
   :depends on raxml: ``>=8.2.12``
   :depends on regex: ``>=2.5.110``
   :depends on samtools: ``>=1.14``
   :depends on seqkit: ``>=2.1.0``
   :depends on sourmash: ``>=4.2.4``
   :depends on spades: ``>=3.15.2``
   :depends on svgwrite: ``>=1.4.1``
   :depends on vcflib: ``1.0.12.*``
   :depends on xlsxwriter: ``>=3.0.2``

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

    pixi global install vsnp3

to add into an existing workspace instead, run::

    pixi add vsnp3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vsnp3

Alternatively, to install into a new environment, run::

    conda create -n envname vsnp3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vsnp3:<tag>

(see `vsnp3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vsnp3| image:: https://img.shields.io/conda/dn/bioconda/vsnp3.svg?style=flat
   :target: https://anaconda.org/bioconda/vsnp3
   :alt:   (downloads)
.. |docker_vsnp3| image:: https://quay.io/repository/biocontainers/vsnp3/status
   :target: https://quay.io/repository/biocontainers/vsnp3
.. _`vsnp3/tags`: https://quay.io/repository/biocontainers/vsnp3?tab=tags


.. raw:: html

    <script>
        var package = "vsnp3";
        var versions = ["3.35","3.34","3.33","3.32","3.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vsnp3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vsnp3/README.html