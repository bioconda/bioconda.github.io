:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cami-opal'
.. highlight: bash

cami-opal
=========

.. conda:recipe:: cami-opal
   :replaces_section_title:

   OPAL assesses and compares the performance of taxonomic metagenome profilers.

   :homepage: https://github.com/CAMI-challenge/OPAL
   :license: Apache-2.0
   :recipe: /`cami-opal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-opal/meta.yaml>`_

   


.. conda:package:: cami-opal

   |downloads_cami-opal| |docker_cami-opal|

   :versions: 1.0.2-1, 1.0.2-0
   
   :depends biom-format: >=2.1.7
   :depends bokeh: >=0.13.0
   :depends dendropy: >=4.3.0
   :depends docker-py: >=3.5.1
   :depends h5py: >=2.8.0
   :depends matplotlib: >=2.0.2
   :depends numpy: >=1.15.3
   :depends pandas: >=0.23.4
   :depends python: >=3
   :depends scikit-bio: >=0.5.1
   :depends seaborn: >=0.8.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cami-opal

   and update with::

      conda update cami-opal

   or use the docker container::

      docker pull quay.io/biocontainers/cami-opal:<tag>

   (see `cami-opal/tags`_ for valid values for ``<tag>``)


.. |downloads_cami-opal| image:: https://img.shields.io/conda/dn/bioconda/cami-opal.svg?style=flat
   :target: https://anaconda.org/bioconda/cami-opal
   :alt:   (downloads)
.. |docker_cami-opal| image:: https://quay.io/repository/biocontainers/cami-opal/status
   :target: https://quay.io/repository/biocontainers/cami-opal
.. _`cami-opal/tags`: https://quay.io/repository/biocontainers/cami-opal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cami-opal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cami-opal/README.html