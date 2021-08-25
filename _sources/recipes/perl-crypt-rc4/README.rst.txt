:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-rc4'
.. highlight: bash

perl-crypt-rc4
==============

.. conda:recipe:: perl-crypt-rc4
   :replaces_section_title:
   :noindex:

   Perl implementation of the RC4 encryption algorithm

   :homepage: http://metacpan.org/pod/Crypt-RC4
   :license: unknown
   :recipe: /`perl-crypt-rc4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-rc4/meta.yaml>`_

   


.. conda:package:: perl-crypt-rc4

   |downloads_perl-crypt-rc4| |docker_perl-crypt-rc4|

   :versions:
      
      

      ``2.02-1``,  ``2.02-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-crypt-rc4

   and update with::

      conda update perl-crypt-rc4

   or use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-rc4:<tag>

   (see `perl-crypt-rc4/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-rc4| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-rc4.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-rc4
   :alt:   (downloads)
.. |docker_perl-crypt-rc4| image:: https://quay.io/repository/biocontainers/perl-crypt-rc4/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-rc4
.. _`perl-crypt-rc4/tags`: https://quay.io/repository/biocontainers/perl-crypt-rc4?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-rc4";
        var versions = ["2.02","2.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-rc4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-rc4/README.html