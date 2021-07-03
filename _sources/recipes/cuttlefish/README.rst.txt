:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cuttlefish'
.. highlight: bash

cuttlefish
==========

.. conda:recipe:: cuttlefish
   :replaces_section_title:
   :noindex:

   Construction of the compacted de Bruijn graph efficiently from genome references

   :homepage: https://github.com/COMBINE-lab/cuttlefish
   :documentation: https://github.com/COMBINE-lab/cuttlefish#readme
   
   :license: BSD-3-Clause
   :recipe: /`cuttlefish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cuttlefish/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.10.21.349605`

   


.. conda:package:: cuttlefish

   |downloads_cuttlefish| |docker_cuttlefish|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cuttlefish

   and update with::

      conda update cuttlefish

   or use the docker container::

      docker pull quay.io/biocontainers/cuttlefish:<tag>

   (see `cuttlefish/tags`_ for valid values for ``<tag>``)


.. |downloads_cuttlefish| image:: https://img.shields.io/conda/dn/bioconda/cuttlefish.svg?style=flat
   :target: https://anaconda.org/bioconda/cuttlefish
   :alt:   (downloads)
.. |docker_cuttlefish| image:: https://quay.io/repository/biocontainers/cuttlefish/status
   :target: https://quay.io/repository/biocontainers/cuttlefish
.. _`cuttlefish/tags`: https://quay.io/repository/biocontainers/cuttlefish?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cuttlefish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cuttlefish/README.html