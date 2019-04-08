:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bitstring'
.. highlight: bash

bitstring
=========

.. conda:recipe:: bitstring
   :replaces_section_title:

   Simple construction\, analysis and modification of binary data.

   :homepage: https://github.com/scott-griffiths/bitstring
   :license: MIT / MIT License
   :recipe: /`bitstring <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitstring>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitstring/meta.yaml>`_

   


.. conda:package:: bitstring

   |downloads_bitstring| |docker_bitstring|

   :versions: 3.1.5-1, 3.1.5-0
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bitstring

   and update with::

      conda update bitstring

   or use the docker container::

      docker pull quay.io/biocontainers/bitstring:<tag>

   (see `bitstring/tags`_ for valid values for ``<tag>``)


.. |downloads_bitstring| image:: https://img.shields.io/conda/dn/bioconda/bitstring.svg?style=flat
   :alt:   (downloads)
.. |docker_bitstring| image:: https://quay.io/repository/biocontainers/bitstring/status
   :target: https://quay.io/repository/biocontainers/bitstring
.. _`bitstring/tags`: https://quay.io/repository/biocontainers/bitstring?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bitstring/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bitstring/README.html