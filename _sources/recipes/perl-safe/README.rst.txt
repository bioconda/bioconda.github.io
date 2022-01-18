:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-safe'
.. highlight: bash

perl-safe
=========

.. conda:recipe:: perl-safe/2.37
   :replaces_section_title:
   :noindex:

   Compile and execute code in restricted compartments

   :homepage: http://metacpan.org/pod/Safe
   :license: unknown
   :recipe: /`perl-safe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe>`_/`2.37 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe/2.37>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-safe/2.37/meta.yaml>`_

   


.. conda:package:: perl-safe

   |downloads_perl-safe| |docker_perl-safe|

   :versions:
      
      

      ``2.37-2``,  ``2.37-1``,  ``2.37-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-safe

   and update with::

      conda update perl-safe

   or use the docker container::

      docker pull quay.io/biocontainers/perl-safe:<tag>

   (see `perl-safe/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-safe| image:: https://img.shields.io/conda/dn/bioconda/perl-safe.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-safe
   :alt:   (downloads)
.. |docker_perl-safe| image:: https://quay.io/repository/biocontainers/perl-safe/status
   :target: https://quay.io/repository/biocontainers/perl-safe
.. _`perl-safe/tags`: https://quay.io/repository/biocontainers/perl-safe?tab=tags


.. raw:: html

    <script>
        var package = "perl-safe";
        var versions = ["2.37","2.37","2.37"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-safe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-safe/README.html