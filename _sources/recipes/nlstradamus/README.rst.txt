:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nlstradamus'
.. highlight: bash

nlstradamus
===========

.. conda:recipe:: nlstradamus
   :replaces_section_title:

   NLStradamus\: a simple Hidden Markov Model for nuclear localization signal prediction.

   :homepage: http://www.moseslab.csb.utoronto.ca/NLStradamus/
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`nlstradamus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nlstradamus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nlstradamus/meta.yaml>`_
   :links: biotools: :biotools:`NLStradamus`

   


.. conda:package:: nlstradamus

   |downloads_nlstradamus| |docker_nlstradamus|

   :versions: 1.8-1, 1.8-0
   
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nlstradamus

   and update with::

      conda update nlstradamus

   or use the docker container::

      docker pull quay.io/biocontainers/nlstradamus:<tag>

   (see `nlstradamus/tags`_ for valid values for ``<tag>``)


.. |downloads_nlstradamus| image:: https://img.shields.io/conda/dn/bioconda/nlstradamus.svg?style=flat
   :alt:   (downloads)
.. |docker_nlstradamus| image:: https://quay.io/repository/biocontainers/nlstradamus/status
   :target: https://quay.io/repository/biocontainers/nlstradamus
.. _`nlstradamus/tags`: https://quay.io/repository/biocontainers/nlstradamus?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nlstradamus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nlstradamus/README.html