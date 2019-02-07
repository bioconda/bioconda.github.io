.. title:: Package Recipe 'circos'
.. highlight: bash


circos
======

.. conda:recipe:: circos
   :replaces_section_title:

   Circos is a software package for visualizing data and information. It visualizes data in a circular layout

   :homepage: http://circos.ca
   :license: GPL2 / GNU General Public License v2 (GPLv2)
   :recipe: /`circos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circos/meta.yaml>`_
   :links: biotools: :biotools:`circos`, doi: :doi:`10.1101/gr.092759.109`

   


.. conda:package:: circos

   |downloads_circos| |docker_circos|

   :versions: 0.69.6, 0.69.5, 0.69.4, 0.69.2

   :depends: :conda:package:`perl`  :conda:package:`perl-clone`  :conda:package:`perl-config-general`  :conda:package:`perl-digest-perl-md5`  :conda:package:`perl-font-ttf`  :conda:package:`perl-gd`  :conda:package:`perl-list-moreutils`  :conda:package:`perl-math-bezier`  :conda:package:`perl-math-round`  :conda:package:`perl-math-vecstat`  :conda:package:`perl-params-validate`  :conda:package:`perl-readonly`  :conda:package:`perl-regexp-common`  :conda:package:`perl-set-intspan`  :conda:package:`perl-statistics-basic`  :conda:package:`perl-svg`  :conda:package:`perl-text-format`  :conda:package:`perl-time-hires`  

   :required~by: |required_by_circos|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circos

   and update with::

      conda update circos

   or use the docker container::

      docker pull quay.io/repository/biocontainers/circos


.. |required_by_circos| conda:required_by:: circos
.. |downloads_circos| image:: https://img.shields.io/conda/dn/bioconda/circos.svg?style=flat
   :alt:   (downloads)
.. |docker_circos| image:: https://quay.io/repository/biocontainers/circos/status
   :target: https://quay.io/repository/biocontainers/circos







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circos/README.html

