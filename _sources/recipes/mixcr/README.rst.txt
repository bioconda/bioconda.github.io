:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mixcr'
.. highlight: bash

mixcr
=====

.. conda:recipe:: mixcr
   :replaces_section_title:

   MiXCR is a universal software for fast and accurate analysis of raw T\- or B\- cell receptor repertoire sequencing data.


   :homepage: https://github.com/milaboratory/mixcr
   :license: https://github.com/milaboratory/mixcr/blob/develop/LICENSE
   :recipe: /`mixcr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixcr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixcr/meta.yaml>`_

   


.. conda:package:: mixcr

   |downloads_mixcr| |docker_mixcr|

   :versions: 3.0.10-0, 3.0.9-0, 3.0.8-0, 3.0.7-0, 3.0.5-0, 2.1.10-1, 2.1.10-0, 2.1.3-0
   
   :depends openjdk: >=11
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mixcr

   and update with::

      conda update mixcr

   or use the docker container::

      docker pull quay.io/biocontainers/mixcr:<tag>

   (see `mixcr/tags`_ for valid values for ``<tag>``)


.. |downloads_mixcr| image:: https://img.shields.io/conda/dn/bioconda/mixcr.svg?style=flat
   :target: https://anaconda.org/bioconda/mixcr
   :alt:   (downloads)
.. |docker_mixcr| image:: https://quay.io/repository/biocontainers/mixcr/status
   :target: https://quay.io/repository/biocontainers/mixcr
.. _`mixcr/tags`: https://quay.io/repository/biocontainers/mixcr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mixcr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mixcr/README.html