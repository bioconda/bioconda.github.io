:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dammit'
.. highlight: bash

dammit
======

.. conda:recipe:: dammit
   :replaces_section_title:

   simple de novo transcriptome annotator

   :homepage: http://dib-lab.github.io/dammit/
   :license: BSD
   :recipe: /`dammit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit/meta.yaml>`_

   


.. conda:package:: dammit

   |downloads_dammit| |docker_dammit|

   :versions: 1.1-0, 1.0-4, 1.0-3, 1.0.rc0-0, 1.0rc2-2, 1.0rc2-0, 0.3.2-0, 0.3-0
   
   :depends bioconductor-seqlogo: 
   :depends busco: 3.0.2
   :depends doit: >=0.29.0
   :depends hmmer: 
   :depends infernal: 
   :depends khmer: >=2.1
   :depends last: 
   :depends matplotlib: 
   :depends numexpr: >=2.3.1
   :depends numpy: 
   :depends pandas: 
   :depends parallel: 
   :depends python: >3
   :depends shmlast: 
   :depends sphinx: >1.3.1
   :depends sphinx_rtd_theme: >=0.1.9
   :depends transdecoder: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dammit

   and update with::

      conda update dammit

   or use the docker container::

      docker pull quay.io/biocontainers/dammit:<tag>

   (see `dammit/tags`_ for valid values for ``<tag>``)


.. |downloads_dammit| image:: https://img.shields.io/conda/dn/bioconda/dammit.svg?style=flat
   :target: https://anaconda.org/bioconda/dammit
   :alt:   (downloads)
.. |docker_dammit| image:: https://quay.io/repository/biocontainers/dammit/status
   :target: https://quay.io/repository/biocontainers/dammit
.. _`dammit/tags`: https://quay.io/repository/biocontainers/dammit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammit/README.html