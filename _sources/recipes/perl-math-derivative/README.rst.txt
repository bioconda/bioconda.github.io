:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-derivative'
.. highlight: bash

perl-math-derivative
====================

.. conda:recipe:: perl-math-derivative
   :replaces_section_title:

   Numeric 1st and 2nd order differentiation.

   :homepage: http://metacpan.org/pod/Math-Derivative
   :license: perl_5
   :recipe: /`perl-math-derivative <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-derivative/meta.yaml>`_

   


.. conda:package:: perl-math-derivative

   |downloads_perl-math-derivative| |docker_perl-math-derivative|

   :versions: 1.01-0, 0.04-1, 0.04-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-derivative

   and update with::

      conda update perl-math-derivative

   or use the docker container::

      docker pull quay.io/biocontainers/perl-math-derivative:<tag>

   (see `perl-math-derivative/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-derivative| image:: https://img.shields.io/conda/dn/bioconda/perl-math-derivative.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-derivative
   :alt:   (downloads)
.. |docker_perl-math-derivative| image:: https://quay.io/repository/biocontainers/perl-math-derivative/status
   :target: https://quay.io/repository/biocontainers/perl-math-derivative
.. _`perl-math-derivative/tags`: https://quay.io/repository/biocontainers/perl-math-derivative?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-derivative/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-derivative/README.html