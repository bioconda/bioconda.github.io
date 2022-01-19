:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mro-compat'
.. highlight: bash

perl-mro-compat
===============

.. conda:recipe:: perl-mro-compat
   :replaces_section_title:
   :noindex:

   mro\:\:\* interface compatibility for Perls \< 5.9.5

   :homepage: https://metacpan.org/release/MRO-Compat
   :license: perl_5
   :recipe: /`perl-mro-compat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mro-compat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mro-compat/meta.yaml>`_

   


.. conda:package:: perl-mro-compat

   |downloads_perl-mro-compat| |docker_perl-mro-compat|

   :versions:
      
      

      ``0.13-1``,  ``0.13-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-mro-compat

   and update with::

      conda update perl-mro-compat

   or use the docker container::

      docker pull quay.io/biocontainers/perl-mro-compat:<tag>

   (see `perl-mro-compat/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mro-compat| image:: https://img.shields.io/conda/dn/bioconda/perl-mro-compat.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mro-compat
   :alt:   (downloads)
.. |docker_perl-mro-compat| image:: https://quay.io/repository/biocontainers/perl-mro-compat/status
   :target: https://quay.io/repository/biocontainers/perl-mro-compat
.. _`perl-mro-compat/tags`: https://quay.io/repository/biocontainers/perl-mro-compat?tab=tags


.. raw:: html

    <script>
        var package = "perl-mro-compat";
        var versions = ["0.13","0.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mro-compat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mro-compat/README.html