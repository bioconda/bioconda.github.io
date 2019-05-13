:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5-research'
.. highlight: bash

fast5-research
==============

.. conda:recipe:: fast5-research
   :replaces_section_title:

   ONT Research fast5 read\/write package

   :homepage: https://github.com/nanoporetech/fast5_research
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`fast5-research <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5-research/meta.yaml>`_

   


.. conda:package:: fast5-research

   |downloads_fast5-research| |docker_fast5-research|

   :versions: 1.2.17-0, 1.2.15-0, 1.2.11-0, 1.2.10-0, 1.2.8-0, 1.0.9-1, 1.0.9-0
   
   :depends h5py: <2.9.0
   :depends hdf5: >=1.10.4,<1.10.5.0a0
   :depends numpy: >=1.9.3,<2.0a0
   :depends progressbar2: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fast5-research

   and update with::

      conda update fast5-research

   or use the docker container::

      docker pull quay.io/biocontainers/fast5-research:<tag>

   (see `fast5-research/tags`_ for valid values for ``<tag>``)


.. |downloads_fast5-research| image:: https://img.shields.io/conda/dn/bioconda/fast5-research.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5-research
   :alt:   (downloads)
.. |docker_fast5-research| image:: https://quay.io/repository/biocontainers/fast5-research/status
   :target: https://quay.io/repository/biocontainers/fast5-research
.. _`fast5-research/tags`: https://quay.io/repository/biocontainers/fast5-research?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5-research/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5-research/README.html