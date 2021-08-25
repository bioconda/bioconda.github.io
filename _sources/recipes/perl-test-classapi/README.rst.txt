:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-classapi'
.. highlight: bash

perl-test-classapi
==================

.. conda:recipe:: perl-test-classapi
   :replaces_section_title:
   :noindex:

   Provides basic first\-pass API testing for large class trees

   :homepage: https://github.com/karenetheridge/Test-ClassAPI
   :license: perl_5
   :recipe: /`perl-test-classapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-classapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-classapi/meta.yaml>`_

   


.. conda:package:: perl-test-classapi

   |downloads_perl-test-classapi| |docker_perl-test-classapi|

   :versions:
      
      

      ``1.07-1``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-class-inspector: 
   :depends perl-config-tiny: 
   :depends perl-params-util: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-classapi

   and update with::

      conda update perl-test-classapi

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-classapi:<tag>

   (see `perl-test-classapi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-classapi| image:: https://img.shields.io/conda/dn/bioconda/perl-test-classapi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-classapi
   :alt:   (downloads)
.. |docker_perl-test-classapi| image:: https://quay.io/repository/biocontainers/perl-test-classapi/status
   :target: https://quay.io/repository/biocontainers/perl-test-classapi
.. _`perl-test-classapi/tags`: https://quay.io/repository/biocontainers/perl-test-classapi?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-classapi";
        var versions = ["1.07","1.07","1.06","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-classapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-classapi/README.html