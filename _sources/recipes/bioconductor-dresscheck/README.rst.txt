:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dresscheck'
.. highlight: bash

bioconductor-dresscheck
=======================

.. conda:recipe:: bioconductor-dresscheck
   :replaces_section_title:
   :noindex:

   data and software for checking Dressman JCO 25\(5\) 2007

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/dressCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-dresscheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dresscheck/meta.yaml>`_

   data and software for checking Dressman JCO 25\(5\) 2007


.. conda:package:: bioconductor-dresscheck

   |downloads_bioconductor-dresscheck| |docker_bioconductor-dresscheck|

   :versions:
      
      

      ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends curl: ``>=7.69.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-dresscheck

   and update with::

      conda update bioconductor-dresscheck

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dresscheck:<tag>

   (see `bioconductor-dresscheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dresscheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dresscheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dresscheck
   :alt:   (downloads)
.. |docker_bioconductor-dresscheck| image:: https://quay.io/repository/biocontainers/bioconductor-dresscheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dresscheck
.. _`bioconductor-dresscheck/tags`: https://quay.io/repository/biocontainers/bioconductor-dresscheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dresscheck/README.html