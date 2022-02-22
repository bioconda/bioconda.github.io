:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-version'
.. highlight: bash

perl-version
============

.. conda:recipe:: perl-version
   :replaces_section_title:
   :noindex:

   Structured version objects

   :homepage: http://metacpan.org/pod/version
   :license: perl_5
   :recipe: /`perl-version <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-version/meta.yaml>`_

   


.. conda:package:: perl-version

   |downloads_perl-version| |docker_perl-version|

   :versions:
      
      

      ``0.9924-2``,  ``0.9924-1``,  ``0.9924-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-version

   and update with::

      conda update perl-version

   or use the docker container::

      docker pull quay.io/biocontainers/perl-version:<tag>

   (see `perl-version/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-version| image:: https://img.shields.io/conda/dn/bioconda/perl-version.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-version
   :alt:   (downloads)
.. |docker_perl-version| image:: https://quay.io/repository/biocontainers/perl-version/status
   :target: https://quay.io/repository/biocontainers/perl-version
.. _`perl-version/tags`: https://quay.io/repository/biocontainers/perl-version?tab=tags


.. raw:: html

    <script>
        var package = "perl-version";
        var versions = ["0.9924","0.9924","0.9924"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-version/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-version/README.html