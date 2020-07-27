:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cmash'
.. highlight: bash

cmash
=====

.. conda:recipe:: cmash
   :replaces_section_title:
   :noindex:

   Fast and accurate set similarity estimation via containment min hash \(for genomic datasets\).

   :homepage: https://github.com/dkoslicki/CMash
   :license: BSD / BSD-3-Clause
   :recipe: /`cmash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cmash/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.amc.2019.02.018`

   


.. conda:package:: cmash

   |downloads_cmash| |docker_cmash|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends blist: 
   :depends h5py: 
   :depends hydra: 
   :depends khmer: ``>=2.1.1``
   :depends marisa-trie: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.14``
   :depends pandas: ``>=0.21.1``
   :depends pycairo: 
   :depends python: 
   :depends scipy: 
   :depends screed: ``>=0.9``
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cmash

   and update with::

      conda update cmash

   or use the docker container::

      docker pull quay.io/biocontainers/cmash:<tag>

   (see `cmash/tags`_ for valid values for ``<tag>``)


.. |downloads_cmash| image:: https://img.shields.io/conda/dn/bioconda/cmash.svg?style=flat
   :target: https://anaconda.org/bioconda/cmash
   :alt:   (downloads)
.. |docker_cmash| image:: https://quay.io/repository/biocontainers/cmash/status
   :target: https://quay.io/repository/biocontainers/cmash
.. _`cmash/tags`: https://quay.io/repository/biocontainers/cmash?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cmash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cmash/README.html