:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samstats'
.. highlight: bash

samstats
========

.. conda:recipe:: samstats
   :replaces_section_title:
   :noindex:

   SAM file alignment statistics at the read level

   :homepage: https://github.com/kundajelab/SAMstats
   :license: MIT
   :recipe: /`samstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samstats/meta.yaml>`_

   Scripts that implement samtools flagstat functionality\, but provide statistics for individual reads rather than individual alignments


.. conda:package:: samstats

   |downloads_samstats| |docker_samstats|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends multiprocess: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samstats

   and update with::

      conda update samstats

   or use the docker container::

      docker pull quay.io/biocontainers/samstats:<tag>

   (see `samstats/tags`_ for valid values for ``<tag>``)


.. |downloads_samstats| image:: https://img.shields.io/conda/dn/bioconda/samstats.svg?style=flat
   :target: https://anaconda.org/bioconda/samstats
   :alt:   (downloads)
.. |docker_samstats| image:: https://quay.io/repository/biocontainers/samstats/status
   :target: https://quay.io/repository/biocontainers/samstats
.. _`samstats/tags`: https://quay.io/repository/biocontainers/samstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samstats/README.html