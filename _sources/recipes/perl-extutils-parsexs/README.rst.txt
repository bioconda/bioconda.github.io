:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-extutils-parsexs'
.. highlight: bash

perl-extutils-parsexs
=====================

.. conda:recipe:: perl-extutils-parsexs
   :replaces_section_title:
   :noindex:

   converts Perl XS code into C code

   :homepage: http://metacpan.org/pod/ExtUtils::ParseXS
   :license: unknown
   :recipe: /`perl-extutils-parsexs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-parsexs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-extutils-parsexs/meta.yaml>`_

   


.. conda:package:: perl-extutils-parsexs

   |downloads_perl-extutils-parsexs| |docker_perl-extutils-parsexs|

   :versions:
      
      

      ``3.35-1``,  ``3.35-0``,  ``3.28-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-extutils-cbuilder: 
   :depends perl-extutils-makemaker: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-extutils-parsexs

   and update with::

      conda update perl-extutils-parsexs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-extutils-parsexs:<tag>

   (see `perl-extutils-parsexs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-extutils-parsexs| image:: https://img.shields.io/conda/dn/bioconda/perl-extutils-parsexs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-extutils-parsexs
   :alt:   (downloads)
.. |docker_perl-extutils-parsexs| image:: https://quay.io/repository/biocontainers/perl-extutils-parsexs/status
   :target: https://quay.io/repository/biocontainers/perl-extutils-parsexs
.. _`perl-extutils-parsexs/tags`: https://quay.io/repository/biocontainers/perl-extutils-parsexs?tab=tags


.. raw:: html

    <script>
        var package = "perl-extutils-parsexs";
        var versions = ["3.35","3.35","3.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-extutils-parsexs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-extutils-parsexs/README.html