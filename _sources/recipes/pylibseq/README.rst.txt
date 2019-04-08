:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylibseq'
.. highlight: bash

pylibseq
========

.. conda:recipe:: pylibseq
   :replaces_section_title:

   A Python interface to libsequence

   :homepage: http://pypi.python.org/pypi/pylibseq
   :license: GNU Lesser General Public License v2 or later (LGPLv2+)
   :recipe: /`pylibseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylibseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylibseq/meta.yaml>`_

   


.. conda:package:: pylibseq

   |downloads_pylibseq| |docker_pylibseq|

   :versions: 0.2.0-2, 0.2.0-1, 0.2.0-0, 0.1.9.post0-0, 0.1.8-0
   
   :depends libsequence: 
   :depends libstdcxx-ng: >=4.9
   :depends msprime: 
   :depends python: >=3.5,<3.6.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pylibseq

   and update with::

      conda update pylibseq

   or use the docker container::

      docker pull quay.io/biocontainers/pylibseq:<tag>

   (see `pylibseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pylibseq| image:: https://img.shields.io/conda/dn/bioconda/pylibseq.svg?style=flat
   :alt:   (downloads)
.. |docker_pylibseq| image:: https://quay.io/repository/biocontainers/pylibseq/status
   :target: https://quay.io/repository/biocontainers/pylibseq
.. _`pylibseq/tags`: https://quay.io/repository/biocontainers/pylibseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylibseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylibseq/README.html