:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gustaf'
.. highlight: bash

gustaf
======

.. conda:recipe:: gustaf
   :replaces_section_title:

   Gustaf is a tool primarily designed for multi\-split mapping of sequencing reads.

   :homepage: https://github.com/seqan/seqan/tree/master/apps/gustaf/README.rst
   :license: https://github.com/seqan/seqan/tree/master/apps/gustaf/LICENSE
   :recipe: /`gustaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gustaf/meta.yaml>`_

   


.. conda:package:: gustaf

   |downloads_gustaf| |docker_gustaf|

   :versions: 1.0.8-1, 1.0.8-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gustaf

   and update with::

      conda update gustaf

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gustaf:<tag>

   (see `gustaf/tags`_ for valid values for ``<tag>``)


.. |downloads_gustaf| image:: https://img.shields.io/conda/dn/bioconda/gustaf.svg?style=flat
   :alt:   (downloads)
.. |docker_gustaf| image:: https://quay.io/repository/biocontainers/gustaf/status
   :target: https://quay.io/repository/biocontainers/gustaf
.. _`gustaf/tags`: https://quay.io/repository/biocontainers/gustaf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gustaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gustaf/README.html