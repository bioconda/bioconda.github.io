:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-clone'
.. highlight: bash

perl-moosex-clone
=================

.. conda:recipe:: perl-moosex-clone/0.06
   :replaces_section_title:

   Fine\-grained cloning support for Moose objects.

   :homepage: https://github.com/moose/MooseX-Clone
   :license: perl_5
   :recipe: /`perl-moosex-clone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone>`_/`0.06 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-clone/0.06/meta.yaml>`_

   


.. conda:package:: perl-moosex-clone

   |downloads_perl-moosex-clone| |docker_perl-moosex-clone|

   :versions: 0.06-2, 0.06-1, 0.06-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-data-visitor: 
   
   :depends perl-hash-util-fieldhash-compat: 
   
   :depends perl-namespace-autoclean: 
   
   :depends perl-storable: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-moosex-clone

   and update with::

      conda update perl-moosex-clone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-moosex-clone:<tag>

   (see `perl-moosex-clone/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-clone| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-clone.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-moosex-clone| image:: https://quay.io/repository/biocontainers/perl-moosex-clone/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-clone
.. _`perl-moosex-clone/tags`: https://quay.io/repository/biocontainers/perl-moosex-clone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-clone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-clone/README.html