:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a5-miseq'
.. highlight: bash

a5-miseq
========

.. conda:recipe:: a5-miseq
   :replaces_section_title:

   A5\-miseq is a pipeline for assembling DNA sequence data generated on the Illumina sequencing platform. This README will take you through the steps necessary for running \_A5\-miseq\_

   :homepage: https://sourceforge.net/projects/ngop
   :license: GPLv3
   :recipe: /`a5-miseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq/meta.yaml>`_

   


.. conda:package:: a5-miseq

   |downloads_a5-miseq| |docker_a5-miseq|

   :versions: 20160825-0
   
   :depends openjdk: >=8.0
   
   :depends perl: 5.22.0*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install a5-miseq

   and update with::

      conda update a5-miseq

   or use the docker container::

      docker pull quay.io/biocontainers/a5-miseq:<tag>

   (see `a5-miseq/tags`_ for valid values for ``<tag>``)


.. |downloads_a5-miseq| image:: https://img.shields.io/conda/dn/bioconda/a5-miseq.svg?style=flat
   :alt:   (downloads)
.. |docker_a5-miseq| image:: https://quay.io/repository/biocontainers/a5-miseq/status
   :target: https://quay.io/repository/biocontainers/a5-miseq
.. _`a5-miseq/tags`: https://quay.io/repository/biocontainers/a5-miseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a5-miseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a5-miseq/README.html