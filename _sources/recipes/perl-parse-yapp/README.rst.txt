:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parse-yapp'
.. highlight: bash

perl-parse-yapp
===============

.. conda:recipe:: perl-parse-yapp
   :replaces_section_title:
   :noindex:

   A perl frontend to the Parse\:\:Yapp module

   :homepage: http://metacpan.org/pod/Parse::Yapp
   :license: unknown
   :recipe: /`perl-parse-yapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parse-yapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parse-yapp/meta.yaml>`_

   


.. conda:package:: perl-parse-yapp

   |downloads_perl-parse-yapp| |docker_perl-parse-yapp|

   :versions:
      
      

      ``1.21-1``,  ``1.21-0``,  ``1.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-parse-yapp

   and update with::

      conda update perl-parse-yapp

   or use the docker container::

      docker pull quay.io/biocontainers/perl-parse-yapp:<tag>

   (see `perl-parse-yapp/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parse-yapp| image:: https://img.shields.io/conda/dn/bioconda/perl-parse-yapp.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parse-yapp
   :alt:   (downloads)
.. |docker_perl-parse-yapp| image:: https://quay.io/repository/biocontainers/perl-parse-yapp/status
   :target: https://quay.io/repository/biocontainers/perl-parse-yapp
.. _`perl-parse-yapp/tags`: https://quay.io/repository/biocontainers/perl-parse-yapp?tab=tags


.. raw:: html

    <script>
        var package = "perl-parse-yapp";
        var versions = ["1.21","1.21","1.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parse-yapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parse-yapp/README.html