:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-inline'
.. highlight: bash

perl-inline
===========

.. conda:recipe:: perl-inline
   :replaces_section_title:
   :noindex:

   Write Perl Subroutines in Other Programming Languages

   :homepage: https://github.com/ingydotnet/inline-pm
   :license: perl_5
   :recipe: /`perl-inline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-inline/meta.yaml>`_

   


.. conda:package:: perl-inline

   |downloads_perl-inline| |docker_perl-inline|

   :versions:
      
      

      ``0.83-1``,  ``0.83-0``,  ``0.82-0``,  ``0.80-3``,  ``0.80-2``,  ``0.80-1``,  ``0.80-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-md5: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-inline

   and update with::

      conda update perl-inline

   or use the docker container::

      docker pull quay.io/biocontainers/perl-inline:<tag>

   (see `perl-inline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-inline| image:: https://img.shields.io/conda/dn/bioconda/perl-inline.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-inline
   :alt:   (downloads)
.. |docker_perl-inline| image:: https://quay.io/repository/biocontainers/perl-inline/status
   :target: https://quay.io/repository/biocontainers/perl-inline
.. _`perl-inline/tags`: https://quay.io/repository/biocontainers/perl-inline?tab=tags


.. raw:: html

    <script>
        var package = "perl-inline";
        var versions = ["0.83","0.83","0.82","0.80","0.80"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-inline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-inline/README.html