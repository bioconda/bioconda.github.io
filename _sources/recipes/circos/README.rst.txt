:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circos'
.. highlight: bash

circos
======

.. conda:recipe:: circos
   :replaces_section_title:
   :noindex:

   Circos is a software package for visualizing data and information. It visualizes data in a circular layout

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos/meta.yaml>`_
   :links: biotools: :biotools:`circos`, doi: :doi:`10.1101/gr.092759.109`

   


.. conda:package:: circos

   |downloads_circos| |docker_circos|

   :versions:
      
      

      ``0.69.8-0``,  ``0.69.6-5``,  ``0.69.6-4``,  ``0.69.6-2``,  ``0.69.6-1``,  ``0.69.6-0``,  ``0.69.5-0``,  ``0.69.4-0``,  ``0.69.2-0``

      

   
   :depends perl: 
   :depends perl-clone: 
   :depends perl-config-general: 
   :depends perl-digest-perl-md5: 
   :depends perl-font-ttf: 
   :depends perl-gd: 
   :depends perl-list-moreutils: 
   :depends perl-math-bezier: 
   :depends perl-math-round: 
   :depends perl-math-vecstat: 
   :depends perl-params-validate: 
   :depends perl-readonly: 
   :depends perl-regexp-common: 
   :depends perl-set-intspan: 
   :depends perl-statistics-basic: 
   :depends perl-svg: 
   :depends perl-text-format: 
   :depends perl-time-hires: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circos

   and update with::

      conda update circos

   or use the docker container::

      docker pull quay.io/biocontainers/circos:<tag>

   (see `circos/tags`_ for valid values for ``<tag>``)


.. |downloads_circos| image:: https://img.shields.io/conda/dn/bioconda/circos.svg?style=flat
   :target: https://anaconda.org/bioconda/circos
   :alt:   (downloads)
.. |docker_circos| image:: https://quay.io/repository/biocontainers/circos/status
   :target: https://quay.io/repository/biocontainers/circos
.. _`circos/tags`: https://quay.io/repository/biocontainers/circos?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos/README.html