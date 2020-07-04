:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'octopus'
.. highlight: bash

octopus
=======

.. conda:recipe:: octopus
   :replaces_section_title:
   :noindex:

   Octopus is a mapping\-based variant caller that implements several calling models within a unified haplotype\-aware framework.

   :homepage: https://github.com/luntergroup/octopus
   :license: MIT / MIT
   :recipe: /`octopus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus/meta.yaml>`_

   


.. conda:package:: octopus

   |downloads_octopus| |docker_octopus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.3b-1</code>,  <code>0.6.3b-0</code>,  <code>0.5.2b-2</code>,  <code>0.5.2b-1</code>,  <code>0.5.2b-0</code>,  <code>0.5.1b-0</code>,  <code>0.5.0b-0</code>,  <code>0.4.1a-1</code>,  <code>0.4.1a-0</code>,  </span></summary>
      

      ``0.6.3b-1``,  ``0.6.3b-0``,  ``0.5.2b-2``,  ``0.5.2b-1``,  ``0.5.2b-0``,  ``0.5.1b-0``,  ``0.5.0b-0``,  ``0.4.1a-1``,  ``0.4.1a-0``,  ``0.3.3a-1``,  ``0.3.3a-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gmp: ``>=6.2.0,<7.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends icu: ``>=64.2,<65.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install octopus

   and update with::

      conda update octopus

   or use the docker container::

      docker pull quay.io/biocontainers/octopus:<tag>

   (see `octopus/tags`_ for valid values for ``<tag>``)


.. |downloads_octopus| image:: https://img.shields.io/conda/dn/bioconda/octopus.svg?style=flat
   :target: https://anaconda.org/bioconda/octopus
   :alt:   (downloads)
.. |docker_octopus| image:: https://quay.io/repository/biocontainers/octopus/status
   :target: https://quay.io/repository/biocontainers/octopus
.. _`octopus/tags`: https://quay.io/repository/biocontainers/octopus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopus/README.html