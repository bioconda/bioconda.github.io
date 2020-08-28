:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clearcut'
.. highlight: bash

clearcut
========

.. conda:recipe:: clearcut
   :replaces_section_title:
   :noindex:

   The reference implementation for Relaxed Neighbor Joining \(RNJ\).

   :homepage: http://www.mothur.org
   :license: BSD
   :recipe: /`clearcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clearcut/meta.yaml>`_

   


.. conda:package:: clearcut

   |downloads_clearcut| |docker_clearcut|

   :versions:
      
      

      ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.9-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clearcut

   and update with::

      conda update clearcut

   or use the docker container::

      docker pull quay.io/biocontainers/clearcut:<tag>

   (see `clearcut/tags`_ for valid values for ``<tag>``)


.. |downloads_clearcut| image:: https://img.shields.io/conda/dn/bioconda/clearcut.svg?style=flat
   :target: https://anaconda.org/bioconda/clearcut
   :alt:   (downloads)
.. |docker_clearcut| image:: https://quay.io/repository/biocontainers/clearcut/status
   :target: https://quay.io/repository/biocontainers/clearcut
.. _`clearcut/tags`: https://quay.io/repository/biocontainers/clearcut?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clearcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clearcut/README.html