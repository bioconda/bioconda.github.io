:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-stringy'
.. highlight: bash

perl-io-stringy
===============

.. conda:recipe:: perl-io-stringy
   :replaces_section_title:
   :noindex:

   write a file which is updated atomically

   :homepage: http://metacpan.org/pod/IO-stringy
   :license: unknown
   :recipe: /`perl-io-stringy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-stringy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-stringy/meta.yaml>`_

   


.. conda:package:: perl-io-stringy

   |downloads_perl-io-stringy| |docker_perl-io-stringy|

   :versions:
      
      

      ``2.111-2``,  ``2.111-1``,  ``2.111-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-io-stringy

   and update with::

      conda update perl-io-stringy

   or use the docker container::

      docker pull quay.io/biocontainers/perl-io-stringy:<tag>

   (see `perl-io-stringy/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-stringy| image:: https://img.shields.io/conda/dn/bioconda/perl-io-stringy.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-stringy
   :alt:   (downloads)
.. |docker_perl-io-stringy| image:: https://quay.io/repository/biocontainers/perl-io-stringy/status
   :target: https://quay.io/repository/biocontainers/perl-io-stringy
.. _`perl-io-stringy/tags`: https://quay.io/repository/biocontainers/perl-io-stringy?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-stringy";
        var versions = ["2.111","2.111","2.111"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-stringy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-stringy/README.html