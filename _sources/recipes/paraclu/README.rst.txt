:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraclu'
.. highlight: bash

paraclu
=======

.. conda:recipe:: paraclu
   :replaces_section_title:
   :noindex:

   Paraclu finds clusters in data attached to sequences.

   :homepage: http://cbrc3.cbrc.jp/~martin/paraclu/
   :license: GNU-GPL
   :recipe: /`paraclu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraclu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraclu/meta.yaml>`_
   :links: biotools: :biotools:`paraclu`

   


.. conda:package:: paraclu

   |downloads_paraclu| |docker_paraclu|

   :versions:
      
      

      ``9-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paraclu

   and update with::

      conda update paraclu

   or use the docker container::

      docker pull quay.io/biocontainers/paraclu:<tag>

   (see `paraclu/tags`_ for valid values for ``<tag>``)


.. |downloads_paraclu| image:: https://img.shields.io/conda/dn/bioconda/paraclu.svg?style=flat
   :target: https://anaconda.org/bioconda/paraclu
   :alt:   (downloads)
.. |docker_paraclu| image:: https://quay.io/repository/biocontainers/paraclu/status
   :target: https://quay.io/repository/biocontainers/paraclu
.. _`paraclu/tags`: https://quay.io/repository/biocontainers/paraclu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraclu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraclu/README.html