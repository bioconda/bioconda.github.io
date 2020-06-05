:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abricate'
.. highlight: bash

abricate
========

.. conda:recipe:: abricate
   :replaces_section_title:
   :noindex:

   Mass screening of contigs for antibiotic resistance genes

   :homepage: https://github.com/tseemann/abricate
   :license: GPL2
   :recipe: /`abricate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abricate/meta.yaml>`_

   


.. conda:package:: abricate

   |downloads_abricate| |docker_abricate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.9.9-0</code>,  <code>0.9.8-0</code>,  <code>0.9.7-0</code>,  <code>0.9.3-0</code>,  <code>0.8.13-0</code>,  <code>0.8.10-0</code>,  <code>0.8.7-0</code>,  </span></summary>
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.9-0``,  ``0.9.8-0``,  ``0.9.7-0``,  ``0.9.3-0``,  ``0.8.13-0``,  ``0.8.10-0``,  ``0.8.7-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``,  ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-0``,  ``0.2-1``,  ``0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends any2fasta: 
   :depends blast: ``>=2.7``
   :depends perl-bioperl: ``>=1.7``
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends perl-lwp-simple: 
   :depends perl-path-tiny: 
   :depends unzip: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install abricate

   and update with::

      conda update abricate

   or use the docker container::

      docker pull quay.io/biocontainers/abricate:<tag>

   (see `abricate/tags`_ for valid values for ``<tag>``)


.. |downloads_abricate| image:: https://img.shields.io/conda/dn/bioconda/abricate.svg?style=flat
   :target: https://anaconda.org/bioconda/abricate
   :alt:   (downloads)
.. |docker_abricate| image:: https://quay.io/repository/biocontainers/abricate/status
   :target: https://quay.io/repository/biocontainers/abricate
.. _`abricate/tags`: https://quay.io/repository/biocontainers/abricate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abricate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abricate/README.html