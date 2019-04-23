:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-clone'
.. highlight: bash

perl-clone
==========

.. conda:recipe:: perl-clone
   :replaces_section_title:

   recursively copy Perl datatypes

   :homepage: http://metacpan.org/pod/Clone
   :license: perl_5
   :recipe: /`perl-clone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-clone/meta.yaml>`_

   


.. conda:package:: perl-clone

   |downloads_perl-clone| |docker_perl-clone|

   :versions: 0.41-0, 0.39-0, 0.38-1, 0.38-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-autoloader: 
   :depends perl-dynaloader: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-clone

   and update with::

      conda update perl-clone

   or use the docker container::

      docker pull quay.io/biocontainers/perl-clone:<tag>

   (see `perl-clone/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-clone| image:: https://img.shields.io/conda/dn/bioconda/perl-clone.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-clone| image:: https://quay.io/repository/biocontainers/perl-clone/status
   :target: https://quay.io/repository/biocontainers/perl-clone
.. _`perl-clone/tags`: https://quay.io/repository/biocontainers/perl-clone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-clone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-clone/README.html