.. title:: Package Recipe 'repeatmasker'
.. highlight: bash


repeatmasker
============

.. conda:recipe:: repeatmasker
   :replaces_section_title:

   RepeatMasker is a program that screens DNA sequences for interspersed repeats and low complexity DNA sequences.

   :homepage: http://www.repeatmasker.org
   :license: Open Software License v2.1
   :recipe: /`repeatmasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repeatmasker/meta.yaml>`_
   :links: biotools: :biotools:`RepeatMasker`

   


.. conda:package:: repeatmasker

   |downloads_repeatmasker| |docker_repeatmasker|

   :versions: 4.0.8, 4.0.7, 4.0.6

   :depends: :conda:package:`hmmer`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-text-soundex`  :conda:package:`rmblast`  :conda:package:`trf`  

   :required~by: |required_by_repeatmasker|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repeatmasker

   and update with::

      conda update repeatmasker

   or use the docker container::

      docker pull quay.io/repository/biocontainers/repeatmasker


.. |required_by_repeatmasker| conda:required_by:: repeatmasker
.. |downloads_repeatmasker| image:: https://img.shields.io/conda/dn/bioconda/repeatmasker.svg?style=flat
   :alt:   (downloads)
.. |docker_repeatmasker| image:: https://quay.io/repository/biocontainers/repeatmasker/status
   :target: https://quay.io/repository/biocontainers/repeatmasker







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmasker/README.html

