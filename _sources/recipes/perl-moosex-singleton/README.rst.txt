:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-singleton'
.. highlight: bash

perl-moosex-singleton
=====================

.. conda:recipe:: perl-moosex-singleton
   :replaces_section_title:

   Turn your Moose class into a singleton

   :homepage: https://github.com/moose/MooseX-Singleton
   :license: perl_5
   :recipe: /`perl-moosex-singleton <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-singleton>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-singleton/meta.yaml>`_

   


.. conda:package:: perl-moosex-singleton

   |downloads_perl-moosex-singleton| |docker_perl-moosex-singleton|

   :versions: 0.30-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-moose: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-singleton

   and update with::

      conda update perl-moosex-singleton

   or use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-singleton:<tag>

   (see `perl-moosex-singleton/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-singleton| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-singleton.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-singleton| image:: https://quay.io/repository/biocontainers/perl-moosex-singleton/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-singleton
.. _`perl-moosex-singleton/tags`: https://quay.io/repository/biocontainers/perl-moosex-singleton?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-singleton/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-singleton/README.html