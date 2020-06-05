:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-zerone'
.. highlight: bash

r-zerone
========

.. conda:recipe:: r-zerone
   :replaces_section_title:
   :noindex:

   Zerone discretizes several ChIP\-seq replicates simultaneously and resolves conflicts between them.

   :homepage: https://github.com/nanakiksc/zerone
   :license: GPL / GPL-3
   :recipe: /`r-zerone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-zerone/meta.yaml>`_

   


.. conda:package:: r-zerone

   |downloads_r-zerone| |docker_r-zerone|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-zerone

   and update with::

      conda update r-zerone

   or use the docker container::

      docker pull quay.io/biocontainers/r-zerone:<tag>

   (see `r-zerone/tags`_ for valid values for ``<tag>``)


.. |downloads_r-zerone| image:: https://img.shields.io/conda/dn/bioconda/r-zerone.svg?style=flat
   :target: https://anaconda.org/bioconda/r-zerone
   :alt:   (downloads)
.. |docker_r-zerone| image:: https://quay.io/repository/biocontainers/r-zerone/status
   :target: https://quay.io/repository/biocontainers/r-zerone
.. _`r-zerone/tags`: https://quay.io/repository/biocontainers/r-zerone?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-zerone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-zerone/README.html