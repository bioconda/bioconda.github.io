:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cd-hit-auxtools'
.. highlight: bash

cd-hit-auxtools
===============

.. conda:recipe:: cd-hit-auxtools
   :replaces_section_title:
   :noindex:

   Clusters and compares protein or nucleotide sequences

   :homepage: https://github.com/weizhongli/cdhit
   :license: GPLv2
   :recipe: /`cd-hit-auxtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cd-hit-auxtools/meta.yaml>`_

   


.. conda:package:: cd-hit-auxtools

   |downloads_cd-hit-auxtools| |docker_cd-hit-auxtools|

   :versions:
      
      

      ``4.6.8-2``,  ``4.6.8-1``,  ``4.6.8-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cd-hit-auxtools

   and update with::

      conda update cd-hit-auxtools

   or use the docker container::

      docker pull quay.io/biocontainers/cd-hit-auxtools:<tag>

   (see `cd-hit-auxtools/tags`_ for valid values for ``<tag>``)


.. |downloads_cd-hit-auxtools| image:: https://img.shields.io/conda/dn/bioconda/cd-hit-auxtools.svg?style=flat
   :target: https://anaconda.org/bioconda/cd-hit-auxtools
   :alt:   (downloads)
.. |docker_cd-hit-auxtools| image:: https://quay.io/repository/biocontainers/cd-hit-auxtools/status
   :target: https://quay.io/repository/biocontainers/cd-hit-auxtools
.. _`cd-hit-auxtools/tags`: https://quay.io/repository/biocontainers/cd-hit-auxtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cd-hit-auxtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cd-hit-auxtools/README.html