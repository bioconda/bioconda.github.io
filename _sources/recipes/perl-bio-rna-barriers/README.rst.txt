:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-barriers'
.. highlight: bash

perl-bio-rna-barriers
=====================

.. conda:recipe:: perl-bio-rna-barriers
   :replaces_section_title:
   :noindex:

   Parse\, query and manipulate output of Barriers

   :homepage: https://metacpan.org/pod/Bio::RNA::Barriers
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barriers/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-barriers

   |downloads_perl-bio-rna-barriers| |docker_perl-bio-rna-barriers|

   :versions:
      
      

      ``0.03-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-slurp: 
   :depends perl-ipc-system-simple: 
   :depends perl-list-moreutils: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
   :depends perl-test-exception: 
   :depends perl-test-nowarnings: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-rna-barriers

   and update with::

      conda update perl-bio-rna-barriers

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-barriers:<tag>

   (see `perl-bio-rna-barriers/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-barriers| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-barriers
   :alt:   (downloads)
.. |docker_perl-bio-rna-barriers| image:: https://quay.io/repository/biocontainers/perl-bio-rna-barriers/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-barriers
.. _`perl-bio-rna-barriers/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-barriers?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-barriers";
        var versions = ["0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-barriers/README.html