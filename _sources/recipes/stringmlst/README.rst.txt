:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stringmlst'
.. highlight: bash

stringmlst
==========

.. conda:recipe:: stringmlst
   :replaces_section_title:
   :noindex:

   Fast k\-mer based tool for multi locus sequence typing \(MLST\) directly from genome sequencing reads

   :homepage: https://github.com/jordanlab/stringMLST
   :license: CC BY-NC-SA 4.0
   :recipe: /`stringmlst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stringmlst/meta.yaml>`_

   


.. conda:package:: stringmlst

   |downloads_stringmlst| |docker_stringmlst|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.2-1</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.5.1-0</code>,  <code>0.5.1a-1</code>,  <code>0.5.1a-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4-0</code>,  </span></summary>
      

      ``0.6.2-1``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1-0``,  ``0.5.1a-1``,  ``0.5.1a-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-0``,  ``0.3.7-0``,  ``0.3.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends bwa: 
   :depends lxml: 
   :depends pyfaidx: 
   :depends python: ``>=3``
   :depends samtools: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install stringmlst

   and update with::

      conda update stringmlst

   or use the docker container::

      docker pull quay.io/biocontainers/stringmlst:<tag>

   (see `stringmlst/tags`_ for valid values for ``<tag>``)


.. |downloads_stringmlst| image:: https://img.shields.io/conda/dn/bioconda/stringmlst.svg?style=flat
   :target: https://anaconda.org/bioconda/stringmlst
   :alt:   (downloads)
.. |docker_stringmlst| image:: https://quay.io/repository/biocontainers/stringmlst/status
   :target: https://quay.io/repository/biocontainers/stringmlst
.. _`stringmlst/tags`: https://quay.io/repository/biocontainers/stringmlst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stringmlst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stringmlst/README.html