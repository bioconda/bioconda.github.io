:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cryfa'
.. highlight: bash

cryfa
=====

.. conda:recipe:: cryfa
   :replaces_section_title:

   A secure encryption tool for genomic data

   :homepage: https://github.com/smortezah/cryfa
   :license: GPL / GPL3
   :recipe: /`cryfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cryfa/meta.yaml>`_

   


.. conda:package:: cryfa

   |downloads_cryfa| |docker_cryfa|

   :versions: 18.06-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cryfa

   and update with::

      conda update cryfa

   or use the docker container::

      docker pull quay.io/biocontainers/cryfa:<tag>

   (see `cryfa/tags`_ for valid values for ``<tag>``)


.. |downloads_cryfa| image:: https://img.shields.io/conda/dn/bioconda/cryfa.svg?style=flat
   :target: https://anaconda.org/bioconda/cryfa
   :alt:   (downloads)
.. |docker_cryfa| image:: https://quay.io/repository/biocontainers/cryfa/status
   :target: https://quay.io/repository/biocontainers/cryfa
.. _`cryfa/tags`: https://quay.io/repository/biocontainers/cryfa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cryfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cryfa/README.html