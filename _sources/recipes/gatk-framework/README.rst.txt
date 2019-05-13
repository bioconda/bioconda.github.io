:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatk-framework'
.. highlight: bash

gatk-framework
==============

.. conda:recipe:: gatk-framework
   :replaces_section_title:

   The core MIT\-licensed Genome Analysis Toolkit \(GATK\) framework\, free for all uses

   :homepage: https://github.com/chapmanb/gatk
   :license: MIT
   :recipe: /`gatk-framework <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatk-framework/meta.yaml>`_

   


.. conda:package:: gatk-framework

   |downloads_gatk-framework| |docker_gatk-framework|

   :versions: 3.6.24-5, 3.6.24-4, 3.6.24-3, 3.6.24-2, 3.6.24-1, 3.6.24-0, 3.5.21-0, 3.4.46-3, 3.4.46-2, 3.4.46-1, 3.4.46-0
   
   :depends openjdk: >=8,<9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatk-framework

   and update with::

      conda update gatk-framework

   or use the docker container::

      docker pull quay.io/biocontainers/gatk-framework:<tag>

   (see `gatk-framework/tags`_ for valid values for ``<tag>``)


.. |downloads_gatk-framework| image:: https://img.shields.io/conda/dn/bioconda/gatk-framework.svg?style=flat
   :target: https://anaconda.org/bioconda/gatk-framework
   :alt:   (downloads)
.. |docker_gatk-framework| image:: https://quay.io/repository/biocontainers/gatk-framework/status
   :target: https://quay.io/repository/biocontainers/gatk-framework
.. _`gatk-framework/tags`: https://quay.io/repository/biocontainers/gatk-framework?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatk-framework/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatk-framework/README.html