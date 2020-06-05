:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-sereal'
.. highlight: bash

perl-sereal
===========

.. conda:recipe:: perl-sereal
   :replaces_section_title:
   :noindex:

   Fast\, compact\, powerful binary \(de\-\)serialization

   :homepage: http://metacpan.org/pod/Sereal
   :license: perl_5
   :recipe: /`perl-sereal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-sereal/meta.yaml>`_

   


.. conda:package:: perl-sereal

   |downloads_perl-sereal| |docker_perl-sereal|

   :versions:
      
      

      ``4.007-0``,  ``4.005-0``,  ``3.015-1``,  ``3.015-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-sereal-decoder: ``>=4.007``
   :depends perl-sereal-encoder: ``>=4.007``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-sereal

   and update with::

      conda update perl-sereal

   or use the docker container::

      docker pull quay.io/biocontainers/perl-sereal:<tag>

   (see `perl-sereal/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-sereal| image:: https://img.shields.io/conda/dn/bioconda/perl-sereal.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-sereal
   :alt:   (downloads)
.. |docker_perl-sereal| image:: https://quay.io/repository/biocontainers/perl-sereal/status
   :target: https://quay.io/repository/biocontainers/perl-sereal
.. _`perl-sereal/tags`: https://quay.io/repository/biocontainers/perl-sereal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-sereal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-sereal/README.html