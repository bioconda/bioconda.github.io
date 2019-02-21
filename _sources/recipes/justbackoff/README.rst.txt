:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'justbackoff'
.. highlight: bash

justbackoff
===========

.. conda:recipe:: justbackoff
   :replaces_section_title:

   Simple backoff algorithm in Python

   :homepage: https://github.com/admiralobvious/justbackoff
   :license: MIT / MIT
   :recipe: /`justbackoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/justbackoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/justbackoff/meta.yaml>`_

   


.. conda:package:: justbackoff

   |downloads_justbackoff| |docker_justbackoff|

   :versions: 0.4.0-1, 0.4.0-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install justbackoff

   and update with::

      conda update justbackoff

   or use the docker container::

      docker pull quay.io/biocontainers/justbackoff:<tag>

   (see `justbackoff/tags`_ for valid values for ``<tag>``)


.. |downloads_justbackoff| image:: https://img.shields.io/conda/dn/bioconda/justbackoff.svg?style=flat
   :alt:   (downloads)
.. |docker_justbackoff| image:: https://quay.io/repository/biocontainers/justbackoff/status
   :target: https://quay.io/repository/biocontainers/justbackoff
.. _`justbackoff/tags`: https://quay.io/repository/biocontainers/justbackoff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/justbackoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/justbackoff/README.html