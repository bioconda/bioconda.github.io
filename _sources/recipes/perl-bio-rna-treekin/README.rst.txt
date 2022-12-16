:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-rna-treekin'
.. highlight: bash

perl-bio-rna-treekin
====================

.. conda:recipe:: perl-bio-rna-treekin
   :replaces_section_title:
   :noindex:

   Classes for working with Treekin output.

   :homepage: https://metacpan.org/pod/Bio::RNA::Treekin
   :license: GPL-3.0-or-later
   :recipe: /`perl-bio-rna-treekin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-treekin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-rna-treekin/meta.yaml>`_

   


.. conda:package:: perl-bio-rna-treekin

   |downloads_perl-bio-rna-treekin| |docker_perl-bio-rna-treekin|

   :versions:
      
      

      ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-crc: 
   :depends perl-file-slurp: 
   :depends perl-io-stringy: 
   :depends perl-ipc-system-simple: 
   :depends perl-moose: 
   :depends perl-moosex-strictconstructor: 
   :depends perl-namespace-autoclean: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-rna-treekin

   and update with::

      conda update perl-bio-rna-treekin

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-rna-treekin:<tag>

   (see `perl-bio-rna-treekin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-rna-treekin| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-rna-treekin.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-rna-treekin
   :alt:   (downloads)
.. |docker_perl-bio-rna-treekin| image:: https://quay.io/repository/biocontainers/perl-bio-rna-treekin/status
   :target: https://quay.io/repository/biocontainers/perl-bio-rna-treekin
.. _`perl-bio-rna-treekin/tags`: https://quay.io/repository/biocontainers/perl-bio-rna-treekin?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-rna-treekin";
        var versions = ["0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-rna-treekin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-rna-treekin/README.html