:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa'
.. highlight: bash

bwa
===

.. conda:recipe:: bwa
   :replaces_section_title:
   :noindex:

   The BWA read mapper.

   :homepage: https://github.com/lh3/bwa
   :license: GPL3
   :recipe: /`bwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa/meta.yaml>`_
   :links: biotools: :biotools:`bwa`, usegalaxy-eu: :usegalaxy-eu:`bwa_mem`, usegalaxy-eu: :usegalaxy-eu:`bwa`

   


.. conda:package:: bwa

   |downloads_bwa| |docker_bwa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.17-8</code>,  <code>0.7.17-7</code>,  <code>0.7.17-6</code>,  <code>0.7.17-5</code>,  <code>0.7.17-4</code>,  <code>0.7.17-3</code>,  <code>0.7.17-2</code>,  <code>0.7.17-1</code>,  <code>0.7.17-0</code>,  </span></summary>
      

      ``0.7.17-8``,  ``0.7.17-7``,  ``0.7.17-6``,  ``0.7.17-5``,  ``0.7.17-4``,  ``0.7.17-3``,  ``0.7.17-2``,  ``0.7.17-1``,  ``0.7.17-0``,  ``0.7.16-0``,  ``0.7.15-1``,  ``0.7.15-0``,  ``0.7.13-1``,  ``0.7.13-0``,  ``0.7.12-1``,  ``0.7.12-0``,  ``0.7.8-6``,  ``0.7.8-5``,  ``0.7.8-4``,  ``0.7.8-3``,  ``0.7.8-2``,  ``0.7.8-1``,  ``0.7.8-0``,  ``0.7.4-4``,  ``0.7.4-3``,  ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.7.3a-6``,  ``0.7.3a-5``,  ``0.7.3a-4``,  ``0.7.3a-3``,  ``0.7.3a-2``,  ``0.7.3a-1``,  ``0.7.3a-0``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``0.5.9-2``,  ``0.5.9-1``,  ``0.5.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends perl: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwa

   and update with::

      conda update bwa

   or use the docker container::

      docker pull quay.io/biocontainers/bwa:<tag>

   (see `bwa/tags`_ for valid values for ``<tag>``)


.. |downloads_bwa| image:: https://img.shields.io/conda/dn/bioconda/bwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa
   :alt:   (downloads)
.. |docker_bwa| image:: https://quay.io/repository/biocontainers/bwa/status
   :target: https://quay.io/repository/biocontainers/bwa
.. _`bwa/tags`: https://quay.io/repository/biocontainers/bwa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa/README.html