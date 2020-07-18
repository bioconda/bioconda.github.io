:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wbuild'
.. highlight: bash

wbuild
======

.. conda:recipe:: wbuild
   :replaces_section_title:
   :noindex:

   Automatic build tool for R Reports

   :homepage: https://github.com/gagneurlab/wBuild
   :license: OTHER / UNKNOWN
   :recipe: /`wbuild <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wbuild>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wbuild/meta.yaml>`_

   


.. conda:package:: wbuild

   |downloads_wbuild| |docker_wbuild|

   :versions:
      
      

      ``1.7.0-0``

      

   
   :depends click: ``>=6.0``
   :depends click-log: 
   :depends python: ``>=3.5``
   :depends pyyaml: ``>=4.2b1``
   :depends snakemake: ``>=5.5.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wbuild

   and update with::

      conda update wbuild

   or use the docker container::

      docker pull quay.io/biocontainers/wbuild:<tag>

   (see `wbuild/tags`_ for valid values for ``<tag>``)


.. |downloads_wbuild| image:: https://img.shields.io/conda/dn/bioconda/wbuild.svg?style=flat
   :target: https://anaconda.org/bioconda/wbuild
   :alt:   (downloads)
.. |docker_wbuild| image:: https://quay.io/repository/biocontainers/wbuild/status
   :target: https://quay.io/repository/biocontainers/wbuild
.. _`wbuild/tags`: https://quay.io/repository/biocontainers/wbuild?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wbuild/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wbuild/README.html