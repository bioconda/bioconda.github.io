:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kma'
.. highlight: bash

kma
===

.. conda:recipe:: kma
   :replaces_section_title:
   :noindex:

   KMA is mapping a method designed to map raw reads directly against redundant databases\, in an ultra\-fast manner using seed and extend.

   :homepage: https://bitbucket.org/genomicepidemiology/kma
   :license: Apache-2.0
   :recipe: /`kma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kma/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2336-6`

   


.. conda:package:: kma

   |downloads_kma| |docker_kma|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.0-0</code>,  </span></summary>
      

      ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.26-0``,  ``1.2.25-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.19-0``,  ``1.2.18-0``,  ``1.2.17-0``,  ``1.2.16-0``,  ``1.2.15-0``,  ``1.2.14-0``,  ``1.2.12-0``,  ``1.2.11-0``,  ``1.2.9-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.7-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kma

   and update with::

      conda update kma

   or use the docker container::

      docker pull quay.io/biocontainers/kma:<tag>

   (see `kma/tags`_ for valid values for ``<tag>``)


.. |downloads_kma| image:: https://img.shields.io/conda/dn/bioconda/kma.svg?style=flat
   :target: https://anaconda.org/bioconda/kma
   :alt:   (downloads)
.. |docker_kma| image:: https://quay.io/repository/biocontainers/kma/status
   :target: https://quay.io/repository/biocontainers/kma
.. _`kma/tags`: https://quay.io/repository/biocontainers/kma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kma/README.html