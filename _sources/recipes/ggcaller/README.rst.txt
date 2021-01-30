:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ggcaller'
.. highlight: bash

ggcaller
========

.. conda:recipe:: ggcaller
   :replaces_section_title:
   :noindex:

   a gene caller for Bifrost graphs

   :homepage: https://github.com/samhorsfield96/ggCaller
   :license: MIT
   :recipe: /`ggcaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ggcaller/meta.yaml>`_

   


.. conda:package:: ggcaller

   |downloads_ggcaller| |docker_ggcaller|

   :versions:
      
      

      ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bifrost: 
   :depends biopython: 
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pthread-stubs: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ggcaller

   and update with::

      conda update ggcaller

   or use the docker container::

      docker pull quay.io/biocontainers/ggcaller:<tag>

   (see `ggcaller/tags`_ for valid values for ``<tag>``)


.. |downloads_ggcaller| image:: https://img.shields.io/conda/dn/bioconda/ggcaller.svg?style=flat
   :target: https://anaconda.org/bioconda/ggcaller
   :alt:   (downloads)
.. |docker_ggcaller| image:: https://quay.io/repository/biocontainers/ggcaller/status
   :target: https://quay.io/repository/biocontainers/ggcaller
.. _`ggcaller/tags`: https://quay.io/repository/biocontainers/ggcaller?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ggcaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ggcaller/README.html