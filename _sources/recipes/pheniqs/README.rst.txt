:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pheniqs'
.. highlight: bash

pheniqs
=======

.. conda:recipe:: pheniqs
   :replaces_section_title:

   Pheniqs is a generic high throughput DNA sequence demultiplexer and quality analyzer written in multi threaded C\+\+11. Pheniqs is pronounced phoe·nix and stands for PHilology ENcoder wIth Quality Statistics.

   :homepage: http://biosails.github.io/pheniqs
   :developer docs: https://github.com/biosails/pheniqs
   :license: GPL3
   :recipe: /`pheniqs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pheniqs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pheniqs/meta.yaml>`_

   


.. conda:package:: pheniqs

   |downloads_pheniqs| |docker_pheniqs|

   :versions: 2.0.6-2, 2.0.6-1, 2.0.6-0, 2.0.3-1, 2.0.3-0
   
   :depends htslib: >=1.10.2,<1.11.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :depends rapidjson: 
   :depends samtools: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pheniqs

   and update with::

      conda update pheniqs

   or use the docker container::

      docker pull quay.io/biocontainers/pheniqs:<tag>

   (see `pheniqs/tags`_ for valid values for ``<tag>``)


.. |downloads_pheniqs| image:: https://img.shields.io/conda/dn/bioconda/pheniqs.svg?style=flat
   :target: https://anaconda.org/bioconda/pheniqs
   :alt:   (downloads)
.. |docker_pheniqs| image:: https://quay.io/repository/biocontainers/pheniqs/status
   :target: https://quay.io/repository/biocontainers/pheniqs
.. _`pheniqs/tags`: https://quay.io/repository/biocontainers/pheniqs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pheniqs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pheniqs/README.html