:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piemmer'
.. highlight: bash

piemmer
=======

.. conda:recipe:: piemmer
   :replaces_section_title:
   :noindex:

   A algorithm to simplify the input for principal component analysis

   :homepage: The package home page
   :documentation: https://github.com/HWChang/emmer/wiki
   
   :developer docs: https://github.com/HWChang/emmer/
   :license: BSD / BSD-3-Clause
   :recipe: /`piemmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piemmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piemmer/meta.yaml>`_

   


.. conda:package:: piemmer

   |downloads_piemmer| |docker_piemmer|

   :versions:
      
      

      ``1.0.2.dev0-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scikit-bio: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piemmer

   and update with::

      conda update piemmer

   or use the docker container::

      docker pull quay.io/biocontainers/piemmer:<tag>

   (see `piemmer/tags`_ for valid values for ``<tag>``)


.. |downloads_piemmer| image:: https://img.shields.io/conda/dn/bioconda/piemmer.svg?style=flat
   :target: https://anaconda.org/bioconda/piemmer
   :alt:   (downloads)
.. |docker_piemmer| image:: https://quay.io/repository/biocontainers/piemmer/status
   :target: https://quay.io/repository/biocontainers/piemmer
.. _`piemmer/tags`: https://quay.io/repository/biocontainers/piemmer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piemmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piemmer/README.html