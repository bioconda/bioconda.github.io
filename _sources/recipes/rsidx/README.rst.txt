:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsidx'
.. highlight: bash

rsidx
=====

.. conda:recipe:: rsidx
   :replaces_section_title:

   Library for indexing VCF files for random access searches by rsID

   :homepage: https://github.com/bioforensics/rsidx/
   :license: BSD / BSD License
   :recipe: /`rsidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx/meta.yaml>`_

   


.. conda:package:: rsidx

   |downloads_rsidx| |docker_rsidx|

   :versions: 0.2-0, 0.1.1-0
   
   :depends python: >=3
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rsidx

   and update with::

      conda update rsidx

   or use the docker container::

      docker pull quay.io/biocontainers/rsidx:<tag>

   (see `rsidx/tags`_ for valid values for ``<tag>``)


.. |downloads_rsidx| image:: https://img.shields.io/conda/dn/bioconda/rsidx.svg?style=flat
   :target: https://anaconda.org/bioconda/rsidx
   :alt:   (downloads)
.. |docker_rsidx| image:: https://quay.io/repository/biocontainers/rsidx/status
   :target: https://quay.io/repository/biocontainers/rsidx
.. _`rsidx/tags`: https://quay.io/repository/biocontainers/rsidx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsidx/README.html