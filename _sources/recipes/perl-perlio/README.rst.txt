:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perlio'
.. highlight: bash

perl-perlio
===========

.. conda:recipe:: perl-perlio/1.09
   :replaces_section_title:
   :noindex:

   On demand loader for PerlIO layers and root of PerlIO\:\:\* name space

   :homepage: http://metacpan.org/pod/PerlIO
   :license: perl_5
   :recipe: /`perl-perlio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio>`_/`1.09 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio/1.09>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perlio/1.09/meta.yaml>`_

   


.. conda:package:: perl-perlio

   |downloads_perl-perlio| |docker_perl-perlio|

   :versions:
      
      

      ``1.09-2``,  ``1.09-1``,  ``1.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perlio

   and update with::

      conda update perl-perlio

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perlio:<tag>

   (see `perl-perlio/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perlio| image:: https://img.shields.io/conda/dn/bioconda/perl-perlio.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perlio
   :alt:   (downloads)
.. |docker_perl-perlio| image:: https://quay.io/repository/biocontainers/perl-perlio/status
   :target: https://quay.io/repository/biocontainers/perl-perlio
.. _`perl-perlio/tags`: https://quay.io/repository/biocontainers/perl-perlio?tab=tags


.. raw:: html

    <script>
        var package = "perl-perlio";
        var versions = ["1.09","1.09","1.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perlio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perlio/README.html