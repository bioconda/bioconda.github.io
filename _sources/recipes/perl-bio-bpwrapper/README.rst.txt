:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-bpwrapper'
.. highlight: bash

perl-bio-bpwrapper
==================

.. conda:recipe:: perl-bio-bpwrapper
   :replaces_section_title:
   :noindex:

   Bio\:\:BPWrapper \-\- command\-line utilities for Bio\:\:Perl

   :homepage: http://metacpan.org/pod/Bio::BPWrapper
   :license: perl_5
   :recipe: /`perl-bio-bpwrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-bpwrapper/meta.yaml>`_

   


.. conda:package:: perl-bio-bpwrapper

   |downloads_perl-bio-bpwrapper| |docker_perl-bio-bpwrapper|

   :versions:
      
      

      ``1.15-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-db-refseq: 
   :depends perl-bioperl: 
   :depends perl-path-tiny: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-bpwrapper

   and update with::

      conda update perl-bio-bpwrapper

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-bpwrapper:<tag>

   (see `perl-bio-bpwrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-bpwrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-bpwrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-bpwrapper
   :alt:   (downloads)
.. |docker_perl-bio-bpwrapper| image:: https://quay.io/repository/biocontainers/perl-bio-bpwrapper/status
   :target: https://quay.io/repository/biocontainers/perl-bio-bpwrapper
.. _`perl-bio-bpwrapper/tags`: https://quay.io/repository/biocontainers/perl-bio-bpwrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-bpwrapper";
        var versions = ["1.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-bpwrapper/README.html