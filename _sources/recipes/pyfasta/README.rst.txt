:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfasta'
.. highlight: bash

pyfasta
=======

.. conda:recipe:: pyfasta
   :replaces_section_title:

   fast\, memory\-efficient\, pythonic \(and command\-line\) access to fasta sequence files

   :homepage: http://github.com/brentp/pyfasta/
   :license: MIT
   :recipe: /`pyfasta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfasta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfasta/meta.yaml>`_
   :links: biotools: :biotools:`pyfasta`

   


.. conda:package:: pyfasta

   |downloads_pyfasta| |docker_pyfasta|

   :versions: 0.5.2-0
   
   :depends numpy: 
   
   :depends python: 2.7*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyfasta

   and update with::

      conda update pyfasta

   or use the docker container::

      docker pull quay.io/biocontainers/pyfasta:<tag>

   (see `pyfasta/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfasta| image:: https://img.shields.io/conda/dn/bioconda/pyfasta.svg?style=flat
   :alt:   (downloads)
.. |docker_pyfasta| image:: https://quay.io/repository/biocontainers/pyfasta/status
   :target: https://quay.io/repository/biocontainers/pyfasta
.. _`pyfasta/tags`: https://quay.io/repository/biocontainers/pyfasta?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfasta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfasta/README.html