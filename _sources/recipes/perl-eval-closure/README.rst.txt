:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-eval-closure'
.. highlight: bash

perl-eval-closure
=================

.. conda:recipe:: perl-eval-closure/0.14
   :replaces_section_title:

   safely and cleanly create closures via string eval

   :homepage: http://metacpan.org/release/Eval-Closure
   :license: perl_5
   :recipe: /`perl-eval-closure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-eval-closure>`_/`0.14 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-eval-closure/0.14>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-eval-closure/0.14/meta.yaml>`_

   


.. conda:package:: perl-eval-closure

   |downloads_perl-eval-closure| |docker_perl-eval-closure|

   :versions: 0.14-4, 0.14-3, 0.14-1, 0.14-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-exporter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-eval-closure

   and update with::

      conda update perl-eval-closure

   or use the docker container::

      docker pull quay.io/biocontainers/perl-eval-closure:<tag>

   (see `perl-eval-closure/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-eval-closure| image:: https://img.shields.io/conda/dn/bioconda/perl-eval-closure.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-eval-closure| image:: https://quay.io/repository/biocontainers/perl-eval-closure/status
   :target: https://quay.io/repository/biocontainers/perl-eval-closure
.. _`perl-eval-closure/tags`: https://quay.io/repository/biocontainers/perl-eval-closure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-eval-closure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-eval-closure/README.html