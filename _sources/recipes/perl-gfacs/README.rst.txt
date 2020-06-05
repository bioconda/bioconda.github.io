:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-gfacs'
.. highlight: bash

perl-gfacs
==========

.. conda:recipe:: perl-gfacs
   :replaces_section_title:
   :noindex:

   gFACs is a filtering\, analysis\, and conversion tool to unify genome annotations across alignment and gene prediction frameworks.

   :homepage: https://gitlab.com/PlantGenomicsLab/gFACs
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`perl-gfacs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-gfacs/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.gpb.2019.04.002`

   


.. conda:package:: perl-gfacs

   |downloads_perl-gfacs| |docker_perl-gfacs|

   :versions:
      
      

      ``1.1.1-0``

      

   
   :depends perl-bioperl: ``>=1.7.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-gfacs

   and update with::

      conda update perl-gfacs

   or use the docker container::

      docker pull quay.io/biocontainers/perl-gfacs:<tag>

   (see `perl-gfacs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-gfacs| image:: https://img.shields.io/conda/dn/bioconda/perl-gfacs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-gfacs
   :alt:   (downloads)
.. |docker_perl-gfacs| image:: https://quay.io/repository/biocontainers/perl-gfacs/status
   :target: https://quay.io/repository/biocontainers/perl-gfacs
.. _`perl-gfacs/tags`: https://quay.io/repository/biocontainers/perl-gfacs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-gfacs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-gfacs/README.html