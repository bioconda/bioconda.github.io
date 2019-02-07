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

   :versions: 2.07

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_perl-pod-plaintext|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-plaintext

   and update with::

      conda update perl-pod-plaintext

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-pod-plaintext


.. |required_by_perl-pod-plaintext| conda:required_by:: perl-pod-plaintext
.. |downloads_perl-pod-plaintext| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-plaintext.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-plaintext| image:: https://quay.io/repository/biocontainers/perl-pod-plaintext/status
   :target: https://quay.io/repository/biocontainers/perl-pod-plaintext







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-plaintext/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-plaintext/README.html

