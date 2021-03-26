:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsh-bio'
.. highlight: bash

dsh-bio
=======

.. conda:recipe:: dsh-bio
   :replaces_section_title:
   :noindex:

   Tools for BED\, FASTA\, FASTQ\, GAF\, GFA1\/2\, GFF3\, PAF\, SAM\, and VCF files

   :homepage: https://github.com/heuermh/dishevelled-bio
   :license: LGPL version 3 or later
   :recipe: /`dsh-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsh-bio/meta.yaml>`_

   


.. conda:package:: dsh-bio

   |downloads_dsh-bio| |docker_dsh-bio|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0-0</code>,  <code>1.4-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  </span></summary>
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.4-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dsh-bio

   and update with::

      conda update dsh-bio

   or use the docker container::

      docker pull quay.io/biocontainers/dsh-bio:<tag>

   (see `dsh-bio/tags`_ for valid values for ``<tag>``)


.. |downloads_dsh-bio| image:: https://img.shields.io/conda/dn/bioconda/dsh-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/dsh-bio
   :alt:   (downloads)
.. |docker_dsh-bio| image:: https://quay.io/repository/biocontainers/dsh-bio/status
   :target: https://quay.io/repository/biocontainers/dsh-bio
.. _`dsh-bio/tags`: https://quay.io/repository/biocontainers/dsh-bio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsh-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsh-bio/README.html