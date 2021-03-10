:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motus'
.. highlight: bash

motus
=====

.. conda:recipe:: motus
   :replaces_section_title:
   :noindex:

   Marker gene\-based OTU \(mOTU\) profiling

   :homepage: http://motu-tool.org/
   :developer docs: https://github.com/motu-tool/mOTUs_v2
   :license: GPL / GPL-3.0
   :recipe: /`motus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motus/meta.yaml>`_
   :links: biotools: :biotools:`motus`

   


.. conda:package:: motus

   |downloads_motus| |docker_motus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.6.0-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.1.1-3</code>,  <code>2.1.0-2</code>,  <code>2.1.0-1</code>,  <code>2.0.1-2</code>,  <code>2.0.1-1</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.6.0-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.1.1-3``,  ``2.1.0-2``,  ``2.1.0-1``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0-1``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bwa: ``>=0.7.17``
   :depends metasnv: ``1.0.3.*``
   :depends python: ``>3``
   :depends samtools: ``>=1.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install motus

   and update with::

      conda update motus

   or use the docker container::

      docker pull quay.io/biocontainers/motus:<tag>

   (see `motus/tags`_ for valid values for ``<tag>``)


.. |downloads_motus| image:: https://img.shields.io/conda/dn/bioconda/motus.svg?style=flat
   :target: https://anaconda.org/bioconda/motus
   :alt:   (downloads)
.. |docker_motus| image:: https://quay.io/repository/biocontainers/motus/status
   :target: https://quay.io/repository/biocontainers/motus
.. _`motus/tags`: https://quay.io/repository/biocontainers/motus?tab=tags






Notes
-----
A tiny wrapper to the command motus was added. See build.sh for additional notes


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motus/README.html