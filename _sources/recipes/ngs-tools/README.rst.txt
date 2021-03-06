:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-tools'
.. highlight: bash

ngs-tools
=========

.. conda:recipe:: ngs-tools
   :replaces_section_title:
   :noindex:

   Reusable tools for working with next\-generation sequencing \(NGS\) data

   :homepage: https://github.com/Lioscro/ngs-tools
   :documentation: https://ngs-tools.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`ngs-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-tools/meta.yaml>`_

   


.. conda:package:: ngs-tools

   |downloads_ngs-tools| |docker_ngs-tools|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``

      

   
   :depends joblib: ``>=1.0.1``
   :depends numba: ``>=0.53.1``
   :depends numpy: ``>=1.19.0``
   :depends pysam: ``>=0.16.0.1``
   :depends pyseq-align: ``>=1.0.0``
   :depends python: ``>=3.6``
   :depends shortuuid: ``>=1.0.1``
   :depends tqdm: ``>=4.50.0``
   :depends typing-extensions: ``>=3.7.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngs-tools

   and update with::

      conda update ngs-tools

   or use the docker container::

      docker pull quay.io/biocontainers/ngs-tools:<tag>

   (see `ngs-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-tools| image:: https://img.shields.io/conda/dn/bioconda/ngs-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-tools
   :alt:   (downloads)
.. |docker_ngs-tools| image:: https://quay.io/repository/biocontainers/ngs-tools/status
   :target: https://quay.io/repository/biocontainers/ngs-tools
.. _`ngs-tools/tags`: https://quay.io/repository/biocontainers/ngs-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-tools/README.html