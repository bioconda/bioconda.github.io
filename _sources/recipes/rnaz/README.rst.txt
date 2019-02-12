:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaz'
.. highlight: bash

rnaz
====

.. conda:recipe:: rnaz
   :replaces_section_title:

   predicting structural noncoding RNAs

   :homepage: https://www.tbi.univie.ac.at/~wash/RNAz/
   :license: MIT-like
   :recipe: /`rnaz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaz/meta.yaml>`_
   :links: biotools: :biotools:`rnaz`

   


.. conda:package:: rnaz

   |downloads_rnaz| |docker_rnaz|

   :versions: 2.1-3, 2.1-2, 2.1-1, 2.1-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnaz

   and update with::

      conda update rnaz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/rnaz:<tag>

   (see `rnaz/tags`_ for valid values for ``<tag>``)


.. |downloads_rnaz| image:: https://img.shields.io/conda/dn/bioconda/rnaz.svg?style=flat
   :alt:   (downloads)
.. |docker_rnaz| image:: https://quay.io/repository/biocontainers/rnaz/status
   :target: https://quay.io/repository/biocontainers/rnaz
.. _`rnaz/tags`: https://quay.io/repository/biocontainers/rnaz?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaz/README.html