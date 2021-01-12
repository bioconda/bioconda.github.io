:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phirbo'
.. highlight: bash

phirbo
======

.. conda:recipe:: phirbo
   :replaces_section_title:
   :noindex:

   Predict prokaryotic hosts for phage \(meta\) genomic sequences

   :homepage: https://github.com/aziele/phirbo
   :license: GPL3
   :recipe: /`phirbo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phirbo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phirbo/meta.yaml>`_

   


.. conda:package:: phirbo

   |downloads_phirbo| |docker_phirbo|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.22.1``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phirbo

   and update with::

      conda update phirbo

   or use the docker container::

      docker pull quay.io/biocontainers/phirbo:<tag>

   (see `phirbo/tags`_ for valid values for ``<tag>``)


.. |downloads_phirbo| image:: https://img.shields.io/conda/dn/bioconda/phirbo.svg?style=flat
   :target: https://anaconda.org/bioconda/phirbo
   :alt:   (downloads)
.. |docker_phirbo| image:: https://quay.io/repository/biocontainers/phirbo/status
   :target: https://quay.io/repository/biocontainers/phirbo
.. _`phirbo/tags`: https://quay.io/repository/biocontainers/phirbo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phirbo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phirbo/README.html