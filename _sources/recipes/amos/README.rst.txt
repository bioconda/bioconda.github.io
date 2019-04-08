:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amos'
.. highlight: bash

amos
====

.. conda:recipe:: amos
   :replaces_section_title:

   A Modular\, Open\-Source whole genome assembler

   :homepage: http://amos.sourceforge.net/wiki/index.php/AMOS
   :license: Artistic License
   :recipe: /`amos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amos/meta.yaml>`_
   :links: biotools: :biotools:`amos`

   


.. conda:package:: amos

   |downloads_amos| |docker_amos|

   :versions: 3.1.0-3
   
   :depends jellyfish: 
   :depends mummer: 
   :depends perl-dbi: 
   :depends perl-statistics-descriptive: 
   :depends perl-threaded: 
   :depends perl-xml-parser: 
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install amos

   and update with::

      conda update amos

   or use the docker container::

      docker pull quay.io/biocontainers/amos:<tag>

   (see `amos/tags`_ for valid values for ``<tag>``)


.. |downloads_amos| image:: https://img.shields.io/conda/dn/bioconda/amos.svg?style=flat
   :alt:   (downloads)
.. |docker_amos| image:: https://quay.io/repository/biocontainers/amos/status
   :target: https://quay.io/repository/biocontainers/amos
.. _`amos/tags`: https://quay.io/repository/biocontainers/amos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amos/README.html