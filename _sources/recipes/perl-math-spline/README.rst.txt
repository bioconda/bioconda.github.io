:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-spline'
.. highlight: bash

perl-math-spline
================

.. conda:recipe:: perl-math-spline
   :replaces_section_title:

   Cubic Spline Interpolation of data

   :homepage: http://metacpan.org/pod/Math-Spline
   :license: perl_5
   :recipe: /`perl-math-spline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-spline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-spline/meta.yaml>`_

   


.. conda:package:: perl-math-spline

   |downloads_perl-math-spline| |docker_perl-math-spline|

   :versions: 0.02-2, 0.02-1, 0.02-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-math-derivative: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-spline

   and update with::

      conda update perl-math-spline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-spline:<tag>

   (see `perl-math-spline/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-spline| image:: https://img.shields.io/conda/dn/bioconda/perl-math-spline.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-spline| image:: https://quay.io/repository/biocontainers/perl-math-spline/status
   :target: https://quay.io/repository/biocontainers/perl-math-spline
.. _`perl-math-spline/tags`: https://quay.io/repository/biocontainers/perl-math-spline?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-spline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-spline/README.html