:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-tools-run-alignment-clustalw'
.. highlight: bash

perl-bio-tools-run-alignment-clustalw
=====================================

.. conda:recipe:: perl-bio-tools-run-alignment-clustalw
   :replaces_section_title:
   :noindex:

   Object for the calculation of a multiple sequence alignment from a set of unaligned sequences or alignments using the Clustalw program

   :homepage: https://metacpan.org/release/Bio-Tools-Run-Alignment-Clustalw
   :license: perl_5
   :recipe: /`perl-bio-tools-run-alignment-clustalw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-clustalw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-clustalw/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-run-alignment-clustalw

   |downloads_perl-bio-tools-run-alignment-clustalw| |docker_perl-bio-tools-run-alignment-clustalw|

   :versions:
      
      

      ``1.7.4-3``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``

      

   
   :depends clustalw: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-bioperl-run: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-tools-run-alignment-clustalw

   and update with::

      conda update perl-bio-tools-run-alignment-clustalw

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-tools-run-alignment-clustalw:<tag>

   (see `perl-bio-tools-run-alignment-clustalw/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-tools-run-alignment-clustalw| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-run-alignment-clustalw.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-tools-run-alignment-clustalw
   :alt:   (downloads)
.. |docker_perl-bio-tools-run-alignment-clustalw| image:: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw
.. _`perl-bio-tools-run-alignment-clustalw/tags`: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-clustalw?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-tools-run-alignment-clustalw";
        var versions = ["1.7.4","1.7.4","1.7.4","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-clustalw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-clustalw/README.html