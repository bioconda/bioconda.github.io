:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-das'
.. highlight: bash

perl-bio-das
============

.. conda:recipe:: perl-bio-das
   :replaces_section_title:
   :noindex:

   Client\-side library for Distributed Genome Annotation System

   :homepage: http://metacpan.org/pod/Bio::Das
   :license: artistic_2
   :recipe: /`perl-bio-das <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-das>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-das/meta.yaml>`_

   


.. conda:package:: perl-bio-das

   |downloads_perl-bio-das| |docker_perl-bio-das|

   :versions:
      
      

      ``1.17-0``

      

   
   :depends perl-bioperl-core: 
   :depends perl-html-parser: 
   :depends perl-mime-base64: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-bio-das

   and update with::

      conda update perl-bio-das

   or use the docker container::

      docker pull quay.io/biocontainers/perl-bio-das:<tag>

   (see `perl-bio-das/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-das| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-das.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-das
   :alt:   (downloads)
.. |docker_perl-bio-das| image:: https://quay.io/repository/biocontainers/perl-bio-das/status
   :target: https://quay.io/repository/biocontainers/perl-bio-das
.. _`perl-bio-das/tags`: https://quay.io/repository/biocontainers/perl-bio-das?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-das";
        var versions = ["1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-das/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-das/README.html