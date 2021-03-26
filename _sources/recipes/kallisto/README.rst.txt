:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kallisto'
.. highlight: bash

kallisto
========

.. conda:recipe:: kallisto
   :replaces_section_title:
   :noindex:

   Quantifying abundances of transcripts from RNA\-Seq data\, or more generally of target sequences using high\-throughput sequencing reads.

   :homepage: http://pachterlab.github.io/kallisto
   :license: BSD_2_Clause
   :recipe: /`kallisto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kallisto/meta.yaml>`_
   :links: biotools: :biotools:`kallisto`, doi: :doi:`10.1038/nbt.3519`

   


.. conda:package:: kallisto

   |downloads_kallisto| |docker_kallisto|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.46.2-2</code>,  <code>0.46.2-1</code>,  <code>0.46.2-0</code>,  <code>0.46.1-0</code>,  <code>0.46.0-1</code>,  <code>0.46.0-0</code>,  <code>0.45.1-0</code>,  <code>0.45.0-0</code>,  <code>0.44.0-2</code>,  </span></summary>
      

      ``0.46.2-2``,  ``0.46.2-1``,  ``0.46.2-0``,  ``0.46.1-0``,  ``0.46.0-1``,  ``0.46.0-0``,  ``0.45.1-0``,  ``0.45.0-0``,  ``0.44.0-2``,  ``0.44.0-1``,  ``0.43.1-1``,  ``0.43.1-0``,  ``0.43.0-2``,  ``0.43.0-1``,  ``0.42.4-2``,  ``0.42.4-1``,  ``0.42.3-1``,  ``0.42.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kallisto

   and update with::

      conda update kallisto

   or use the docker container::

      docker pull quay.io/biocontainers/kallisto:<tag>

   (see `kallisto/tags`_ for valid values for ``<tag>``)


.. |downloads_kallisto| image:: https://img.shields.io/conda/dn/bioconda/kallisto.svg?style=flat
   :target: https://anaconda.org/bioconda/kallisto
   :alt:   (downloads)
.. |docker_kallisto| image:: https://quay.io/repository/biocontainers/kallisto/status
   :target: https://quay.io/repository/biocontainers/kallisto
.. _`kallisto/tags`: https://quay.io/repository/biocontainers/kallisto?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kallisto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kallisto/README.html