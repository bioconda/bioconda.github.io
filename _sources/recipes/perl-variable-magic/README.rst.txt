:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-variable-magic'
.. highlight: bash

perl-variable-magic
===================

.. conda:recipe:: perl-variable-magic/0.61
   :replaces_section_title:
   :noindex:

   Associate user\-defined magic to variables from Perl.

   :homepage: http://search.cpan.org/dist/Variable-Magic/
   :license: perl_5
   :recipe: /`perl-variable-magic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic>`_/`0.61 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic/0.61>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-variable-magic/0.61/meta.yaml>`_

   


.. conda:package:: perl-variable-magic

   |downloads_perl-variable-magic| |docker_perl-variable-magic|

   :versions:
      
      

      ``0.61-1``,  ``0.61-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :depends perl-xsloader: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-variable-magic

   and update with::

      conda update perl-variable-magic

   or use the docker container::

      docker pull quay.io/biocontainers/perl-variable-magic:<tag>

   (see `perl-variable-magic/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-variable-magic| image:: https://img.shields.io/conda/dn/bioconda/perl-variable-magic.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-variable-magic
   :alt:   (downloads)
.. |docker_perl-variable-magic| image:: https://quay.io/repository/biocontainers/perl-variable-magic/status
   :target: https://quay.io/repository/biocontainers/perl-variable-magic
.. _`perl-variable-magic/tags`: https://quay.io/repository/biocontainers/perl-variable-magic?tab=tags


.. raw:: html

    <script>
        var package = "perl-variable-magic";
        var versions = ["0.61","0.61"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-variable-magic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-variable-magic/README.html