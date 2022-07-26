:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-memoize'
.. highlight: bash

perl-memoize
============

.. conda:recipe:: perl-memoize
   :replaces_section_title:
   :noindex:

   Make functions faster by trading space for time

   :homepage: http://metacpan.org/pod/Memoize
   :license: perl_5
   :recipe: /`perl-memoize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-memoize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-memoize/meta.yaml>`_

   


.. conda:package:: perl-memoize

   |downloads_perl-memoize| |docker_perl-memoize|

   :versions:
      
      

      ``1.05-0``,  ``1.03-3``,  ``1.03-2``,  ``1.03-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-memoize

   and update with::

      conda update perl-memoize

   or use the docker container::

      docker pull quay.io/biocontainers/perl-memoize:<tag>

   (see `perl-memoize/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-memoize| image:: https://img.shields.io/conda/dn/bioconda/perl-memoize.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-memoize
   :alt:   (downloads)
.. |docker_perl-memoize| image:: https://quay.io/repository/biocontainers/perl-memoize/status
   :target: https://quay.io/repository/biocontainers/perl-memoize
.. _`perl-memoize/tags`: https://quay.io/repository/biocontainers/perl-memoize?tab=tags


.. raw:: html

    <script>
        var package = "perl-memoize";
        var versions = ["1.05","1.03","1.03","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-memoize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-memoize/README.html