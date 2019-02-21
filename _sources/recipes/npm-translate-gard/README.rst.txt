:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'translate-gard'
.. highlight: bash

translate-gard
==============

.. conda:recipe:: npm-translate-gard
   :replaces_section_title:

   Converts HyPhy 2.3.2 GARD output to JSON

   :homepage: https://github.com/veg/translate-gard/
   :license: MIT
   :recipe: /`npm-translate-gard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npm-translate-gard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npm-translate-gard/meta.yaml>`_

   


.. conda:package:: translate-gard

   |downloads_translate-gard| |docker_translate-gard|

   :versions: 1.0.4-0, 1.0.3-0
   
   :depends nodejs: 6.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install translate-gard

   and update with::

      conda update translate-gard

   or use the docker container::

      docker pull quay.io/biocontainers/translate-gard:<tag>

   (see `translate-gard/tags`_ for valid values for ``<tag>``)


.. |downloads_translate-gard| image:: https://img.shields.io/conda/dn/bioconda/translate-gard.svg?style=flat
   :alt:   (downloads)
.. |docker_translate-gard| image:: https://quay.io/repository/biocontainers/translate-gard/status
   :target: https://quay.io/repository/biocontainers/translate-gard
.. _`translate-gard/tags`: https://quay.io/repository/biocontainers/translate-gard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/translate-gard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/translate-gard/README.html