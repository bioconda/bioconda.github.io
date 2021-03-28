:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gecko'
.. highlight: bash

gecko
=====

.. conda:recipe:: gecko
   :replaces_section_title:
   :noindex:

   A pairwise genome comparison software for the detection of High\-scoring Segment Pairs

   :homepage: https://github.com/otorreno/gecko
   :license: GPL / GPL-3.0
   :recipe: /`gecko <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gecko/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-015-0679-9`

   


.. conda:package:: gecko

   |downloads_gecko| |docker_gecko|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.1.b-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gecko

   and update with::

      conda update gecko

   or use the docker container::

      docker pull quay.io/biocontainers/gecko:<tag>

   (see `gecko/tags`_ for valid values for ``<tag>``)


.. |downloads_gecko| image:: https://img.shields.io/conda/dn/bioconda/gecko.svg?style=flat
   :target: https://anaconda.org/bioconda/gecko
   :alt:   (downloads)
.. |docker_gecko| image:: https://quay.io/repository/biocontainers/gecko/status
   :target: https://quay.io/repository/biocontainers/gecko
.. _`gecko/tags`: https://quay.io/repository/biocontainers/gecko?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gecko/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gecko/README.html