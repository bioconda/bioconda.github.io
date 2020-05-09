:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'comparem'
.. highlight: bash

comparem
========

.. conda:recipe:: comparem
   :replaces_section_title:

   A toolbox for comparative genomics.

   :homepage: https://github.com/dparks1134/CompareM
   :license: GPL / GPL-3
   :recipe: /`comparem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/comparem/meta.yaml>`_

   


.. conda:package:: comparem

   |downloads_comparem| |docker_comparem|

   :versions: 0.1.1-0
   
   :depends biolib: >=0.1.0
   :depends diamond: >=0.9.0
   :depends matplotlib-base: >=1.3.1
   :depends numpy: >=1.8.0
   :depends prodigal: >=2.6.2
   :depends python: >=3.6
   :depends scipy: >=0.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install comparem

   and update with::

      conda update comparem

   or use the docker container::

      docker pull quay.io/biocontainers/comparem:<tag>

   (see `comparem/tags`_ for valid values for ``<tag>``)


.. |downloads_comparem| image:: https://img.shields.io/conda/dn/bioconda/comparem.svg?style=flat
   :target: https://anaconda.org/bioconda/comparem
   :alt:   (downloads)
.. |docker_comparem| image:: https://quay.io/repository/biocontainers/comparem/status
   :target: https://quay.io/repository/biocontainers/comparem
.. _`comparem/tags`: https://quay.io/repository/biocontainers/comparem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/comparem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/comparem/README.html