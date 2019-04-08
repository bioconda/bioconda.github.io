:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-canary-stability'
.. highlight: bash

perl-canary-stability
=====================

.. conda:recipe:: perl-canary-stability
   :replaces_section_title:

   canary to check perl compatibility for schmorp\'s modules

   :homepage: http://metacpan.org/pod/Canary::Stability
   :license: unknown
   :recipe: /`perl-canary-stability <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-canary-stability/meta.yaml>`_

   


.. conda:package:: perl-canary-stability

   |downloads_perl-canary-stability| |docker_perl-canary-stability|

   :versions: 2012-0, 2006-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-canary-stability

   and update with::

      conda update perl-canary-stability

   or use the docker container::

      docker pull quay.io/biocontainers/perl-canary-stability:<tag>

   (see `perl-canary-stability/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-canary-stability| image:: https://img.shields.io/conda/dn/bioconda/perl-canary-stability.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-canary-stability| image:: https://quay.io/repository/biocontainers/perl-canary-stability/status
   :target: https://quay.io/repository/biocontainers/perl-canary-stability
.. _`perl-canary-stability/tags`: https://quay.io/repository/biocontainers/perl-canary-stability?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-canary-stability/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-canary-stability/README.html