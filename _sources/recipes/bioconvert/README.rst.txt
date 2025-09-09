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

         <details><summary><span class="truncated-version-list"><code>1.1.1-2</code>,  <code>1.1.1-1</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0.post0-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0.post0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.0.10-1``,  ``0.0.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: 
   :depends bcftools: ``>=1.19,<1.20``
   :depends bedops: 
   :depends bedtools: 
   :depends biopython: ``>=1.70``
   :depends biosniff: 
   :depends colorlog: 
   :depends deeptools: 
   :depends dsrc: 
   :depends easydev: 
   :depends gffread: 
   :depends go: ``1.24.*``
   :depends goalign: 
   :depends gotree: 
   :depends graphviz: 
   :depends htslib: ``>=1.19.1,<1.20.0a0``
   :depends jinja2: ``<3.1``
   :depends mappy: 
   :depends matplotlib-base: 
   :depends mawk: 
   :depends mosdepth: 
   :depends networkx: 
   :depends numpydoc: 
   :depends openpyxl: ``<=3.0.10``
   :depends pandas: 
   :depends pbzip2: 
   :depends picard-slim: 
   :depends pigz: 
   :depends plink: 
   :depends psutil: 
   :depends py2bit: 
   :depends pybigwig: 
   :depends pyexcel: 
   :depends pyexcel-ods3: 
   :depends pyexcel-xls: 
   :depends pyexcel-xlsx: 
   :depends pysam: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends sambamba: 
   :depends samtools: 
   :depends sed: 
   :depends seqkit: 
   :depends seqtk: 
   :depends squizz: 
   :depends sra-tools: 
   :depends statsmodels: 
   :depends tqdm: 
   :depends ucsc-bedgraphtobigwig: 
   :depends ucsc-bigwigtobedgraph: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobittofa: 
   :depends ucsc-wigtobigwig: 
   :depends wiggletools: ``>=1.2.11,<1.3``
   :depends xlrd: ``>2.0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconvert

   and update with::

      mamba update bioconvert

  To create a new environment, run::

      mamba create --name myenvname bioconvert

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconvert:<tag>

   (see `bioconvert/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconvert| image:: https://img.shields.io/conda/dn/bioconda/bioconvert.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconvert
   :alt:   (downloads)
.. |docker_bioconvert| image:: https://quay.io/repository/biocontainers/bioconvert/status
   :target: https://quay.io/repository/biocontainers/bioconvert
.. _`bioconvert/tags`: https://quay.io/repository/biocontainers/bioconvert?tab=tags


.. raw:: html

    <script>
        var package = "bioconvert";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.0","1.0.0.post0"];
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