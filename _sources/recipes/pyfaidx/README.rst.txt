:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfaidx'
.. highlight: bash

pyfaidx
=======

.. conda:recipe:: pyfaidx
   :replaces_section_title:

   pyfaidx\: efficient pythonic random access to fasta subsequences

   :homepage: http://mattshirley.com
   :license: BSD / BSD License
   :recipe: /`pyfaidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfaidx/meta.yaml>`_
   :links: biotools: :biotools:`pyfaidx`, doi: :doi:`10.7287/peerj.preprints.970v1`

   


.. conda:package:: pyfaidx

   |downloads_pyfaidx| |docker_pyfaidx|

   :versions: 0.5.5.2-0, 0.5.4.1-0, 0.5.3-0, 0.5.1-0, 0.5.0-0, 0.4.9.2-0, 0.4.8.1-3, 0.4.8.1-2, 0.4.8.1-0, 0.4.7.1-2, 0.4.7.1-0, 0.4.4-0
   
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfaidx

   and update with::

      conda update pyfaidx

   or use the docker container::

      docker pull quay.io/biocontainers/pyfaidx:<tag>

   (see `pyfaidx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfaidx| image:: https://img.shields.io/conda/dn/bioconda/pyfaidx.svg?style=flat
   :alt:   (downloads)
.. |docker_pyfaidx| image:: https://quay.io/repository/biocontainers/pyfaidx/status
   :target: https://quay.io/repository/biocontainers/pyfaidx
.. _`pyfaidx/tags`: https://quay.io/repository/biocontainers/pyfaidx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfaidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfaidx/README.html