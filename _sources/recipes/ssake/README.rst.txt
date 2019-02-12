:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssake'
.. highlight: bash

ssake
=====

.. conda:recipe:: ssake
   :replaces_section_title:

   SSAKE is a genomics application for de novo assembly of millions of very short DNA sequences.

   :homepage: https://github.com/warrenlr/SSAKE
   :license: GPL / GPL-2.0
   :recipe: /`ssake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake/meta.yaml>`_
   :links: biotools: :biotools:`ssake`

   


.. conda:package:: ssake

   |downloads_ssake| |docker_ssake|

   :versions: 4.0-2, 4.0-1
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-statistics-descriptive: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ssake

   and update with::

      conda update ssake

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ssake:<tag>

   (see `ssake/tags`_ for valid values for ``<tag>``)


.. |downloads_ssake| image:: https://img.shields.io/conda/dn/bioconda/ssake.svg?style=flat
   :alt:   (downloads)
.. |docker_ssake| image:: https://quay.io/repository/biocontainers/ssake/status
   :target: https://quay.io/repository/biocontainers/ssake
.. _`ssake/tags`: https://quay.io/repository/biocontainers/ssake?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssake/README.html