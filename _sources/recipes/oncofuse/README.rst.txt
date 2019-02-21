:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oncofuse'
.. highlight: bash

oncofuse
========

.. conda:recipe:: oncofuse
   :replaces_section_title:

   Predicting oncogenic potential of gene fusions

   :homepage: https://github.com/mikessh/oncofuse
   :license: Apache v2.0
   :recipe: /`oncofuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncofuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oncofuse/meta.yaml>`_

   


.. conda:package:: oncofuse

   |downloads_oncofuse| |docker_oncofuse|

   :versions: 1.1.1-1, 1.1.1-0, 1.1.0-2, 1.1.0-1, 1.1.0-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install oncofuse

   and update with::

      conda update oncofuse

   or use the docker container::

      docker pull quay.io/biocontainers/oncofuse:<tag>

   (see `oncofuse/tags`_ for valid values for ``<tag>``)


.. |downloads_oncofuse| image:: https://img.shields.io/conda/dn/bioconda/oncofuse.svg?style=flat
   :alt:   (downloads)
.. |docker_oncofuse| image:: https://quay.io/repository/biocontainers/oncofuse/status
   :target: https://quay.io/repository/biocontainers/oncofuse
.. _`oncofuse/tags`: https://quay.io/repository/biocontainers/oncofuse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oncofuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oncofuse/README.html