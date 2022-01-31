:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl-run'
.. highlight: bash

perl-bioperl-run
================

.. conda:recipe:: perl-bioperl-run
   :replaces_section_title:
   :noindex:

   BioPerl\-Run \- wrapper toolkit

   :homepage: http://metacpan.org/pod/BioPerl-Run
   :license: perl_5
   :recipe: /`perl-bioperl-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run/meta.yaml>`_

   


.. conda:package:: perl-bioperl-run

   |downloads_perl-bioperl-run| |docker_perl-bioperl-run|

   :versions:
      
      

      ``1.007002-6``,  ``1.007002-5``,  ``1.007002-4``,  ``1.007002-3``,  ``1.006900-2``,  ``1.006900-1``,  ``1.006900-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-samtools: 
   :depends perl-bioperl-core: 
   :depends perl-file-sort: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bioperl-run

   and update with::

      conda update perl-bioperl-run

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bioperl-run:<tag>

   (see `perl-bioperl-run/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bioperl-run| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-run.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl-run
   :alt:   (downloads)
.. |docker_perl-bioperl-run| image:: https://quay.io/repository/biocontainers/perl-bioperl-run/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-run
.. _`perl-bioperl-run/tags`: https://quay.io/repository/biocontainers/perl-bioperl-run?tab=tags


.. raw:: html

    <script>
        var package = "perl-bioperl-run";
        var versions = ["1.007002","1.007002","1.007002","1.007002","1.006900"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-run/README.html