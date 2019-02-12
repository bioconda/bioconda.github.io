:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eoulsan'
.. highlight: bash

eoulsan
=======

.. conda:recipe:: eoulsan
   :replaces_section_title:

   A pipeline and a framework for NGS analysis \(RNA\-Seq and Chip\-Seq\)

   :homepage: http://www.tools.genomique.biologie.ens.fr/eoulsan/
   :developer docs: https://github.com/GenomicParisCentre/eoulsan
   :license: GPL / LGPL
   :recipe: /`eoulsan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eoulsan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eoulsan/meta.yaml>`_

   


.. conda:package:: eoulsan

   |downloads_eoulsan| |docker_eoulsan|

   :versions: 2.3-0, 2.2-0, 2.0_beta4-1
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eoulsan

   and update with::

      conda update eoulsan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eoulsan:<tag>

   (see `eoulsan/tags`_ for valid values for ``<tag>``)


.. |downloads_eoulsan| image:: https://img.shields.io/conda/dn/bioconda/eoulsan.svg?style=flat
   :alt:   (downloads)
.. |docker_eoulsan| image:: https://quay.io/repository/biocontainers/eoulsan/status
   :target: https://quay.io/repository/biocontainers/eoulsan
.. _`eoulsan/tags`: https://quay.io/repository/biocontainers/eoulsan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eoulsan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eoulsan/README.html