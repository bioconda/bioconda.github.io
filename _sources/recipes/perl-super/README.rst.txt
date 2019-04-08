:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-super'
.. highlight: bash

perl-super
==========

.. conda:recipe:: perl-super
   :replaces_section_title:

   control superclass method dispatch

   :homepage: http://metacpan.org/pod/SUPER
   :license: perl_5
   :recipe: /`perl-super <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-super/meta.yaml>`_

   


.. conda:package:: perl-super

   |downloads_perl-super| |docker_perl-super|

   :versions: 1.20141117-1, 1.20141117-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :depends perl-carp: 
   :depends perl-sub-identify: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-super

   and update with::

      conda update perl-super

   or use the docker container::

      docker pull quay.io/biocontainers/perl-super:<tag>

   (see `perl-super/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-super| image:: https://img.shields.io/conda/dn/bioconda/perl-super.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-super| image:: https://quay.io/repository/biocontainers/perl-super/status
   :target: https://quay.io/repository/biocontainers/perl-super
.. _`perl-super/tags`: https://quay.io/repository/biocontainers/perl-super?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-super/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-super/README.html