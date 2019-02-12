:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tgt'
.. highlight: bash

tgt
===

.. conda:recipe:: tgt
   :replaces_section_title:

   TextGridTools \-\- Read\, write\, and manipulate Praat TextGrid files

   :homepage: https://github.com/hbuschme/TextGridTools/
   :license: GPL / GPL-3.0+
   :recipe: /`tgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt/meta.yaml>`_

   


.. conda:package:: tgt

   |downloads_tgt| |docker_tgt|

   :versions: 1.4.3-2, 1.4.3-0, 1.4.2-0
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tgt

   and update with::

      conda update tgt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tgt:<tag>

   (see `tgt/tags`_ for valid values for ``<tag>``)


.. |downloads_tgt| image:: https://img.shields.io/conda/dn/bioconda/tgt.svg?style=flat
   :alt:   (downloads)
.. |docker_tgt| image:: https://quay.io/repository/biocontainers/tgt/status
   :target: https://quay.io/repository/biocontainers/tgt
.. _`tgt/tags`: https://quay.io/repository/biocontainers/tgt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tgt/README.html