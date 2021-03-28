:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'last'
.. highlight: bash

last
====

.. conda:recipe:: last
   :replaces_section_title:
   :noindex:

   LAST finds \& aligns related regions of sequences.

   :homepage: https://gitlab.com/mcfrith/last
   :license: GPL / GPL-3.0-or-later
   :recipe: /`last <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/last/meta.yaml>`_
   :links: biotools: :biotools:`last`

   LAST finds \& aligns related regions of sequences. It is designed for moderately large data \(e.g. genomes\, DNA reads\, proteomes\).  It\'s especially good at\: finding rearrangements and recombinations\; finding DNA\-versus\-protein related regions\; unusual data like AT\-rich DNA\; sensitive DNA\-DNA search.


.. conda:package:: last

   |downloads_last| |docker_last|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1205-1</code>,  <code>1205-0</code>,  <code>1186-0</code>,  <code>1060-0</code>,  <code>1047-0</code>,  <code>1021-0</code>,  <code>992-0</code>,  <code>982-0</code>,  <code>963-1</code>,  </span></summary>
      

      ``1205-1``,  ``1205-0``,  ``1186-0``,  ``1060-0``,  ``1047-0``,  ``1021-0``,  ``992-0``,  ``982-0``,  ``963-1``,  ``963-0``,  ``941-2``,  ``941-0``,  ``876-0``,  ``874-4``,  ``874-3``,  ``874-2``,  ``874-1``,  ``874-0``,  ``847-0``,  ``719-2``,  ``719-1``,  ``638-6``,  ``638-5``,  ``638-4``,  ``638-3``,  ``638-2``,  ``638-1``,  ``490-6``,  ``490-5``,  ``490-4``,  ``490-3``,  ``490-2``,  ``490-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends parallel: 
   :depends pillow: 
   :depends python: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install last

   and update with::

      conda update last

   or use the docker container::

      docker pull quay.io/biocontainers/last:<tag>

   (see `last/tags`_ for valid values for ``<tag>``)


.. |downloads_last| image:: https://img.shields.io/conda/dn/bioconda/last.svg?style=flat
   :target: https://anaconda.org/bioconda/last
   :alt:   (downloads)
.. |docker_last| image:: https://quay.io/repository/biocontainers/last/status
   :target: https://quay.io/repository/biocontainers/last
.. _`last/tags`: https://quay.io/repository/biocontainers/last?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/last/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/last/README.html