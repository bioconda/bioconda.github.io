:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseqc'
.. highlight: bash

rseqc
=====

.. conda:recipe:: rseqc
   :replaces_section_title:
   :noindex:

   RNA\-seq QC Package

   :homepage: http://rseqc.sourceforge.net/
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`rseqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseqc/meta.yaml>`_
   :links: biotools: :biotools:`rseqc`, doi: :doi:`10.1093/bioinformatics/bts356`

   


.. conda:package:: rseqc

   |downloads_rseqc| |docker_rseqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.1-2</code>,  <code>3.0.1-1</code>,  <code>3.0.1-0</code>,  <code>3.0.0-3</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.6.4-2</code>,  <code>2.6.4-1</code>,  <code>2.6.4-0</code>,  </span></summary>
      

      ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.6.4-2``,  ``2.6.4-1``,  ``2.6.4-0``,  ``2.6.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends numpy: 
   :depends pip: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rseqc

   and update with::

      conda update rseqc

   or use the docker container::

      docker pull quay.io/biocontainers/rseqc:<tag>

   (see `rseqc/tags`_ for valid values for ``<tag>``)


.. |downloads_rseqc| image:: https://img.shields.io/conda/dn/bioconda/rseqc.svg?style=flat
   :target: https://anaconda.org/bioconda/rseqc
   :alt:   (downloads)
.. |docker_rseqc| image:: https://quay.io/repository/biocontainers/rseqc/status
   :target: https://quay.io/repository/biocontainers/rseqc
.. _`rseqc/tags`: https://quay.io/repository/biocontainers/rseqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseqc/README.html