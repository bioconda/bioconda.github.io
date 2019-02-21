:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-aliased'
.. highlight: bash

perl-aliased
============

.. conda:recipe:: perl-aliased
   :replaces_section_title:

   Use shorter versions of class names.

   :homepage: https://github.com/karenetheridge/aliased
   :license: perl_5
   :recipe: /`perl-aliased <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aliased>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-aliased/meta.yaml>`_

   


.. conda:package:: perl-aliased

   |downloads_perl-aliased| |docker_perl-aliased|

   :versions: 0.34-2, 0.34-1, 0.34-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-carp: 
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-aliased

   and update with::

      conda update perl-aliased

   or use the docker container::

      docker pull quay.io/biocontainers/perl-aliased:<tag>

   (see `perl-aliased/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-aliased| image:: https://img.shields.io/conda/dn/bioconda/perl-aliased.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-aliased| image:: https://quay.io/repository/biocontainers/perl-aliased/status
   :target: https://quay.io/repository/biocontainers/perl-aliased
.. _`perl-aliased/tags`: https://quay.io/repository/biocontainers/perl-aliased?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-aliased/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-aliased/README.html