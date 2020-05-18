:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pafpy'
.. highlight: bash

pafpy
=====

.. conda:recipe:: pafpy
   :replaces_section_title:

   A lightweight library for working with PAF \(Pairwise mApping Format\) files

   :homepage: https://github.com/mbhall88/pafpy
   :documentation: https://pafpy.xyz
   
   :license: OTHER / Unlicense
   :recipe: /`pafpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pafpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pafpy/meta.yaml>`_

   


.. conda:package:: pafpy

   |downloads_pafpy| |docker_pafpy|

   :versions: 0.1.1-0
   
   :depends python: >=3.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pafpy

   and update with::

      conda update pafpy

   or use the docker container::

      docker pull quay.io/biocontainers/pafpy:<tag>

   (see `pafpy/tags`_ for valid values for ``<tag>``)


.. |downloads_pafpy| image:: https://img.shields.io/conda/dn/bioconda/pafpy.svg?style=flat
   :target: https://anaconda.org/bioconda/pafpy
   :alt:   (downloads)
.. |docker_pafpy| image:: https://quay.io/repository/biocontainers/pafpy/status
   :target: https://quay.io/repository/biocontainers/pafpy
.. _`pafpy/tags`: https://quay.io/repository/biocontainers/pafpy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pafpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pafpy/README.html