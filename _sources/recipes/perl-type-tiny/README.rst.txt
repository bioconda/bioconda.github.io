:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-type-tiny'
.. highlight: bash

perl-type-tiny
==============

.. conda:recipe:: perl-type-tiny
   :replaces_section_title:

   tiny\, yet Moo\(se\)\-compatible type constraint

   :homepage: https://metacpan.org/release/Type-Tiny
   :license: perl_5
   :recipe: /`perl-type-tiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-type-tiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-type-tiny/meta.yaml>`_

   


.. conda:package:: perl-type-tiny

   |downloads_perl-type-tiny| |docker_perl-type-tiny|

   :versions: 1.004004-0, 1.004003-0, 1.004002-0, 1.002002-0, 1.000005-1, 1.000005-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-exporter-tiny: >=0.040
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-type-tiny

   and update with::

      conda update perl-type-tiny

   or use the docker container::

      docker pull quay.io/biocontainers/perl-type-tiny:<tag>

   (see `perl-type-tiny/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-type-tiny| image:: https://img.shields.io/conda/dn/bioconda/perl-type-tiny.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-type-tiny
   :alt:   (downloads)
.. |docker_perl-type-tiny| image:: https://quay.io/repository/biocontainers/perl-type-tiny/status
   :target: https://quay.io/repository/biocontainers/perl-type-tiny
.. _`perl-type-tiny/tags`: https://quay.io/repository/biocontainers/perl-type-tiny?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-type-tiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-type-tiny/README.html