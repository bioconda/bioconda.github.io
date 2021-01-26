:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'reportfunk'
.. highlight: bash

reportfunk
==========

.. conda:recipe:: reportfunk
   :replaces_section_title:
   :noindex:

   Central set of functions generally useful for civet\, llama and any report generating tools that may exist in the future

   :homepage: https://github.com/cov-ert/reportfunk
   :license: GPL-3.0
   :recipe: /`reportfunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reportfunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/reportfunk/meta.yaml>`_

   


.. conda:package:: reportfunk

   |downloads_reportfunk| |docker_reportfunk|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: ``>=1.70``
   :depends epiweeks: ``>=2.1.1``
   :depends matplotlib-base: ``>=3.2.1``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install reportfunk

   and update with::

      conda update reportfunk

   or use the docker container::

      docker pull quay.io/biocontainers/reportfunk:<tag>

   (see `reportfunk/tags`_ for valid values for ``<tag>``)


.. |downloads_reportfunk| image:: https://img.shields.io/conda/dn/bioconda/reportfunk.svg?style=flat
   :target: https://anaconda.org/bioconda/reportfunk
   :alt:   (downloads)
.. |docker_reportfunk| image:: https://quay.io/repository/biocontainers/reportfunk/status
   :target: https://quay.io/repository/biocontainers/reportfunk
.. _`reportfunk/tags`: https://quay.io/repository/biocontainers/reportfunk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/reportfunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/reportfunk/README.html