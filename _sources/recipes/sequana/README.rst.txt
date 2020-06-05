:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana'
.. highlight: bash

sequana
=======

.. conda:recipe:: sequana
   :replaces_section_title:
   :noindex:

   A set of standalone application and snakemake pipelines dedicated to NGS \(new generation sequencing\) analysis

   :homepage: http://sequana.readthedocs.io/
   :license: BSD / BSD 3-clause
   :recipe: /`sequana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana/meta.yaml>`_

   


.. conda:package:: sequana

   |downloads_sequana| |docker_sequana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.2-0</code>,  <code>0.7.1-2</code>,  <code>0.7.1-1</code>,  <code>0.7.0-0</code>,  <code>0.6.3.post1-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  </span></summary>
      

      ``0.8.2-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.0-0``,  ``0.6.3.post1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends atropos: 
   :depends bcftools: 
   :depends bedtools: 
   :depends bioservices: ``>=1.5.1``
   :depends colorlog: ``>=3.1.0``
   :depends cython: ``>=0.29.16``
   :depends easydev: ``>=0.9.36``
   :depends fastqc: ``0.11.5``
   :depends freebayes: 
   :depends graphviz: ``>=2.42.3``
   :depends itolapi: 
   :depends khmer: 
   :depends kraken: ``1.1``
   :depends krona: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends lxml: 
   :depends mock: 
   :depends multiqc: ``>=1.8``
   :depends numexpr: 
   :depends packaging: 
   :depends pandas: ``>=0.22``
   :depends pigz: 
   :depends psutil: 
   :depends pykwalify: ``>=1.6``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends pyvcf: ``>=0.6.8``
   :depends pyyaml: ``>=5.3.1``
   :depends qtconsole: ``>=4.7.2``
   :depends ruamel.yaml: 
   :depends samtools: ``>=1.10``
   :depends scipy: ``>=1.4.1``
   :depends snakemake: ``>=5.13.0``
   :depends xlrd: ``>=1.2.0``
   :depends xmltodict: ``>=0.12.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sequana

   and update with::

      conda update sequana

   or use the docker container::

      docker pull quay.io/biocontainers/sequana:<tag>

   (see `sequana/tags`_ for valid values for ``<tag>``)


.. |downloads_sequana| image:: https://img.shields.io/conda/dn/bioconda/sequana.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana
   :alt:   (downloads)
.. |docker_sequana| image:: https://quay.io/repository/biocontainers/sequana/status
   :target: https://quay.io/repository/biocontainers/sequana
.. _`sequana/tags`: https://quay.io/repository/biocontainers/sequana?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana/README.html