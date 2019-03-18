:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gemma'
.. highlight: bash

gemma
=====

.. conda:recipe:: gemma
   :replaces_section_title:

   Linear mixed models \(LMMs\) for genome\-wide association \(GWA\)

   :homepage: https://github.com/genetics-statistics/GEMMA
   :license: GPLv3
   :recipe: /`gemma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gemma/meta.yaml>`_

   


.. conda:package:: gemma

   |downloads_gemma| |docker_gemma|

   :versions: 0.98-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends openblas: >=0.2.20,<0.2.21.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gemma

   and update with::

      conda update gemma

   or use the docker container::

      docker pull quay.io/biocontainers/gemma:<tag>

   (see `gemma/tags`_ for valid values for ``<tag>``)


.. |downloads_gemma| image:: https://img.shields.io/conda/dn/bioconda/gemma.svg?style=flat
   :alt:   (downloads)
.. |docker_gemma| image:: https://quay.io/repository/biocontainers/gemma/status
   :target: https://quay.io/repository/biocontainers/gemma
.. _`gemma/tags`: https://quay.io/repository/biocontainers/gemma?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gemma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gemma/README.html