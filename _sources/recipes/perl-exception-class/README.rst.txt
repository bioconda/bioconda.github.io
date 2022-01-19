:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-exception-class'
.. highlight: bash

perl-exception-class
====================

.. conda:recipe:: perl-exception-class
   :replaces_section_title:
   :noindex:

   A module that allows you to declare real exception classes in Perl

   :homepage: http://metacpan.org/release/Exception-Class
   :license: perl_5
   :recipe: /`perl-exception-class <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exception-class>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-exception-class/meta.yaml>`_

   


.. conda:package:: perl-exception-class

   |downloads_perl-exception-class| |docker_perl-exception-class|

   :versions:
      
      

      ``1.44-1``,  ``1.44-0``,  ``1.40-2``,  ``1.40-1``,  ``1.40-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-class-data-inheritable: 
   :depends perl-devel-stacktrace: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-exception-class

   and update with::

      conda update perl-exception-class

   or use the docker container::

      docker pull quay.io/biocontainers/perl-exception-class:<tag>

   (see `perl-exception-class/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-exception-class| image:: https://img.shields.io/conda/dn/bioconda/perl-exception-class.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-exception-class
   :alt:   (downloads)
.. |docker_perl-exception-class| image:: https://quay.io/repository/biocontainers/perl-exception-class/status
   :target: https://quay.io/repository/biocontainers/perl-exception-class
.. _`perl-exception-class/tags`: https://quay.io/repository/biocontainers/perl-exception-class?tab=tags


.. raw:: html

    <script>
        var package = "perl-exception-class";
        var versions = ["1.44","1.44","1.40","1.40","1.40"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-exception-class/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-exception-class/README.html