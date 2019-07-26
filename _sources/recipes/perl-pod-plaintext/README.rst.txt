:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-plaintext'
.. highlight: bash

perl-pod-plaintext
==================

.. conda:recipe:: perl-pod-plaintext/2.07
   :replaces_section_title:

   Convert POD data to formatted ASCII text

   :homepage: http://metacpan.org/pod/Pod::PlainText
   :license: perl_5
   :recipe: /`perl-pod-plaintext <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext>`_/`2.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext/2.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-plaintext/2.07/meta.yaml>`_

   


.. conda:package:: perl-pod-plaintext

   |downloads_perl-pod-plaintext| |docker_perl-pod-plaintext|

   :versions: 2.07-1, 2.07-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-plaintext

   and update with::

      conda update perl-pod-plaintext

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-plaintext:<tag>

   (see `perl-pod-plaintext/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-plaintext| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-plaintext.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-pod-plaintext
   :alt:   (downloads)
.. |docker_perl-pod-plaintext| image:: https://quay.io/repository/biocontainers/perl-pod-plaintext/status
   :target: https://quay.io/repository/biocontainers/perl-pod-plaintext
.. _`perl-pod-plaintext/tags`: https://quay.io/repository/biocontainers/perl-pod-plaintext?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-plaintext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-plaintext/README.html