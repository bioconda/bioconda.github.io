:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-unicode-map'
.. highlight: bash

perl-unicode-map
================

.. conda:recipe:: perl-unicode-map
   :replaces_section_title:
   :noindex:

   An utility to map texts from and to unicode

   :homepage: http://metacpan.org/pod/Unicode::Map
   :license: unknown
   :recipe: /`perl-unicode-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-unicode-map/meta.yaml>`_

   


.. conda:package:: perl-unicode-map

   |downloads_perl-unicode-map| |docker_perl-unicode-map|

   :versions:
      
      

      ``0.112-5``,  ``0.112-4``,  ``0.112-3``,  ``0.112-2``,  ``0.112-1``,  ``0.112-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-unicode-map

   and update with::

      conda update perl-unicode-map

   or use the docker container::

      docker pull quay.io/biocontainers/perl-unicode-map:<tag>

   (see `perl-unicode-map/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-unicode-map| image:: https://img.shields.io/conda/dn/bioconda/perl-unicode-map.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-unicode-map
   :alt:   (downloads)
.. |docker_perl-unicode-map| image:: https://quay.io/repository/biocontainers/perl-unicode-map/status
   :target: https://quay.io/repository/biocontainers/perl-unicode-map
.. _`perl-unicode-map/tags`: https://quay.io/repository/biocontainers/perl-unicode-map?tab=tags


.. raw:: html

    <script>
        var package = "perl-unicode-map";
        var versions = ["0.112","0.112","0.112","0.112","0.112"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-unicode-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-unicode-map/README.html