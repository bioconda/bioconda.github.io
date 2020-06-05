:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-velvetoptimiser'
.. highlight: bash

perl-velvetoptimiser
====================

.. conda:recipe:: perl-velvetoptimiser
   :replaces_section_title:
   :noindex:

   Automatically optimise three of Velvet\'s assembly parameters.

   :homepage: https://github.com/tseemann/VelvetOptimiser
   :license: GPLv2
   :recipe: /`perl-velvetoptimiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-velvetoptimiser/meta.yaml>`_
   :links: biotools: :biotools:`velvetoptimiser`

   


.. conda:package:: perl-velvetoptimiser

   |downloads_perl-velvetoptimiser| |docker_perl-velvetoptimiser|

   :versions:
      
      

      ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bioperl: ``>=1.7``
   :depends velvet: ``>=0.7.51``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-velvetoptimiser

   and update with::

      conda update perl-velvetoptimiser

   or use the docker container::

      docker pull quay.io/biocontainers/perl-velvetoptimiser:<tag>

   (see `perl-velvetoptimiser/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-velvetoptimiser| image:: https://img.shields.io/conda/dn/bioconda/perl-velvetoptimiser.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-velvetoptimiser
   :alt:   (downloads)
.. |docker_perl-velvetoptimiser| image:: https://quay.io/repository/biocontainers/perl-velvetoptimiser/status
   :target: https://quay.io/repository/biocontainers/perl-velvetoptimiser
.. _`perl-velvetoptimiser/tags`: https://quay.io/repository/biocontainers/perl-velvetoptimiser?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-velvetoptimiser/README.html