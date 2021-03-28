:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnablueprint'
.. highlight: bash

rnablueprint
============

.. conda:recipe:: rnablueprint
   :replaces_section_title:
   :noindex:

   The RNAblueprint library solves the problem of uniformly sampling RNA\/DNA sequences compatible to multiple structural constraints and sequence constraints.

   :homepage: https://github.com/ViennaRNA/RNAblueprint
   :license: GPL3
   :recipe: /`rnablueprint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnablueprint/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx263`

   


.. conda:package:: rnablueprint

   |downloads_rnablueprint| |docker_rnablueprint|

   :versions:
      
      

      ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python_abi: ``3.6.* *_cp36m``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnablueprint

   and update with::

      conda update rnablueprint

   or use the docker container::

      docker pull quay.io/biocontainers/rnablueprint:<tag>

   (see `rnablueprint/tags`_ for valid values for ``<tag>``)


.. |downloads_rnablueprint| image:: https://img.shields.io/conda/dn/bioconda/rnablueprint.svg?style=flat
   :target: https://anaconda.org/bioconda/rnablueprint
   :alt:   (downloads)
.. |docker_rnablueprint| image:: https://quay.io/repository/biocontainers/rnablueprint/status
   :target: https://quay.io/repository/biocontainers/rnablueprint
.. _`rnablueprint/tags`: https://quay.io/repository/biocontainers/rnablueprint?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnablueprint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnablueprint/README.html