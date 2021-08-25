:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-pod-coverage'
.. highlight: bash

perl-test-pod-coverage
======================

.. conda:recipe:: perl-test-pod-coverage/1.10
   :replaces_section_title:
   :noindex:

   Check for pod coverage in your distribution

   :homepage: http://metacpan.org/pod/Test::Pod::Coverage
   :license: artistic_2
   :recipe: /`perl-test-pod-coverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage>`_/`1.10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage/1.10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod-coverage/1.10/meta.yaml>`_

   


.. conda:package:: perl-test-pod-coverage

   |downloads_perl-test-pod-coverage| |docker_perl-test-pod-coverage|

   :versions:
      
      

      ``1.10-2``,  ``1.10-1``,  ``1.10-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-pod-coverage: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-pod-coverage

   and update with::

      conda update perl-test-pod-coverage

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-pod-coverage:<tag>

   (see `perl-test-pod-coverage/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-pod-coverage| image:: https://img.shields.io/conda/dn/bioconda/perl-test-pod-coverage.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-pod-coverage
   :alt:   (downloads)
.. |docker_perl-test-pod-coverage| image:: https://quay.io/repository/biocontainers/perl-test-pod-coverage/status
   :target: https://quay.io/repository/biocontainers/perl-test-pod-coverage
.. _`perl-test-pod-coverage/tags`: https://quay.io/repository/biocontainers/perl-test-pod-coverage?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-pod-coverage";
        var versions = ["1.10","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-pod-coverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-pod-coverage/README.html