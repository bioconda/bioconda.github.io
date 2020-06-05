:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-warnings-register'
.. highlight: bash

perl-warnings-register
======================

.. conda:recipe:: perl-warnings-register/1.03
   :replaces_section_title:
   :noindex:

   warnings import function

   :homepage: http://metacpan.org/pod/warnings::register
   :license: perl_5
   :recipe: /`perl-warnings-register <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register>`_/`1.03 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register/1.03>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-warnings-register/1.03/meta.yaml>`_

   


.. conda:package:: perl-warnings-register

   |downloads_perl-warnings-register| |docker_perl-warnings-register|

   :versions:
      
      

      ``1.03-1``,  ``1.03-0``

      

   
   :depends perl: ``>=5.26.2,<5.27.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-warnings-register

   and update with::

      conda update perl-warnings-register

   or use the docker container::

      docker pull quay.io/biocontainers/perl-warnings-register:<tag>

   (see `perl-warnings-register/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-warnings-register| image:: https://img.shields.io/conda/dn/bioconda/perl-warnings-register.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-warnings-register
   :alt:   (downloads)
.. |docker_perl-warnings-register| image:: https://quay.io/repository/biocontainers/perl-warnings-register/status
   :target: https://quay.io/repository/biocontainers/perl-warnings-register
.. _`perl-warnings-register/tags`: https://quay.io/repository/biocontainers/perl-warnings-register?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-warnings-register/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-warnings-register/README.html