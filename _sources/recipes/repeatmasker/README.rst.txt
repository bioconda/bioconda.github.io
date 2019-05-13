:orphan:  .. only available via index, not via toctree

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

   :versions: 4.0.9_p2-0, 4.0.8-14, 4.0.8-13, 4.0.7-13, 4.0.7-11, 4.0.7-10, 4.0.6-10, 4.0.6-9, 4.0.6-8, 4.0.6-7, 4.0.6-6, 4.0.6-5, 4.0.6-4
   
   :depends hmmer: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-text-soundex: 
   :depends rmblast: 
   :depends trf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install repeatmasker

   and update with::

      conda update repeatmasker

   or use the docker container::

      docker pull quay.io/biocontainers/repeatmasker:<tag>

   (see `repeatmasker/tags`_ for valid values for ``<tag>``)


.. |downloads_repeatmasker| image:: https://img.shields.io/conda/dn/bioconda/repeatmasker.svg?style=flat
   :target: https://anaconda.org/bioconda/repeatmasker
   :alt:   (downloads)
.. |docker_repeatmasker| image:: https://quay.io/repository/biocontainers/repeatmasker/status
   :target: https://quay.io/repository/biocontainers/repeatmasker
.. _`repeatmasker/tags`: https://quay.io/repository/biocontainers/repeatmasker?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repeatmasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repeatmasker/README.html