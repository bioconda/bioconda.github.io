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

   :versions: 2.0.6, 2.0.3

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`rapidjson`  :conda:package:`samtools`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_pheniqs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pheniqs

   and update with::

      conda update pheniqs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pheniqs


.. |required_by_pheniqs| conda:required_by:: pheniqs
.. |downloads_pheniqs| image:: https://img.shields.io/conda/dn/bioconda/pheniqs.svg?style=flat
   :alt:   (downloads)
.. |docker_pheniqs| image:: https://quay.io/repository/biocontainers/pheniqs/status
   :target: https://quay.io/repository/biocontainers/pheniqs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pheniqs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pheniqs/README.html

