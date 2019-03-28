:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-text-wrap'
.. highlight: bash

perl-text-wrap
==============

.. conda:recipe:: perl-text-wrap
   :replaces_section_title:

   line wrapping to form simple paragraphs

   :homepage: http://metacpan.org/pod/Text::Wrap
   :license: perl_5
   :recipe: /`perl-text-wrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-wrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-text-wrap/meta.yaml>`_

   


.. conda:package:: perl-text-wrap

   |downloads_perl-text-wrap| |docker_perl-text-wrap|

   :versions: 2013.0523-1, 2013.0523-0
   
   :depends perl: >=5.26.0,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-text-wrap

   and update with::

      conda update perl-text-wrap

   or use the docker container::

      docker pull quay.io/biocontainers/perl-text-wrap:<tag>

   (see `perl-text-wrap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-text-wrap| image:: https://img.shields.io/conda/dn/bioconda/perl-text-wrap.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-text-wrap| image:: https://quay.io/repository/biocontainers/perl-text-wrap/status
   :target: https://quay.io/repository/biocontainers/perl-text-wrap
.. _`perl-text-wrap/tags`: https://quay.io/repository/biocontainers/perl-text-wrap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-text-wrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-text-wrap/README.html