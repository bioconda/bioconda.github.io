:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanopolishcomp'
.. highlight: bash

nanopolishcomp
==============

.. conda:recipe:: nanopolishcomp
   :replaces_section_title:
   :noindex:

   NanopolishComp is a Python3 package for downstream analyses of Nanopolish output files

   :homepage: https://github.com/a-slide/NanopolishComp
   :license: MIT
   :recipe: /`nanopolishcomp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanopolishcomp/meta.yaml>`_

   


.. conda:package:: nanopolishcomp

   |downloads_nanopolishcomp| |docker_nanopolishcomp|

   :versions:
      
      

      ``0.6.11-0``

      

   
   :depends numpy: ``>=1.14.0``
   :depends python: ``>=3.6``
   :depends tqdm: ``>=4.23.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanopolishcomp

   and update with::

      conda update nanopolishcomp

   or use the docker container::

      docker pull quay.io/biocontainers/nanopolishcomp:<tag>

   (see `nanopolishcomp/tags`_ for valid values for ``<tag>``)


.. |downloads_nanopolishcomp| image:: https://img.shields.io/conda/dn/bioconda/nanopolishcomp.svg?style=flat
   :target: https://anaconda.org/bioconda/nanopolishcomp
   :alt:   (downloads)
.. |docker_nanopolishcomp| image:: https://quay.io/repository/biocontainers/nanopolishcomp/status
   :target: https://quay.io/repository/biocontainers/nanopolishcomp
.. _`nanopolishcomp/tags`: https://quay.io/repository/biocontainers/nanopolishcomp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanopolishcomp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanopolishcomp/README.html