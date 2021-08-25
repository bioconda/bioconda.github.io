:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-file-compare'
.. highlight: bash

perl-file-compare
=================

.. conda:recipe:: perl-file-compare/1.1006
   :replaces_section_title:
   :noindex:

   Compare files or filehandles

   :homepage: http://metacpan.org/pod/File::Compare
   :license: perl_5
   :recipe: /`perl-file-compare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-compare>`_/`1.1006 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-compare/1.1006>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-file-compare/1.1006/meta.yaml>`_

   


.. conda:package:: perl-file-compare

   |downloads_perl-file-compare| |docker_perl-file-compare|

   :versions:
      
      

      ``1.1006-1``,  ``1.1006-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-file-compare

   and update with::

      conda update perl-file-compare

   or use the docker container::

      docker pull quay.io/biocontainers/perl-file-compare:<tag>

   (see `perl-file-compare/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-file-compare| image:: https://img.shields.io/conda/dn/bioconda/perl-file-compare.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-file-compare
   :alt:   (downloads)
.. |docker_perl-file-compare| image:: https://quay.io/repository/biocontainers/perl-file-compare/status
   :target: https://quay.io/repository/biocontainers/perl-file-compare
.. _`perl-file-compare/tags`: https://quay.io/repository/biocontainers/perl-file-compare?tab=tags


.. raw:: html

    <script>
        var package = "perl-file-compare";
        var versions = ["1.1006","1.1006"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-file-compare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-file-compare/README.html