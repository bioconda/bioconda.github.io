:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcorrector'
.. highlight: bash

rcorrector
==========

.. conda:recipe:: rcorrector
   :replaces_section_title:
   :noindex:

   Rcorrector\(RNA\-seq error CORRECTOR\) is a kmer\-based error correction method for RNA\-seq data. Rcorrector can also be applied to other type of sequencing data where the read coverage is non\-uniform\, such as single\-cell sequencing.

   :homepage: https://github.com/mourisl/Rcorrector/
   :license: GPL
   :recipe: /`rcorrector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcorrector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcorrector/meta.yaml>`_

   


.. conda:package:: rcorrector

   |downloads_rcorrector| |docker_rcorrector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3.1-1</code>,  <code>1.0.3.1-0</code>,  <code>1.0.3-2</code>,  <code>1.0.3-1</code>,  <code>1.0.3-0</code>,  <code>1.0.2-2</code>,  <code>1.0.2-1</code>,  </span></summary>
      

      ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3.1-1``,  ``1.0.3.1-0``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends kmer-jellyfish: ``2.*``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rcorrector

   and update with::

      conda update rcorrector

   or use the docker container::

      docker pull quay.io/biocontainers/rcorrector:<tag>

   (see `rcorrector/tags`_ for valid values for ``<tag>``)


.. |downloads_rcorrector| image:: https://img.shields.io/conda/dn/bioconda/rcorrector.svg?style=flat
   :target: https://anaconda.org/bioconda/rcorrector
   :alt:   (downloads)
.. |docker_rcorrector| image:: https://quay.io/repository/biocontainers/rcorrector/status
   :target: https://quay.io/repository/biocontainers/rcorrector
.. _`rcorrector/tags`: https://quay.io/repository/biocontainers/rcorrector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcorrector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcorrector/README.html