:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sub-quote'
.. highlight: bash

perl-sub-quote
==============

.. conda:recipe:: perl-sub-quote
   :replaces_section_title:
   :noindex:

   Efficient generation of subroutines via string eval

   :homepage: http://metacpan.org/pod/Sub::Quote
   :license: perl_5
   :recipe: /`perl-sub-quote <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-quote>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sub-quote/meta.yaml>`_

   


.. conda:package:: perl-sub-quote

   |downloads_perl-sub-quote| |docker_perl-sub-quote|

   :versions:
      
      

      ``2.006003-2``,  ``2.006003-1``,  ``2.006003-0``,  ``2.005001-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sub-quote

   and update with::

      conda update perl-sub-quote

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sub-quote:<tag>

   (see `perl-sub-quote/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sub-quote| image:: https://img.shields.io/conda/dn/bioconda/perl-sub-quote.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sub-quote
   :alt:   (downloads)
.. |docker_perl-sub-quote| image:: https://quay.io/repository/biocontainers/perl-sub-quote/status
   :target: https://quay.io/repository/biocontainers/perl-sub-quote
.. _`perl-sub-quote/tags`: https://quay.io/repository/biocontainers/perl-sub-quote?tab=tags


.. raw:: html

    <script>
        var package = "perl-sub-quote";
        var versions = ["2.006003","2.006003","2.006003","2.005001"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sub-quote/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sub-quote/README.html