:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seer'
.. highlight: bash

seer
====

.. conda:recipe:: seer
   :replaces_section_title:
   :noindex:

   sequence element \(kmer\) enrichment analysis

   :homepage: https://github.com/johnlees/seer
   :license: GPL / GPL-2
   :recipe: /`seer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seer/meta.yaml>`_
   :links: doi: :doi:`10.1038/ncomms12797`

   


.. conda:package:: seer

   |downloads_seer| |docker_seer|

   :versions:
      
      

      ``1.1.4-0``

      

   
   :depends armadillo: 
   :depends hdf5: ``>=1.10.3,<1.10.4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends pthread-stubs: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seer

   and update with::

      conda update seer

   or use the docker container::

      docker pull quay.io/biocontainers/seer:<tag>

   (see `seer/tags`_ for valid values for ``<tag>``)


.. |downloads_seer| image:: https://img.shields.io/conda/dn/bioconda/seer.svg?style=flat
   :target: https://anaconda.org/bioconda/seer
   :alt:   (downloads)
.. |docker_seer| image:: https://quay.io/repository/biocontainers/seer/status
   :target: https://quay.io/repository/biocontainers/seer
.. _`seer/tags`: https://quay.io/repository/biocontainers/seer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seer/README.html