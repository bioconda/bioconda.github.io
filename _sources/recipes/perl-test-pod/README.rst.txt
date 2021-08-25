:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-pod'
.. highlight: bash

perl-test-pod
=============

.. conda:recipe:: perl-test-pod
   :replaces_section_title:
   :noindex:

   check for POD errors in files

   :homepage: http://search.cpan.org/dist/Test-Pod/
   :license: perl_5
   :recipe: /`perl-test-pod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-pod/meta.yaml>`_

   


.. conda:package:: perl-test-pod

   |downloads_perl-test-pod| |docker_perl-test-pod|

   :versions:
      
      

      ``1.52-0``,  ``1.51-1``,  ``1.51-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-pod

   and update with::

      conda update perl-test-pod

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-pod:<tag>

   (see `perl-test-pod/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-pod| image:: https://img.shields.io/conda/dn/bioconda/perl-test-pod.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-pod
   :alt:   (downloads)
.. |docker_perl-test-pod| image:: https://quay.io/repository/biocontainers/perl-test-pod/status
   :target: https://quay.io/repository/biocontainers/perl-test-pod
.. _`perl-test-pod/tags`: https://quay.io/repository/biocontainers/perl-test-pod?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-pod";
        var versions = ["1.52","1.51","1.51"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-pod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-pod/README.html