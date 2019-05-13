:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-carp'
.. highlight: bash

perl-carp
=========

.. conda:recipe:: perl-carp/1.38
   :replaces_section_title:

   alternative warn and die for modules

   :homepage: http://metacpan.org/pod/Carp
   :license: perl_5
   :recipe: /`perl-carp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp>`_/`1.38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp/1.38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-carp/1.38/meta.yaml>`_

   


.. conda:package:: perl-carp

   |downloads_perl-carp| |docker_perl-carp|

   :versions: 1.38-3, 1.38-2, 1.38-1, 1.38-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter: 
   :depends perl-extutils-makemaker: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-carp

   and update with::

      conda update perl-carp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-carp:<tag>

   (see `perl-carp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-carp| image:: https://img.shields.io/conda/dn/bioconda/perl-carp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-carp
   :alt:   (downloads)
.. |docker_perl-carp| image:: https://quay.io/repository/biocontainers/perl-carp/status
   :target: https://quay.io/repository/biocontainers/perl-carp
.. _`perl-carp/tags`: https://quay.io/repository/biocontainers/perl-carp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-carp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-carp/README.html