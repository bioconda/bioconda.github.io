:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feature_merge'
.. highlight: bash

feature_merge
=============

.. conda:recipe:: feature_merge
   :replaces_section_title:

   Merge features in GFF files

   :homepage: https://github.com/brinkmanlab/feature_merge
   :license: MIT / MIT
   :recipe: /`feature_merge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feature_merge/meta.yaml>`_

   


.. conda:package:: feature_merge

   |downloads_feature_merge| |docker_feature_merge|

   :versions: 1.0.1-0
   
   :depends gffutils: >=0.9
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install feature_merge

   and update with::

      conda update feature_merge

   or use the docker container::

      docker pull quay.io/biocontainers/feature_merge:<tag>

   (see `feature_merge/tags`_ for valid values for ``<tag>``)


.. |downloads_feature_merge| image:: https://img.shields.io/conda/dn/bioconda/feature_merge.svg?style=flat
   :target: https://anaconda.org/bioconda/feature_merge
   :alt:   (downloads)
.. |docker_feature_merge| image:: https://quay.io/repository/biocontainers/feature_merge/status
   :target: https://quay.io/repository/biocontainers/feature_merge
.. _`feature_merge/tags`: https://quay.io/repository/biocontainers/feature_merge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feature_merge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feature_merge/README.html