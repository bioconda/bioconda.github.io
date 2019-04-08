:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-inspector'
.. highlight: bash

perl-class-inspector
====================

.. conda:recipe:: perl-class-inspector
   :replaces_section_title:

   Get information about a class and its structure

   :homepage: http://metacpan.org/pod/Class-Inspector
   :license: perl_5
   :recipe: /`perl-class-inspector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-inspector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-inspector/meta.yaml>`_

   


.. conda:package:: perl-class-inspector

   |downloads_perl-class-inspector| |docker_perl-class-inspector|

   :versions: 1.32-1, 1.32-0, 1.28-2, 1.28-1, 1.28-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-inspector

   and update with::

      conda update perl-class-inspector

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-inspector:<tag>

   (see `perl-class-inspector/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-inspector| image:: https://img.shields.io/conda/dn/bioconda/perl-class-inspector.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-inspector| image:: https://quay.io/repository/biocontainers/perl-class-inspector/status
   :target: https://quay.io/repository/biocontainers/perl-class-inspector
.. _`perl-class-inspector/tags`: https://quay.io/repository/biocontainers/perl-class-inspector?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-inspector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-inspector/README.html