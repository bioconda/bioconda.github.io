:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jarvis'
.. highlight: bash

jarvis
======

.. conda:recipe:: jarvis
   :replaces_section_title:

   Efficient lossless compression of genomic sequences

   :homepage: https://github.com/cobilab/jarvis
   :license: GPL / GPL3
   :recipe: /`jarvis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jarvis/meta.yaml>`_

   


.. conda:package:: jarvis

   |downloads_jarvis| |docker_jarvis|

   :versions: 1.1-0
   
   :depends libgcc-ng: >=7.3.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jarvis

   and update with::

      conda update jarvis

   or use the docker container::

      docker pull quay.io/biocontainers/jarvis:<tag>

   (see `jarvis/tags`_ for valid values for ``<tag>``)


.. |downloads_jarvis| image:: https://img.shields.io/conda/dn/bioconda/jarvis.svg?style=flat
   :target: https://anaconda.org/bioconda/jarvis
   :alt:   (downloads)
.. |docker_jarvis| image:: https://quay.io/repository/biocontainers/jarvis/status
   :target: https://quay.io/repository/biocontainers/jarvis
.. _`jarvis/tags`: https://quay.io/repository/biocontainers/jarvis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jarvis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jarvis/README.html