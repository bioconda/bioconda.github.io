:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krocus'
.. highlight: bash

krocus
======

.. conda:recipe:: krocus
   :replaces_section_title:

   krocus performs multi\-locus sequence typing from uncorrected long reads.

   :homepage: https://github.com/andrewjpage/krocus
   :license: GPL / GPL-3.0
   :recipe: /`krocus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krocus/meta.yaml>`_

   Krocus can predict a sequence type directly from uncorrected long reads\, 
   and was designed to consume read data as it is produced\, providing results 
   in minutes.



.. conda:package:: krocus

   |downloads_krocus| |docker_krocus|

   :versions: 1.0.1-0, 1.0.0-0, 0.2.3-0, 0.2.2-1, 0.2.2-0
   
   :depends biopython: >=1.68
   :depends pyfastaq: >=3.14.0
   :depends python: >=3
   :depends setuptools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krocus

   and update with::

      conda update krocus

   or use the docker container::

      docker pull quay.io/biocontainers/krocus:<tag>

   (see `krocus/tags`_ for valid values for ``<tag>``)


.. |downloads_krocus| image:: https://img.shields.io/conda/dn/bioconda/krocus.svg?style=flat
   :alt:   (downloads)
.. |docker_krocus| image:: https://quay.io/repository/biocontainers/krocus/status
   :target: https://quay.io/repository/biocontainers/krocus
.. _`krocus/tags`: https://quay.io/repository/biocontainers/krocus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krocus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krocus/README.html