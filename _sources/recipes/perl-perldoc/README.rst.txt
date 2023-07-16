:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perldoc'
.. highlight: bash

perl-perldoc
============

.. conda:recipe:: perl-perldoc
   :replaces_section_title:
   :noindex:

   Documentation Framework for Perl

   :homepage: http://metacpan.org/pod/Perldoc
   :license: perl_5
   :recipe: /`perl-perldoc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perldoc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perldoc/meta.yaml>`_

   


.. conda:package:: perl-perldoc

   |downloads_perl-perldoc| |docker_perl-perldoc|

   :versions:
      
      

      ``0.20-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-html-parser: 
   :depends perl-spiffy: 
   :depends perl-test-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perldoc

   and update with::

      conda update perl-perldoc

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perldoc:<tag>

   (see `perl-perldoc/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perldoc| image:: https://img.shields.io/conda/dn/bioconda/perl-perldoc.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perldoc
   :alt:   (downloads)
.. |docker_perl-perldoc| image:: https://quay.io/repository/biocontainers/perl-perldoc/status
   :target: https://quay.io/repository/biocontainers/perl-perldoc
.. _`perl-perldoc/tags`: https://quay.io/repository/biocontainers/perl-perldoc?tab=tags


.. raw:: html

    <script>
        var package = "perl-perldoc";
        var versions = ["0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perldoc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perldoc/README.html