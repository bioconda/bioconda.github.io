:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-cdf'
.. highlight: bash

perl-math-cdf
=============

.. conda:recipe:: perl-math-cdf
   :replaces_section_title:

   Generate probabilities and quantiles from several statistical probability functions

   :homepage: http://metacpan.org/pod/Math-CDF
   :license: Public Domain
   :recipe: /`perl-math-cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-cdf/meta.yaml>`_

   


.. conda:package:: perl-math-cdf

   |downloads_perl-math-cdf| |docker_perl-math-cdf|

   :versions: 0.1-4, 0.1-3, 0.1-2, 0.1-1, 0.1-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-cdf

   and update with::

      conda update perl-math-cdf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-cdf:<tag>

   (see `perl-math-cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-cdf| image:: https://img.shields.io/conda/dn/bioconda/perl-math-cdf.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-cdf| image:: https://quay.io/repository/biocontainers/perl-math-cdf/status
   :target: https://quay.io/repository/biocontainers/perl-math-cdf
.. _`perl-math-cdf/tags`: https://quay.io/repository/biocontainers/perl-math-cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-cdf/README.html