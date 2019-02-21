:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jali'
.. highlight: bash

jali
====

.. conda:recipe:: jali
   :replaces_section_title:

   Alignment method for comparing a protein sequence to a protein family\, represented by a multiple alignment. It can also be used for sensitive protein database searches. The algorithm is a generalization of the Smith\-Waterman algorithm.

   :homepage: http://bibiserv.cebitec.uni-bielefeld.de/jali
   :license: file
   :recipe: /`jali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali/meta.yaml>`_
   :links: biotools: :biotools:`jali`, doi: :doi:`10.1089/106652702761034172`

   


.. conda:package:: jali

   |downloads_jali| |docker_jali|

   :versions: 1.3-1, 1.3-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jali

   and update with::

      conda update jali

   or use the docker container::

      docker pull quay.io/biocontainers/jali:<tag>

   (see `jali/tags`_ for valid values for ``<tag>``)


.. |downloads_jali| image:: https://img.shields.io/conda/dn/bioconda/jali.svg?style=flat
   :alt:   (downloads)
.. |docker_jali| image:: https://quay.io/repository/biocontainers/jali/status
   :target: https://quay.io/repository/biocontainers/jali
.. _`jali/tags`: https://quay.io/repository/biocontainers/jali?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jali/README.html