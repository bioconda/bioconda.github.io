:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scorpio'
.. highlight: bash

scorpio
=======

.. conda:recipe:: scorpio
   :replaces_section_title:
   :noindex:

   Serious constellations of reoccurring phylogenetically\-independent origin

   :homepage: https://github.com/cov-lineages/scorpio
   :license: GPL-3.0-only
   :recipe: /`scorpio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scorpio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scorpio/meta.yaml>`_

   


.. conda:package:: scorpio

   |downloads_scorpio| |docker_scorpio|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3-0``

      

   
   :depends biopython: ``>=1.74``
   :depends constellations: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scorpio

   and update with::

      conda update scorpio

   or use the docker container::

      docker pull quay.io/biocontainers/scorpio:<tag>

   (see `scorpio/tags`_ for valid values for ``<tag>``)


.. |downloads_scorpio| image:: https://img.shields.io/conda/dn/bioconda/scorpio.svg?style=flat
   :target: https://anaconda.org/bioconda/scorpio
   :alt:   (downloads)
.. |docker_scorpio| image:: https://quay.io/repository/biocontainers/scorpio/status
   :target: https://quay.io/repository/biocontainers/scorpio
.. _`scorpio/tags`: https://quay.io/repository/biocontainers/scorpio?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scorpio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scorpio/README.html