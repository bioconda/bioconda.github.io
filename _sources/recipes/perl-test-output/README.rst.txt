:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-output'
.. highlight: bash

perl-test-output
================

.. conda:recipe:: perl-test-output
   :replaces_section_title:
   :noindex:

   Utilities to test STDOUT and STDERR messages.

   :homepage: https://github.com/briandfoy/test-output
   :license: perl_5
   :recipe: /`perl-test-output <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-output>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-output/meta.yaml>`_

   


.. conda:package:: perl-test-output

   |downloads_perl-test-output| |docker_perl-test-output|

   :versions:
      
      

      ``1.031-0``,  ``1.03-1``,  ``1.03-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-capture-tiny: 
   :depends perl-file-temp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test-output

   and update with::

      conda update perl-test-output

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test-output:<tag>

   (see `perl-test-output/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-output| image:: https://img.shields.io/conda/dn/bioconda/perl-test-output.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-output
   :alt:   (downloads)
.. |docker_perl-test-output| image:: https://quay.io/repository/biocontainers/perl-test-output/status
   :target: https://quay.io/repository/biocontainers/perl-test-output
.. _`perl-test-output/tags`: https://quay.io/repository/biocontainers/perl-test-output?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-output";
        var versions = ["1.031","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-output/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-output/README.html