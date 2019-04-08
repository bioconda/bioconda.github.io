:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mozilla-ca'
.. highlight: bash

perl-mozilla-ca
===============

.. conda:recipe:: perl-mozilla-ca
   :replaces_section_title:

   Mozilla\'s CA cert bundle in PEM format

   :homepage: http://metacpan.org/pod/Mozilla::CA
   :license: unknown
   :recipe: /`perl-mozilla-ca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mozilla-ca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mozilla-ca/meta.yaml>`_

   


.. conda:package:: perl-mozilla-ca

   |downloads_perl-mozilla-ca| |docker_perl-mozilla-ca|

   :versions: 20180117-0, 20160104-2, 20160104-1, 20160104-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mozilla-ca

   and update with::

      conda update perl-mozilla-ca

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mozilla-ca:<tag>

   (see `perl-mozilla-ca/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mozilla-ca| image:: https://img.shields.io/conda/dn/bioconda/perl-mozilla-ca.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-mozilla-ca| image:: https://quay.io/repository/biocontainers/perl-mozilla-ca/status
   :target: https://quay.io/repository/biocontainers/perl-mozilla-ca
.. _`perl-mozilla-ca/tags`: https://quay.io/repository/biocontainers/perl-mozilla-ca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mozilla-ca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mozilla-ca/README.html