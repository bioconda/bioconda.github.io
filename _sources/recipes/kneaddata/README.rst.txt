:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kneaddata'
.. highlight: bash

kneaddata
=========

.. conda:recipe:: kneaddata
   :replaces_section_title:
   :noindex:

   KneadData is a tool designed to perform quality control on metagenomic sequencing data.

   :homepage: http://huttenhower.sph.harvard.edu/kneaddata
   :license: MIT / MIT
   :recipe: /`kneaddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kneaddata/meta.yaml>`_

   KneadData is a tool designed to perform quality control on metagenomic sequencing data\, especially data from microbiome experiments. In these experiments\, samples are typically taken from a host in hopes of learning something about the microbial community on the host. However\, metagenomic sequencing data from such experiments will often contain a high ratio of host to bacterial reads. This tool aims to perform principled in silico separation of bacterial reads from these \"contaminant\" reads\, be they from the host\, from bacterial 16S sequences\, or other user\-defined sources.


.. conda:package:: kneaddata

   |downloads_kneaddata| |docker_kneaddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-0</code>,  <code>0.7.4-1</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-1</code>,  <code>0.7.2-0</code>,  </span></summary>
      

      ``0.12.0-1``,  ``0.12.0-0``,  ``0.10.0-0``,  ``0.9.0-0``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-1``,  ``0.7.2-0``,  ``0.7.0-0``,  ``0.6.1-2``,  ``0.6.1-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends blast: 
   :depends bmtool: 
   :depends bowtie2: ``>=2.2``
   :depends fastqc: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends srprism: 
   :depends trf: 
   :depends trimmomatic: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kneaddata

   and update with::

      conda update kneaddata

   or use the docker container::

      docker pull quay.io/biocontainers/kneaddata:<tag>

   (see `kneaddata/tags`_ for valid values for ``<tag>``)


.. |downloads_kneaddata| image:: https://img.shields.io/conda/dn/bioconda/kneaddata.svg?style=flat
   :target: https://anaconda.org/bioconda/kneaddata
   :alt:   (downloads)
.. |docker_kneaddata| image:: https://quay.io/repository/biocontainers/kneaddata/status
   :target: https://quay.io/repository/biocontainers/kneaddata
.. _`kneaddata/tags`: https://quay.io/repository/biocontainers/kneaddata?tab=tags


.. raw:: html

    <script>
        var package = "kneaddata";
        var versions = ["0.12.0","0.12.0","0.10.0","0.9.0","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kneaddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kneaddata/README.html