:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kaiju'
.. highlight: bash

kaiju
=====

.. conda:recipe:: kaiju
   :replaces_section_title:
   :noindex:

   Fast and sensitive taxonomic classification for metagenomics

   :homepage: http://kaiju.binf.ku.dk/
   :license: GNU GPL v3
   :recipe: /`kaiju <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaiju/meta.yaml>`_
   :links: biotools: :biotools:`kaiju`, doi: :doi:`10.1038/ncomms11257`

   


.. conda:package:: kaiju

   |downloads_kaiju| |docker_kaiju|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.4-0</code>,  <code>1.7.3-1</code>,  <code>1.7.3-0</code>,  <code>1.7.2-0</code>,  <code>1.7.1-0</code>,  <code>1.7.0-2</code>,  <code>1.6.3-2</code>,  <code>1.6.3-1</code>,  <code>1.6.3-0</code>,  </span></summary>
      

      ``1.7.4-0``,  ``1.7.3-1``,  ``1.7.3-0``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.7.0-2``,  ``1.6.3-2``,  ``1.6.3-1``,  ``1.6.3-0``,  ``1.6.2-1``,  ``1.6.2-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-3``,  ``1.4.4-2``,  ``1.4.4-1``,  ``1.4.4-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends perl: 
   :depends python: 
   :depends wget: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kaiju

   and update with::

      conda update kaiju

   or use the docker container::

      docker pull quay.io/biocontainers/kaiju:<tag>

   (see `kaiju/tags`_ for valid values for ``<tag>``)


.. |downloads_kaiju| image:: https://img.shields.io/conda/dn/bioconda/kaiju.svg?style=flat
   :target: https://anaconda.org/bioconda/kaiju
   :alt:   (downloads)
.. |docker_kaiju| image:: https://quay.io/repository/biocontainers/kaiju/status
   :target: https://quay.io/repository/biocontainers/kaiju
.. _`kaiju/tags`: https://quay.io/repository/biocontainers/kaiju?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaiju/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaiju/README.html