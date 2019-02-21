:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reveal'
.. highlight: bash

reveal
======

.. conda:recipe:: reveal
   :replaces_section_title:

   Graph based multi genome aligner

   :homepage: https://github.com/jasperlinthorst/reveal
   :license: MIT
   :recipe: /`reveal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reveal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reveal/meta.yaml>`_

   


.. conda:package:: reveal

   |downloads_reveal| |docker_reveal|

   :versions: 0.1-3, 0.1-2, 0.1-1, 0.1-0
   
   :depends intervaltree: 
   
   :depends libdivsufsort: 
   
   :depends libgcc-ng: >=4.9
   
   :depends matplotlib: 
   
   :depends networkx: 2.0.*
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reveal

   and update with::

      conda update reveal

   or use the docker container::

      docker pull quay.io/biocontainers/reveal:<tag>

   (see `reveal/tags`_ for valid values for ``<tag>``)


.. |downloads_reveal| image:: https://img.shields.io/conda/dn/bioconda/reveal.svg?style=flat
   :alt:   (downloads)
.. |docker_reveal| image:: https://quay.io/repository/biocontainers/reveal/status
   :target: https://quay.io/repository/biocontainers/reveal
.. _`reveal/tags`: https://quay.io/repository/biocontainers/reveal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reveal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reveal/README.html