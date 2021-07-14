:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mixem'
.. highlight: bash

mixem
=====

.. conda:recipe:: mixem
   :replaces_section_title:
   :noindex:

   Expectation\-Maximization \(EM\) algorithm for fitting mixtures of probability distributions

   :homepage: https://github.com/sseemayer/mixem
   :license: MIT / MIT
   :recipe: /`mixem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mixem/meta.yaml>`_

   


.. conda:package:: mixem

   |downloads_mixem| |docker_mixem|

   :versions:
      
      

      ``0.1.4-0``

      

   
   :depends numpy: ``>=1.7.0``
   :depends python: 
   :depends scipy: ``>=0.14.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mixem

   and update with::

      conda update mixem

   or use the docker container::

      docker pull quay.io/biocontainers/mixem:<tag>

   (see `mixem/tags`_ for valid values for ``<tag>``)


.. |downloads_mixem| image:: https://img.shields.io/conda/dn/bioconda/mixem.svg?style=flat
   :target: https://anaconda.org/bioconda/mixem
   :alt:   (downloads)
.. |docker_mixem| image:: https://quay.io/repository/biocontainers/mixem/status
   :target: https://quay.io/repository/biocontainers/mixem
.. _`mixem/tags`: https://quay.io/repository/biocontainers/mixem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mixem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mixem/README.html