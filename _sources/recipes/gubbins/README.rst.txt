:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gubbins'
.. highlight: bash

gubbins
=======

.. conda:recipe:: gubbins
   :replaces_section_title:
   :noindex:

   Rapid phylogenetic analysis of large samples of recombinant bacterial whole genome sequences using Gubbins.

   :homepage: https://github.com/sanger-pathogens/gubbins
   :license: GPL-2.0
   :recipe: /`gubbins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gubbins/meta.yaml>`_

   


.. conda:package:: gubbins

   |downloads_gubbins| |docker_gubbins|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.1-2</code>,  <code>2.4.1-1</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.5-0</code>,  <code>2.3.4-2</code>,  <code>2.3.4-1</code>,  <code>2.3.4-0</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``2.4.1-2``,  ``2.4.1-1``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.5-0``,  ``2.3.4-2``,  ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.2-0``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.59``
   :depends dendropy: ``>=4.0.2``
   :depends fasttree: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends nose: ``>=1.3``
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends raxml: 
   :depends reportlab: ``>=3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gubbins

   and update with::

      conda update gubbins

   or use the docker container::

      docker pull quay.io/biocontainers/gubbins:<tag>

   (see `gubbins/tags`_ for valid values for ``<tag>``)


.. |downloads_gubbins| image:: https://img.shields.io/conda/dn/bioconda/gubbins.svg?style=flat
   :target: https://anaconda.org/bioconda/gubbins
   :alt:   (downloads)
.. |docker_gubbins| image:: https://quay.io/repository/biocontainers/gubbins/status
   :target: https://quay.io/repository/biocontainers/gubbins
.. _`gubbins/tags`: https://quay.io/repository/biocontainers/gubbins?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gubbins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gubbins/README.html