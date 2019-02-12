:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-complex'
.. highlight: bash

perl-math-complex
=================

.. conda:recipe:: perl-math-complex
   :replaces_section_title:

   trigonometric functions

   :homepage: http://metacpan.org/pod/Math::Complex
   :license: perl_5
   :recipe: /`perl-math-complex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-complex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-complex/meta.yaml>`_

   


.. conda:package:: perl-math-complex

   |downloads_perl-math-complex| |docker_perl-math-complex|

   :versions: 1.59-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-math-complex

   and update with::

      conda update perl-math-complex

   or use the docker container::

      docker pull quay.io/repository/biocontainers/perl-math-complex:<tag>

   (see `perl-math-complex/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-complex| image:: https://img.shields.io/conda/dn/bioconda/perl-math-complex.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-math-complex| image:: https://quay.io/repository/biocontainers/perl-math-complex/status
   :target: https://quay.io/repository/biocontainers/perl-math-complex
.. _`perl-math-complex/tags`: https://quay.io/repository/biocontainers/perl-math-complex?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-complex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-complex/README.html