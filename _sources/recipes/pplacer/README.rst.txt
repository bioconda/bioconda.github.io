:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pplacer'
.. highlight: bash

pplacer
=======

.. conda:recipe:: pplacer
   :replaces_section_title:

   Pplacer places query sequences on a fixed reference phylogenetic tree to maximize phylogenetic likelihood or posterior probability according to a reference alignment.

   :homepage: http://matsen.fredhutch.org/pplacer/
   :developer docs: https://github.com/matsen/pplacer/
   :license: GPL / GPL-3.0
   :recipe: /`pplacer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pplacer/meta.yaml>`_

   


.. conda:package:: pplacer

   |downloads_pplacer| |docker_pplacer|

   :versions: 1.1.alpha19-1, 1.1.alpha19-0, 1.1.alpha17-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pplacer

   and update with::

      conda update pplacer

   or use the docker container::

      docker pull quay.io/biocontainers/pplacer:<tag>

   (see `pplacer/tags`_ for valid values for ``<tag>``)


.. |downloads_pplacer| image:: https://img.shields.io/conda/dn/bioconda/pplacer.svg?style=flat
   :alt:   (downloads)
.. |docker_pplacer| image:: https://quay.io/repository/biocontainers/pplacer/status
   :target: https://quay.io/repository/biocontainers/pplacer
.. _`pplacer/tags`: https://quay.io/repository/biocontainers/pplacer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pplacer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pplacer/README.html