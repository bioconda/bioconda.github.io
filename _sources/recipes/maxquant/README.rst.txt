:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maxquant'
.. highlight: bash

maxquant
========

.. conda:recipe:: maxquant
   :replaces_section_title:
   :noindex:

   MaxQuant is a quantitative proteomics software package designed for analyzing large mass\-spectrometric data sets. License restricted.

   :homepage: http://www.coxdocs.org/doku.php?id=maxquant:start
   :license: http://www.coxdocs.org/lib/exe/fetch.php?media=license_agreement.pdf
   :recipe: /`maxquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maxquant/meta.yaml>`_
   :links: biotools: :biotools:`MaxQuant`, biotools: :biotools:`maxquant`, doi: :doi:`10.1038/s41592-018-0018-y`

   


.. conda:package:: maxquant

   |downloads_maxquant| |docker_maxquant|

   :versions:
      
      

      ``1.6.10.43-1``,  ``1.6.10.43-0``,  ``1.6.3.4-1``,  ``1.6.3.4-0``,  ``1.6.2.10-0``

      

   
   :depends mono: ``>=5.4.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install maxquant

   and update with::

      conda update maxquant

   or use the docker container::

      docker pull quay.io/biocontainers/maxquant:<tag>

   (see `maxquant/tags`_ for valid values for ``<tag>``)


.. |downloads_maxquant| image:: https://img.shields.io/conda/dn/bioconda/maxquant.svg?style=flat
   :target: https://anaconda.org/bioconda/maxquant
   :alt:   (downloads)
.. |docker_maxquant| image:: https://quay.io/repository/biocontainers/maxquant/status
   :target: https://quay.io/repository/biocontainers/maxquant
.. _`maxquant/tags`: https://quay.io/repository/biocontainers/maxquant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maxquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maxquant/README.html