:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-osat'
.. highlight: bash

bioconductor-osat
=================

.. conda:recipe:: bioconductor-osat
   :replaces_section_title:
   :noindex:

   OSAT\: Optimal Sample Assignment Tool

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/OSAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-osat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat/meta.yaml>`_
   :links: biotools: :biotools:`osat`, doi: :doi:`10.1186/1471-2164-13-689`

   A sizable genomics study such as microarray often involves the use of multiple batches \(groups\) of experiment due to practical complication. To minimize batch effects\, a careful experiment design should ensure the even distribution of biological groups and confounding factors across batches. OSAT \(Optimal Sample Assignment Tool\) is developed to facilitate the allocation of collected samples to different batches. With minimum steps\, it produces setup that optimizes the even distribution of samples in groups of biological interest into different batches\, reducing the confounding or correlation between batches and the biological variables of interest. It can also optimize the even distribution of confounding factors across batches. Our tool can handle challenging instances where incomplete and unbalanced sample collections are involved as well as ideal balanced RCBD. OSAT provides a number of predefined layout for some of the most commonly used genomics platform. Related paper can be find at http\:\/\/www.biomedcentral.com\/1471\-2164\/13\/689 .


.. conda:package:: bioconductor-osat

   |downloads_bioconductor-osat| |docker_bioconductor-osat|

   :versions:
      
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-osat

   and update with::

      conda update bioconductor-osat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-osat:<tag>

   (see `bioconductor-osat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-osat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-osat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-osat
   :alt:   (downloads)
.. |docker_bioconductor-osat| image:: https://quay.io/repository/biocontainers/bioconductor-osat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-osat
.. _`bioconductor-osat/tags`: https://quay.io/repository/biocontainers/bioconductor-osat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-osat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-osat/README.html