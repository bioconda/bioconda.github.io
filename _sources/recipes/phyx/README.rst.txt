:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phyx'
.. highlight: bash

phyx
====

.. conda:recipe:: phyx
   :replaces_section_title:
   :noindex:

   Phylogenetics tools for linux \(and other mostly posix compliant\) computers

   :homepage: https://github.com/FePhyFoFum/phyx
   :license: GPL3
   :recipe: /`phyx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phyx/meta.yaml>`_

   


.. conda:package:: phyx

   |downloads_phyx| |docker_phyx|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends armadillo: ``>=9.900,<10.0a0``
   :depends lapack: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends nlopt: ``>=2.6.2,<2.6.3.0a0``
   :depends openblas: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phyx

   and update with::

      conda update phyx

   or use the docker container::

      docker pull quay.io/biocontainers/phyx:<tag>

   (see `phyx/tags`_ for valid values for ``<tag>``)


.. |downloads_phyx| image:: https://img.shields.io/conda/dn/bioconda/phyx.svg?style=flat
   :target: https://anaconda.org/bioconda/phyx
   :alt:   (downloads)
.. |docker_phyx| image:: https://quay.io/repository/biocontainers/phyx/status
   :target: https://quay.io/repository/biocontainers/phyx
.. _`phyx/tags`: https://quay.io/repository/biocontainers/phyx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phyx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phyx/README.html