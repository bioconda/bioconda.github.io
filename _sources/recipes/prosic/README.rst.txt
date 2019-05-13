:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosic'
.. highlight: bash

prosic
======

.. conda:recipe:: prosic
   :replaces_section_title:

   A highly sensitive and accurate Bayesian caller for somatic insertions and deletions.

   :homepage: https://prosic.github.io
   :license: GPLv3
   :recipe: /`prosic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosic/meta.yaml>`_

   


.. conda:package:: prosic

   |downloads_prosic| |docker_prosic|

   :versions: 2.1.0-0, 2.0.0-0, 1.0-1, 1.0-0
   
   :depends gsl: 1.16*
   :depends libgcc: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prosic

   and update with::

      conda update prosic

   or use the docker container::

      docker pull quay.io/biocontainers/prosic:<tag>

   (see `prosic/tags`_ for valid values for ``<tag>``)


.. |downloads_prosic| image:: https://img.shields.io/conda/dn/bioconda/prosic.svg?style=flat
   :target: https://anaconda.org/bioconda/prosic
   :alt:   (downloads)
.. |docker_prosic| image:: https://quay.io/repository/biocontainers/prosic/status
   :target: https://quay.io/repository/biocontainers/prosic
.. _`prosic/tags`: https://quay.io/repository/biocontainers/prosic?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosic/README.html