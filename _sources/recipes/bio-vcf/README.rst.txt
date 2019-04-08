:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bio-vcf'
.. highlight: bash

bio-vcf
=======

.. conda:recipe:: bio-vcf
   :replaces_section_title:

   Smart VCF parser

   :homepage: https://github.com/pjotrp/bioruby-vcf
   :license: MIT
   :recipe: /`bio-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bio-vcf/meta.yaml>`_

   


.. conda:package:: bio-vcf

   |downloads_bio-vcf| |docker_bio-vcf|

   :versions: 0.9.2-0, 0.9.1-2, 0.9.1-1, 0.9.1-0, 0.9.0-0
   
   :depends ruby: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bio-vcf

   and update with::

      conda update bio-vcf

   or use the docker container::

      docker pull quay.io/biocontainers/bio-vcf:<tag>

   (see `bio-vcf/tags`_ for valid values for ``<tag>``)


.. |downloads_bio-vcf| image:: https://img.shields.io/conda/dn/bioconda/bio-vcf.svg?style=flat
   :alt:   (downloads)
.. |docker_bio-vcf| image:: https://quay.io/repository/biocontainers/bio-vcf/status
   :target: https://quay.io/repository/biocontainers/bio-vcf
.. _`bio-vcf/tags`: https://quay.io/repository/biocontainers/bio-vcf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bio-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bio-vcf/README.html