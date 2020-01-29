:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-metabolomics-fragment-annotation'
.. highlight: bash

perl-metabolomics-fragment-annotation
=====================================

.. conda:recipe:: perl-metabolomics-fragment-annotation
   :replaces_section_title:

   Perl extension for fragment annotation in metabolomics

   :homepage: https://metacpan.org/pod/Metabolomics::Fragment::Annotation
   :license: perl_5
   :recipe: /`perl-metabolomics-fragment-annotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-metabolomics-fragment-annotation/meta.yaml>`_

   


.. conda:package:: perl-metabolomics-fragment-annotation

   |downloads_perl-metabolomics-fragment-annotation| |docker_perl-metabolomics-fragment-annotation|

   :versions: 0.3-0, 0.2-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-file-share: 
   :depends perl-file-sharedir-install: 
   :depends perl-text-csv: 
   :depends perl-text-csv_xs: 
   :depends perl-xml-twig: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-metabolomics-fragment-annotation

   and update with::

      conda update perl-metabolomics-fragment-annotation

   or use the docker container::

      docker pull quay.io/biocontainers/perl-metabolomics-fragment-annotation:<tag>

   (see `perl-metabolomics-fragment-annotation/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-metabolomics-fragment-annotation| image:: https://img.shields.io/conda/dn/bioconda/perl-metabolomics-fragment-annotation.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-metabolomics-fragment-annotation
   :alt:   (downloads)
.. |docker_perl-metabolomics-fragment-annotation| image:: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation/status
   :target: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation
.. _`perl-metabolomics-fragment-annotation/tags`: https://quay.io/repository/biocontainers/perl-metabolomics-fragment-annotation?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-metabolomics-fragment-annotation/README.html