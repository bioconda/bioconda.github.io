:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mummer4'
.. highlight: bash

mummer4
=======

.. conda:recipe:: mummer4
   :replaces_section_title:

   MUMmer is a system for rapidly aligning entire genomes

   :homepage: https://mummer4.github.io/
   :license: The Artistic License 2.0
   :recipe: /`mummer4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mummer4/meta.yaml>`_

   


.. conda:package:: mummer4

   |downloads_mummer4| |docker_mummer4|

   :versions: 4.0.0beta2-3, 4.0.0beta2-2, 4.0.0beta2-1, 4.0.0beta2-0
   
   :depends libgcc-ng: >=4.9
   :depends libstdcxx-ng: >=4.9
   :depends perl: >=5.26.2,<5.26.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mummer4

   and update with::

      conda update mummer4

   or use the docker container::

      docker pull quay.io/biocontainers/mummer4:<tag>

   (see `mummer4/tags`_ for valid values for ``<tag>``)


.. |downloads_mummer4| image:: https://img.shields.io/conda/dn/bioconda/mummer4.svg?style=flat
   :alt:   (downloads)
.. |docker_mummer4| image:: https://quay.io/repository/biocontainers/mummer4/status
   :target: https://quay.io/repository/biocontainers/mummer4
.. _`mummer4/tags`: https://quay.io/repository/biocontainers/mummer4?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mummer4/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mummer4/README.html