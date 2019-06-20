:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-random'
.. highlight: bash

perl-math-random
================

.. conda:recipe:: perl-math-random
   :replaces_section_title:

   Random Number Generators

   :homepage: http://metacpan.org/pod/Math-Random
   :license: unknown
   :recipe: /`perl-math-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random/meta.yaml>`_

   


.. conda:package:: perl-math-random

   |downloads_perl-math-random| |docker_perl-math-random|

   :versions: 0.72-2, 0.72-1, 0.72-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-random

   and update with::

      conda update perl-math-random

   or use the docker container::

      docker pull quay.io/biocontainers/perl-math-random:<tag>

   (see `perl-math-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-random| image:: https://img.shields.io/conda/dn/bioconda/perl-math-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-random
   :alt:   (downloads)
.. |docker_perl-math-random| image:: https://quay.io/repository/biocontainers/perl-math-random/status
   :target: https://quay.io/repository/biocontainers/perl-math-random
.. _`perl-math-random/tags`: https://quay.io/repository/biocontainers/perl-math-random?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-random/README.html