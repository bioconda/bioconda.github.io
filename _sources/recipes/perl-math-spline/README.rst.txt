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

   :versions: 0.02

   :depends: :conda:package:`perl-math-derivative`  :conda:package:`perl-threaded`  

   :required~by: |required_by_perl-math-spline|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-spline

   and update with::

      conda update perl-math-spline

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-spline


.. |required_by_perl-math-spline| conda:required_by:: perl-math-spline
.. |downloads_perl-math-spline| image:: https://img.shields.io/conda/dn/bioconda/perl-math-spline.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-spline| image:: https://quay.io/repository/biocontainers/perl-math-spline/status
   :target: https://quay.io/repository/biocontainers/perl-math-spline







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-spline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-spline/README.html

