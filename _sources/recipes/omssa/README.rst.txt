:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'omssa'
.. highlight: bash

omssa
=====

.. conda:recipe:: omssa
   :replaces_section_title:

   Open Mass Spectrometry Search Algorithm \(OMSSA\)

   :homepage: ftp://ftp.ncbi.nlm.nih.gov/pub/lewisg/omssa/
   :license: Public Domain
   :recipe: /`omssa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omssa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/omssa/meta.yaml>`_

   


.. conda:package:: omssa

   |downloads_omssa| |docker_omssa|

   :versions: 2.1.9-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install omssa

   and update with::

      conda update omssa

   or use the docker container::

      docker pull quay.io/biocontainers/omssa:<tag>

   (see `omssa/tags`_ for valid values for ``<tag>``)


.. |downloads_omssa| image:: https://img.shields.io/conda/dn/bioconda/omssa.svg?style=flat
   :target: https://anaconda.org/bioconda/omssa
   :alt:   (downloads)
.. |docker_omssa| image:: https://quay.io/repository/biocontainers/omssa/status
   :target: https://quay.io/repository/biocontainers/omssa
.. _`omssa/tags`: https://quay.io/repository/biocontainers/omssa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/omssa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/omssa/README.html