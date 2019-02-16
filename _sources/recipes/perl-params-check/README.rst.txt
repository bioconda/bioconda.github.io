:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-params-check'
.. highlight: bash

perl-params-check
=================

.. conda:recipe:: perl-params-check/0.38
   :replaces_section_title:

   Templated based param validation

   :homepage: http://metacpan.org/pod/Params::Check
   :license: perl_5
   :recipe: /`perl-params-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check>`_/`0.38 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check/0.38>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-params-check/0.38/meta.yaml>`_

   


.. conda:package:: perl-params-check

   |downloads_perl-params-check| |docker_perl-params-check|

   :versions: 0.38-1, 0.38-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-params-check

   and update with::

      conda update perl-params-check

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-params-check:<tag>

   (see `perl-params-check/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-params-check| image:: https://img.shields.io/conda/dn/bioconda/perl-params-check.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-params-check| image:: https://quay.io/repository/biocontainers/perl-params-check/status
   :target: https://quay.io/repository/biocontainers/perl-params-check
.. _`perl-params-check/tags`: https://quay.io/repository/biocontainers/perl-params-check?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-params-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-params-check/README.html