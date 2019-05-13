:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-types'
.. highlight: bash

perl-moosex-types
=================

.. conda:recipe:: perl-moosex-types
   :replaces_section_title:

   Organise your Moose types in libraries

   :homepage: https://github.com/moose/MooseX-Types
   :license: perl_5
   :recipe: /`perl-moosex-types <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-types/meta.yaml>`_

   


.. conda:package:: perl-moosex-types

   |downloads_perl-moosex-types| |docker_perl-moosex-types|

   :versions: 0.50-1, 0.50-0, 0.46-2, 0.46-1, 0.46-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-carp-clan: 
   :depends perl-exporter: 
   :depends perl-module-runtime: 
   :depends perl-moose: 
   :depends perl-namespace-autoclean: 
   :depends perl-sub-exporter: 
   :depends perl-sub-exporter-formethods: 
   :depends perl-sub-install: 
   :depends perl-sub-name: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-types

   and update with::

      conda update perl-moosex-types

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-types:<tag>

   (see `perl-moosex-types/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-types| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-types.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-types
   :alt:   (downloads)
.. |docker_perl-moosex-types| image:: https://quay.io/repository/biocontainers/perl-moosex-types/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-types
.. _`perl-moosex-types/tags`: https://quay.io/repository/biocontainers/perl-moosex-types?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-types/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-types/README.html