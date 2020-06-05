:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graftm'
.. highlight: bash

graftm
======

.. conda:recipe:: graftm
   :replaces_section_title:
   :noindex:

   GraftM is a pipeline used for identifying and classifying marker gene reads from metagenomic datasets

   :homepage: http://geronimp.github.io/graftM
   :license: GPL3 / GPL3+
   :recipe: /`graftm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graftm/meta.yaml>`_

   


.. conda:package:: graftm

   |downloads_graftm| |docker_graftm|

   :versions:
      
      

      ``0.13.1-0``,  ``0.12.2-0``,  ``0.11.1-0``,  ``0.10.1-1``,  ``0.10.1-0``

      

   
   :depends biom-format: ``>=2.1.4``
   :depends biopython: ``>=1.64``
   :depends dendropy: ``>=4.1.0``
   :depends extern: ``>=0.0.4``
   :depends python: ``>=3``
   :depends taxtastic: ``>=0.5.4``
   :depends tempdir: ``>=0.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install graftm

   and update with::

      conda update graftm

   or use the docker container::

      docker pull quay.io/biocontainers/graftm:<tag>

   (see `graftm/tags`_ for valid values for ``<tag>``)


.. |downloads_graftm| image:: https://img.shields.io/conda/dn/bioconda/graftm.svg?style=flat
   :target: https://anaconda.org/bioconda/graftm
   :alt:   (downloads)
.. |docker_graftm| image:: https://quay.io/repository/biocontainers/graftm/status
   :target: https://quay.io/repository/biocontainers/graftm
.. _`graftm/tags`: https://quay.io/repository/biocontainers/graftm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graftm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graftm/README.html