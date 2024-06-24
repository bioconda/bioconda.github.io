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
   :license: GPL3
   :recipe: /`vsnp3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vsnp3/meta.yaml>`_

   


.. conda:package:: vsnp3

   |downloads_vsnp3| |docker_vsnp3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.23-0</code>,  <code>3.22-0</code>,  <code>3.21-0</code>,  <code>3.20-0</code>,  <code>3.19-0</code>,  <code>3.18-0</code>,  <code>3.17-0</code>,  <code>3.16-0</code>,  <code>3.15-0</code>,  </span></summary>
      

      ``3.23-0``,  ``3.22-0``,  ``3.21-0``,  ``3.20-0``,  ``3.19-0``,  ``3.18-0``,  ``3.17-0``,  ``3.16-0``,  ``3.15-0``,  ``3.14-0``,  ``3.13-0``,  ``3.12-0``,  ``3.11-0``,  ``3.10-0``,  ``3.09-0``,  ``3.08-0``,  ``3.07-0``,  ``3.06-0``,  ``3.05-0``,  ``3.04-0``,  ``3.02-0``,  ``3.01-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends biopython: ``>=1.79``
   :depends bwa: 
   :depends cairosvg: ``>=2.5.2``
   :depends dask: ``>=2022.01.1``
   :depends freebayes: ``>=1.3.5``
   :depends humanize: ``>=3.14.0``
   :depends minimap2: ``>=2.24``
   :depends numpy: 
   :depends openpyxl: ``>=3.0.9``
   :depends pandas: 
   :depends parallel: 
   :depends pigz: 
   :depends py-cpuinfo: 
   :depends python: ``>=3.8,<3.10``
   :depends raxml: ``>=8.2.12``
   :depends regex: ``>=2.5.110``
   :depends samtools: ``>=1.14``
   :depends seqkit: ``>=2.1.0``
   :depends sourmash: ``>=4.2.4``
   :depends spades: ``>=3.15.2``
   :depends svgwrite: ``>=1.4.1``
   :depends vcflib: ``1.0.1.*``
   :depends vcftools: ``0.1.16.*``
   :depends xlsxwriter: ``>=3.0.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install vsnp3

   and update with::

      mamba update vsnp3

  To create a new environment, run::

      mamba create --name myenvname vsnp3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vsnp3:<tag>

   (see `vsnp3/tags`_ for valid values for ``<tag>``)


.. |downloads_vsnp3| image:: https://img.shields.io/conda/dn/bioconda/vsnp3.svg?style=flat
   :target: https://anaconda.org/bioconda/vsnp3
   :alt:   (downloads)
.. |docker_vsnp3| image:: https://quay.io/repository/biocontainers/vsnp3/status
   :target: https://quay.io/repository/biocontainers/vsnp3
.. _`vsnp3/tags`: https://quay.io/repository/biocontainers/vsnp3?tab=tags


.. raw:: html

    <script>
        var package = "vsnp3";
        var versions = ["3.23","3.22","3.21","3.20","3.19"];
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