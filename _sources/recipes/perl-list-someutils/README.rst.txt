:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-list-someutils'
.. highlight: bash

perl-list-someutils
===================

.. conda:recipe:: perl-list-someutils
   :replaces_section_title:
   :noindex:

   Provide the stuff missing in List\:\:Util

   :homepage: http://metacpan.org/release/List-SomeUtils
   :license: perl_5
   :recipe: /`perl-list-someutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-list-someutils/meta.yaml>`_

   


.. conda:package:: perl-list-someutils

   |downloads_perl-list-someutils| |docker_perl-list-someutils|

   :versions:
      
      

      ``0.59-2``,  ``0.59-1``,  ``0.59-0``,  ``0.58-1``,  ``0.58-0``,  ``0.56-2``,  ``0.56-1``,  ``0.56-0``,  ``0.53-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-exporter: 
   :depends perl-module-implementation: ``0.09.*``
   :depends perl-test-leaktrace: ``0.17.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-list-someutils

   and update with::

      conda update perl-list-someutils

   or use the docker container::

      docker pull quay.io/biocontainers/perl-list-someutils:<tag>

   (see `perl-list-someutils/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-list-someutils| image:: https://img.shields.io/conda/dn/bioconda/perl-list-someutils.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-list-someutils
   :alt:   (downloads)
.. |docker_perl-list-someutils| image:: https://quay.io/repository/biocontainers/perl-list-someutils/status
   :target: https://quay.io/repository/biocontainers/perl-list-someutils
.. _`perl-list-someutils/tags`: https://quay.io/repository/biocontainers/perl-list-someutils?tab=tags


.. raw:: html

    <script>
        var package = "perl-list-someutils";
        var versions = ["0.59","0.59","0.59","0.58","0.58"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-list-someutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-list-someutils/README.html