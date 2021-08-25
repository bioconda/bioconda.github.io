:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-automatedannotation'
.. highlight: bash

perl-bio-automatedannotation
============================

.. conda:recipe:: perl-bio-automatedannotation/1.182770
   :replaces_section_title:
   :noindex:

   Automated annotation of assemblies

   :homepage: http://www.sanger.ac.uk/
   :license: open_source
   :recipe: /`perl-bio-automatedannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-automatedannotation>`_/`1.182770 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-automatedannotation/1.182770>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-automatedannotation/1.182770/meta.yaml>`_

   


.. conda:package:: perl-bio-automatedannotation

   |downloads_perl-bio-automatedannotation| |docker_perl-bio-automatedannotation|

   :versions:
      
      

      ``1.182770-1``,  ``1.182770-0``

      

   
   :depends blast: 
   :depends hmmer: 
   :depends parallel: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl: 
   :depends perl-bioperl-run: 
   :depends perl-exception-class: 
   :depends perl-file-slurper: 
   :depends perl-file-temp: 
   :depends perl-getopt-long: 
   :depends perl-moose: 
   :depends perl-text-csv: 
   :depends perl-time-piece: 
   :depends perl-xml-simple: 
   :depends prodigal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-automatedannotation

   and update with::

      conda update perl-bio-automatedannotation

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-automatedannotation:<tag>

   (see `perl-bio-automatedannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-automatedannotation| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-automatedannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-automatedannotation
   :alt:   (downloads)
.. |docker_perl-bio-automatedannotation| image:: https://quay.io/repository/biocontainers/perl-bio-automatedannotation/status
   :target: https://quay.io/repository/biocontainers/perl-bio-automatedannotation
.. _`perl-bio-automatedannotation/tags`: https://quay.io/repository/biocontainers/perl-bio-automatedannotation?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-automatedannotation";
        var versions = ["1.182770","1.182770"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-automatedannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-automatedannotation/README.html