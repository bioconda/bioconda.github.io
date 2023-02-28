:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-socket6'
.. highlight: bash

perl-socket6
============

.. conda:recipe:: perl-socket6
   :replaces_section_title:
   :noindex:

   IPv6 related part of the C socket.h defines and structure manipulators

   :homepage: http://metacpan.org/pod/Socket6
   :license: unknown
   :recipe: /`perl-socket6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-socket6/meta.yaml>`_

   


.. conda:package:: perl-socket6

   |downloads_perl-socket6| |docker_perl-socket6|

   :versions:
      
      

      ``0.29-2``,  ``0.29-1``,  ``0.29-0``,  ``0.25-1``,  ``0.25-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-socket6

   and update with::

      conda update perl-socket6

   or use the docker container::

      docker pull quay.io/biocontainers/perl-socket6:<tag>

   (see `perl-socket6/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-socket6| image:: https://img.shields.io/conda/dn/bioconda/perl-socket6.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-socket6
   :alt:   (downloads)
.. |docker_perl-socket6| image:: https://quay.io/repository/biocontainers/perl-socket6/status
   :target: https://quay.io/repository/biocontainers/perl-socket6
.. _`perl-socket6/tags`: https://quay.io/repository/biocontainers/perl-socket6?tab=tags


.. raw:: html

    <script>
        var package = "perl-socket6";
        var versions = ["0.29","0.29","0.29","0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-socket6/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-socket6/README.html