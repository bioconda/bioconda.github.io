:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-falconc'
.. highlight: bash

pb-falconc
==========

.. conda:recipe:: pb-falconc
   :replaces_section_title:

   C utilities for PacBio assembly \(pb\-falcon etc.\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-falconc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falconc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-falconc/meta.yaml>`_

   


.. conda:package:: pb-falconc

   |downloads_pb-falconc| |docker_pb-falconc|

   :versions: 0.1.2-0, 0.1.1-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends pcre: >=8.43,<9.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pb-falconc

   and update with::

      conda update pb-falconc

   or use the docker container::

      docker pull quay.io/biocontainers/pb-falconc:<tag>

   (see `pb-falconc/tags`_ for valid values for ``<tag>``)


.. |downloads_pb-falconc| image:: https://img.shields.io/conda/dn/bioconda/pb-falconc.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-falconc
   :alt:   (downloads)
.. |docker_pb-falconc| image:: https://quay.io/repository/biocontainers/pb-falconc/status
   :target: https://quay.io/repository/biocontainers/pb-falconc
.. _`pb-falconc/tags`: https://quay.io/repository/biocontainers/pb-falconc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-falconc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-falconc/README.html