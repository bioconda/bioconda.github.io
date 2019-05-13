:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmvc'
.. highlight: bash

mmvc
====

.. conda:recipe:: mmvc
   :replaces_section_title:

   Call variants based on a Bayesian multinomial mixture model.

   :homepage: https://github.com/veg/mmvc
   :license: MIT
   :recipe: /`mmvc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmvc/meta.yaml>`_

   


.. conda:package:: mmvc

   |downloads_mmvc| |docker_mmvc|

   :versions: 1.0.2-1, 1.0.2-0
   
   :depends julia: 0.6.1.*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mmvc

   and update with::

      conda update mmvc

   or use the docker container::

      docker pull quay.io/biocontainers/mmvc:<tag>

   (see `mmvc/tags`_ for valid values for ``<tag>``)


.. |downloads_mmvc| image:: https://img.shields.io/conda/dn/bioconda/mmvc.svg?style=flat
   :target: https://anaconda.org/bioconda/mmvc
   :alt:   (downloads)
.. |docker_mmvc| image:: https://quay.io/repository/biocontainers/mmvc/status
   :target: https://quay.io/repository/biocontainers/mmvc
.. _`mmvc/tags`: https://quay.io/repository/biocontainers/mmvc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmvc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmvc/README.html