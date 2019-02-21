:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-class-method-modifiers'
.. highlight: bash

perl-class-method-modifiers
===========================

.. conda:recipe:: perl-class-method-modifiers
   :replaces_section_title:

   Provides Moose\-like method modifiers

   :homepage: https://github.com/moose/Class-Method-Modifiers
   :license: perl_5
   :recipe: /`perl-class-method-modifiers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-method-modifiers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-class-method-modifiers/meta.yaml>`_

   


.. conda:package:: perl-class-method-modifiers

   |downloads_perl-class-method-modifiers| |docker_perl-class-method-modifiers|

   :versions: 2.12-0, 2.11-2, 2.11-1, 2.11-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-class-method-modifiers

   and update with::

      conda update perl-class-method-modifiers

   or use the docker container::

      docker pull quay.io/biocontainers/perl-class-method-modifiers:<tag>

   (see `perl-class-method-modifiers/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-class-method-modifiers| image:: https://img.shields.io/conda/dn/bioconda/perl-class-method-modifiers.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-class-method-modifiers| image:: https://quay.io/repository/biocontainers/perl-class-method-modifiers/status
   :target: https://quay.io/repository/biocontainers/perl-class-method-modifiers
.. _`perl-class-method-modifiers/tags`: https://quay.io/repository/biocontainers/perl-class-method-modifiers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-class-method-modifiers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-class-method-modifiers/README.html