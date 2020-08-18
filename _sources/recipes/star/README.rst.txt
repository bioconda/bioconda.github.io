:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'star'
.. highlight: bash

star
====

.. conda:recipe:: star
   :replaces_section_title:
   :noindex:

   An RNA\-seq read aligner.

   :homepage: https://github.com/alexdobin/STAR
   :license: GPLv3
   :recipe: /`star <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star/meta.yaml>`_
   :links: biotools: :biotools:`star`

   


.. conda:package:: star

   |downloads_star| |docker_star|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.5c-0</code>,  <code>2.7.5b-0</code>,  <code>2.7.5a-0</code>,  <code>2.7.4a-0</code>,  <code>2.7.3a-0</code>,  <code>2.7.2c-0</code>,  <code>2.7.2b-0</code>,  <code>2.7.2a-0</code>,  <code>2.7.1a-0</code>,  </span></summary>
      

      ``2.7.5c-0``,  ``2.7.5b-0``,  ``2.7.5a-0``,  ``2.7.4a-0``,  ``2.7.3a-0``,  ``2.7.2c-0``,  ``2.7.2b-0``,  ``2.7.2a-0``,  ``2.7.1a-0``,  ``2.7.0f-0``,  ``2.7.0e-0``,  ``2.7.0d-0``,  ``2.7.0b-0``,  ``2.6.1d-0``,  ``2.6.1b-0``,  ``2.6.1a-1``,  ``2.6.0c-2``,  ``2.6.0c-1``,  ``2.6.0c-0``,  ``2.6.0b-0``,  ``2.5.4a-0``,  ``2.5.3a-0``,  ``2.5.2b-0``,  ``2.5.2a-0``,  ``2.5.1b-0``,  ``2.5.0c-0``,  ``2.5.0b-0``,  ``2.5.0a-0``,  ``2.4.2a-0``,  ``2.4.0j-1``,  ``2.4.0j-0``

      
      .. raw:: html

         </details>
      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install star

   and update with::

      conda update star

   or use the docker container::

      docker pull quay.io/biocontainers/star:<tag>

   (see `star/tags`_ for valid values for ``<tag>``)


.. |downloads_star| image:: https://img.shields.io/conda/dn/bioconda/star.svg?style=flat
   :target: https://anaconda.org/bioconda/star
   :alt:   (downloads)
.. |docker_star| image:: https://quay.io/repository/biocontainers/star/status
   :target: https://quay.io/repository/biocontainers/star
.. _`star/tags`: https://quay.io/repository/biocontainers/star?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star/README.html