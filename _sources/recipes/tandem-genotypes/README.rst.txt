:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tandem-genotypes'
.. highlight: bash

tandem-genotypes
================

.. conda:recipe:: tandem-genotypes
   :replaces_section_title:
   :noindex:

   Find tandem repeat length changes\, from \"long\" DNA reads aligned to a genome

   :homepage: https://github.com/mcfrith/tandem-genotypes
   :license: GPL-3.0-or-later
   :recipe: /`tandem-genotypes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandem-genotypes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tandem-genotypes/meta.yaml>`_

   


.. conda:package:: tandem-genotypes

   |downloads_tandem-genotypes| |docker_tandem-genotypes|

   :versions:
      
      

      ``1.8.0-0``,  ``1.7.2-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends python: 
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tandem-genotypes

   and update with::

      conda update tandem-genotypes

   or use the docker container::

      docker pull quay.io/biocontainers/tandem-genotypes:<tag>

   (see `tandem-genotypes/tags`_ for valid values for ``<tag>``)


.. |downloads_tandem-genotypes| image:: https://img.shields.io/conda/dn/bioconda/tandem-genotypes.svg?style=flat
   :target: https://anaconda.org/bioconda/tandem-genotypes
   :alt:   (downloads)
.. |docker_tandem-genotypes| image:: https://quay.io/repository/biocontainers/tandem-genotypes/status
   :target: https://quay.io/repository/biocontainers/tandem-genotypes
.. _`tandem-genotypes/tags`: https://quay.io/repository/biocontainers/tandem-genotypes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tandem-genotypes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tandem-genotypes/README.html