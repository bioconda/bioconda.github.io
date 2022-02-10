:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-base'
.. highlight: bash

perl-base
=========

.. conda:recipe:: perl-base
   :replaces_section_title:
   :noindex:

   compile\-time class fields

   :homepage: http://metacpan.org/pod/base
   :license: unknown
   :recipe: /`perl-base <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-base>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-base/meta.yaml>`_

   


.. conda:package:: perl-base

   |downloads_perl-base| |docker_perl-base|

   :versions:
      
      

      ``2.23-2``,  ``2.23-1``,  ``2.23-0``,  ``2.22-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-base

   and update with::

      conda update perl-base

   or use the docker container::

      docker pull quay.io/biocontainers/perl-base:<tag>

   (see `perl-base/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-base| image:: https://img.shields.io/conda/dn/bioconda/perl-base.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-base
   :alt:   (downloads)
.. |docker_perl-base| image:: https://quay.io/repository/biocontainers/perl-base/status
   :target: https://quay.io/repository/biocontainers/perl-base
.. _`perl-base/tags`: https://quay.io/repository/biocontainers/perl-base?tab=tags


.. raw:: html

    <script>
        var package = "perl-base";
        var versions = ["2.23","2.23","2.23","2.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-base/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-base/README.html