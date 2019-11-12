:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsort'
.. highlight: bash

gsort
=====

.. conda:recipe:: gsort
   :replaces_section_title:

   sort genomic files according to a genomefile

   :homepage: https://github.com/brentp/gsort
   :license: MIT
   :recipe: /`gsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsort/meta.yaml>`_

   


.. conda:package:: gsort

   |downloads_gsort| |docker_gsort|

   :versions: 0.1.3-0, 0.1.2-0, 0.0.6-1, 0.0.6-0, 0.0.2-0, 0.0.1-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gsort

   and update with::

      conda update gsort

   or use the docker container::

      docker pull quay.io/biocontainers/gsort:<tag>

   (see `gsort/tags`_ for valid values for ``<tag>``)


.. |downloads_gsort| image:: https://img.shields.io/conda/dn/bioconda/gsort.svg?style=flat
   :target: https://anaconda.org/bioconda/gsort
   :alt:   (downloads)
.. |docker_gsort| image:: https://quay.io/repository/biocontainers/gsort/status
   :target: https://quay.io/repository/biocontainers/gsort
.. _`gsort/tags`: https://quay.io/repository/biocontainers/gsort?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsort/README.html