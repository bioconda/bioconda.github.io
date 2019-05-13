:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-rnacentral'
.. highlight: bash

python-rnacentral
=================

.. conda:recipe:: python-rnacentral
   :replaces_section_title:

   This tool exploits the RNAcentral public APIs to automatically retrieve sequences \(converted to the FASTA format\) and the related metadata\, starting with one or a list of RNAcentral IDs

   :homepage: https://github.com/fabio-cumbo/RNAcentral-data-retrieval-tool
   :license: BSD / BSD 2-Clause License
   :recipe: /`python-rnacentral <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-rnacentral>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-rnacentral/meta.yaml>`_

   


.. conda:package:: python-rnacentral

   |downloads_python-rnacentral| |docker_python-rnacentral|

   :versions: 1.0.0-0
   
   :depends python: >=2.7,<3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-rnacentral

   and update with::

      conda update python-rnacentral

   or use the docker container::

      docker pull quay.io/biocontainers/python-rnacentral:<tag>

   (see `python-rnacentral/tags`_ for valid values for ``<tag>``)


.. |downloads_python-rnacentral| image:: https://img.shields.io/conda/dn/bioconda/python-rnacentral.svg?style=flat
   :target: https://anaconda.org/bioconda/python-rnacentral
   :alt:   (downloads)
.. |docker_python-rnacentral| image:: https://quay.io/repository/biocontainers/python-rnacentral/status
   :target: https://quay.io/repository/biocontainers/python-rnacentral
.. _`python-rnacentral/tags`: https://quay.io/repository/biocontainers/python-rnacentral?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-rnacentral/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-rnacentral/README.html