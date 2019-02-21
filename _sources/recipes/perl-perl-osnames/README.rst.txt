:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-osnames'
.. highlight: bash

perl-perl-osnames
=================

.. conda:recipe:: perl-perl-osnames
   :replaces_section_title:

   List possible \$\^O \(\$OSNAME\) values\, with description

   :homepage: https://metacpan.org/release/Perl-osnames
   :license: perl_5
   :recipe: /`perl-perl-osnames <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-osnames>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-osnames/meta.yaml>`_

   


.. conda:package:: perl-perl-osnames

   |downloads_perl-perl-osnames| |docker_perl-perl-osnames|

   :versions: 0.11-2, 0.11-1, 0.11-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-perl-osnames

   and update with::

      conda update perl-perl-osnames

   or use the docker container::

      docker pull quay.io/biocontainers/perl-perl-osnames:<tag>

   (see `perl-perl-osnames/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-osnames| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-osnames.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-perl-osnames| image:: https://quay.io/repository/biocontainers/perl-perl-osnames/status
   :target: https://quay.io/repository/biocontainers/perl-perl-osnames
.. _`perl-perl-osnames/tags`: https://quay.io/repository/biocontainers/perl-perl-osnames?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-osnames/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-osnames/README.html