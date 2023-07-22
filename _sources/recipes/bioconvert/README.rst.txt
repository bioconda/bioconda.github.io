:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconvert'
.. highlight: bash

bioconvert
==========

.. conda:recipe:: bioconvert
   :replaces_section_title:
   :noindex:

   Convert between bioinformatics formats

   :homepage: https://pypi.org/project/bioconvert/
   :documentation: https://bioconvert.readthedocs.io/en/dev/
   
   :developer docs: https://github.com/bioconvert/bioconvert
   :license: GPL-3.0
   :recipe: /`bioconvert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconvert/meta.yaml>`_

   


.. conda:package:: bioconvert

   |downloads_bioconvert| |docker_bioconvert|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.0.post0-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.4.3-0</code>,  </span></summary>
      

      ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0.post0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.0.10-1``,  ``0.0.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: 
   :depends bcftools: 
   :depends bedops: 
   :depends bedtools: 
   :depends biopython: ``>=1.70``
   :depends biosniff: 
   :depends colorlog: 
   :depends deeptools: 
   :depends dsrc: 
   :depends easydev: 
   :depends gffread: 
   :depends go: ``1.10.*``
   :depends graphviz: 
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
   :depends samtools: ``>=1.17``
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
   :depends wiggletools: ``1.2.*``
   :depends xlrd: ``>2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconvert

   and update with::

      conda update bioconvert

   or use the docker container::

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
        var versions = ["1.1.1","1.1.0","1.0.0.post0","0.6.3","0.6.2"];
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