:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonclust'
.. highlight: bash

isonclust
=========

.. conda:recipe:: isonclust
   :replaces_section_title:
   :noindex:

   De novo clustering of long\-read transcriptome reads.

   :homepage: https://github.com/ksahlin/isONclust
   :license: GPL / GPL-3.0
   :recipe: /`isonclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-030-17083-7_14`

   


.. conda:package:: isonclust

   |downloads_isonclust| |docker_isonclust|

   :versions:
      
      

      ``0.0.6.1-0``,  ``0.0.6-1``,  ``0.0.6-0``

      

   
   :depends parasail-python: ``>=1.1.11``
   :depends pysam: ``>=0.11``
   :depends python: ``>=3.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install isonclust

   and update with::

      conda update isonclust

   or use the docker container::

      docker pull quay.io/biocontainers/isonclust:<tag>

   (see `isonclust/tags`_ for valid values for ``<tag>``)


.. |downloads_isonclust| image:: https://img.shields.io/conda/dn/bioconda/isonclust.svg?style=flat
   :target: https://anaconda.org/bioconda/isonclust
   :alt:   (downloads)
.. |docker_isonclust| image:: https://quay.io/repository/biocontainers/isonclust/status
   :target: https://quay.io/repository/biocontainers/isonclust
.. _`isonclust/tags`: https://quay.io/repository/biocontainers/isonclust?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonclust/README.html