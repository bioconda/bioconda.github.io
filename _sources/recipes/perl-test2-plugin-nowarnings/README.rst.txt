:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test2-plugin-nowarnings'
.. highlight: bash

perl-test2-plugin-nowarnings
============================

.. conda:recipe:: perl-test2-plugin-nowarnings
   :replaces_section_title:
   :noindex:

   Fail if tests warn

   :homepage: https://metacpan.org/release/Test2-Plugin-NoWarnings
   :license: artistic_2
   :recipe: /`perl-test2-plugin-nowarnings <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-plugin-nowarnings>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-plugin-nowarnings/meta.yaml>`_

   


.. conda:package:: perl-test2-plugin-nowarnings

   |downloads_perl-test2-plugin-nowarnings| |docker_perl-test2-plugin-nowarnings|

   :versions:
      
      

      ``0.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-test2-plugin-nowarnings

   and update with::

      conda update perl-test2-plugin-nowarnings

   or use the docker container::

      docker pull quay.io/biocontainers/perl-test2-plugin-nowarnings:<tag>

   (see `perl-test2-plugin-nowarnings/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test2-plugin-nowarnings| image:: https://img.shields.io/conda/dn/bioconda/perl-test2-plugin-nowarnings.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test2-plugin-nowarnings
   :alt:   (downloads)
.. |docker_perl-test2-plugin-nowarnings| image:: https://quay.io/repository/biocontainers/perl-test2-plugin-nowarnings/status
   :target: https://quay.io/repository/biocontainers/perl-test2-plugin-nowarnings
.. _`perl-test2-plugin-nowarnings/tags`: https://quay.io/repository/biocontainers/perl-test2-plugin-nowarnings?tab=tags


.. raw:: html

    <script>
        var package = "perl-test2-plugin-nowarnings";
        var versions = ["0.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test2-plugin-nowarnings/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test2-plugin-nowarnings/README.html