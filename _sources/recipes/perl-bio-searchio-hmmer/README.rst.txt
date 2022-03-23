:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-searchio-hmmer'
.. highlight: bash

perl-bio-searchio-hmmer
=======================

.. conda:recipe:: perl-bio-searchio-hmmer
   :replaces_section_title:
   :noindex:

   A parser for HMMER2 and HMMER3 output \(hmmscan\, hmmsearch\, hmmpfam\)

   :homepage: https://metacpan.org/release/Bio-SearchIO-hmmer
   :license: perl_5
   :recipe: /`perl-bio-searchio-hmmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-searchio-hmmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-searchio-hmmer/meta.yaml>`_

   


.. conda:package:: perl-bio-searchio-hmmer

   |downloads_perl-bio-searchio-hmmer| |docker_perl-bio-searchio-hmmer|

   :versions:
      
      

      ``1.7.3-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-core: 
   :depends perl-db_file: 
   :depends perl-io-string: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-searchio-hmmer

   and update with::

      conda update perl-bio-searchio-hmmer

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-searchio-hmmer:<tag>

   (see `perl-bio-searchio-hmmer/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-searchio-hmmer| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-searchio-hmmer.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-searchio-hmmer
   :alt:   (downloads)
.. |docker_perl-bio-searchio-hmmer| image:: https://quay.io/repository/biocontainers/perl-bio-searchio-hmmer/status
   :target: https://quay.io/repository/biocontainers/perl-bio-searchio-hmmer
.. _`perl-bio-searchio-hmmer/tags`: https://quay.io/repository/biocontainers/perl-bio-searchio-hmmer?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-searchio-hmmer";
        var versions = ["1.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-searchio-hmmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-searchio-hmmer/README.html