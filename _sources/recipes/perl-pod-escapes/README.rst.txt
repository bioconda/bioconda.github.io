:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-pod-escapes'
.. highlight: bash

perl-pod-escapes
================

.. conda:recipe:: perl-pod-escapes/1.07
   :replaces_section_title:

   for resolving Pod Elt...gt sequences

   :homepage: http://metacpan.org/pod/Pod::Escapes
   :license: perl_5
   :recipe: /`perl-pod-escapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes>`_/`1.07 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-pod-escapes/1.07/meta.yaml>`_

   


.. conda:package:: perl-pod-escapes

   |downloads_perl-pod-escapes| |docker_perl-pod-escapes|

   :versions: 1.07-1, 1.07-0
   
   :depends perl: >=5.26.2,<5.27.0a0
   
   :depends perl-exporter: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-pod-escapes

   and update with::

      conda update perl-pod-escapes

   or use the docker container::

      docker pull quay.io/biocontainers/perl-pod-escapes:<tag>

   (see `perl-pod-escapes/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-pod-escapes| image:: https://img.shields.io/conda/dn/bioconda/perl-pod-escapes.svg?style=flat
   :alt:   (downloads)
.. |docker_perl-pod-escapes| image:: https://quay.io/repository/biocontainers/perl-pod-escapes/status
   :target: https://quay.io/repository/biocontainers/perl-pod-escapes
.. _`perl-pod-escapes/tags`: https://quay.io/repository/biocontainers/perl-pod-escapes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-pod-escapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-pod-escapes/README.html