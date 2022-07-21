:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqfu'
.. highlight: bash

seqfu
=====

.. conda:recipe:: seqfu
   :replaces_section_title:
   :noindex:

   DNA sequence utilities

   :homepage: https://github.com/telatin/seqfu2/
   :license: GPL-3.0-only
   :recipe: /`seqfu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqfu/meta.yaml>`_
   :links: biotools: :biotools:`seqfu`, doi: :doi:`10.3390/bioengineering8050059`

   A collection of utilities to work with FASTX \(FASTA or FASTQ\) files
   that accept gzipped input.
   Tools to interleave and deinterleave\, to calculate stats\, and extract
   portions of sequence datasets.



.. conda:package:: seqfu

   |downloads_seqfu| |docker_seqfu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.14.0-0</code>,  <code>1.13.2-0</code>,  <code>1.13.1-0</code>,  <code>1.13.0-1</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.3-0</code>,  </span></summary>
      

      ``1.14.0-0``,  ``1.13.2-0``,  ``1.13.1-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.3-0``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.1-1``,  ``1.9.1-0``,  ``1.9.0-0``,  ``1.8.9-0``,  ``1.8.8-0``,  ``1.8.7-1``,  ``1.8.7-0``,  ``1.8.6-0``,  ``1.8.5-0``,  ``1.8.4-0``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.3-0``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.9.6-0``,  ``0.9.5-0``,  ``0.9.1-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.5-0``,  ``0.8.2-0``,  ``0.6.0-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :depends pcre: ``>=8.45,<9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqfu

   and update with::

      conda update seqfu

   or use the docker container::

      docker pull quay.io/biocontainers/seqfu:<tag>

   (see `seqfu/tags`_ for valid values for ``<tag>``)


.. |downloads_seqfu| image:: https://img.shields.io/conda/dn/bioconda/seqfu.svg?style=flat
   :target: https://anaconda.org/bioconda/seqfu
   :alt:   (downloads)
.. |docker_seqfu| image:: https://quay.io/repository/biocontainers/seqfu/status
   :target: https://quay.io/repository/biocontainers/seqfu
.. _`seqfu/tags`: https://quay.io/repository/biocontainers/seqfu?tab=tags


.. raw:: html

    <script>
        var package = "seqfu";
        var versions = ["1.14.0","1.13.2","1.13.1","1.13.0","1.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqfu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqfu/README.html