:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-barmap'
.. highlight: bash

perl-bio-rna-barmap
===================

.. conda:recipe:: perl-bio-rna-barmap
   :replaces_section_title:
   :noindex:

   Parse and query BarMap mappings.

   :homepage: https://metacpan.org/pod/Bio::RNA::BarMap
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-barmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-barmap/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-barmap

   |downloads_perl-bio-rna-barmap| |docker_perl-bio-rna-barmap|

   :versions:
      
      

      ``0.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-ipc-system-simple: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
   :depends perl-test-exception: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-rna-barmap

   and update with::

      conda update perl-bio-rna-barmap

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-barmap:<tag>

   (see `perl-bio-rna-barmap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-barmap| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-barmap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-barmap
   :alt:   (downloads)
.. |docker_perl-bio-rna-barmap| image:: https://quay.io/repository/biocontainers/perl-bio-rna-barmap/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-barmap
.. _`perl-bio-rna-barmap/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-barmap?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-barmap";
        var versions = ["0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-barmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-barmap/README.html