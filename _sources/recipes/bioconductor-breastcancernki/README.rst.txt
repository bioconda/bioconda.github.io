:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancernki'
.. highlight: bash

bioconductor-breastcancernki
============================

.. conda:recipe:: bioconductor-breastcancernki
   :replaces_section_title:

   Genexpression data from a breast cancer study published by van\'t Veer et al. in 2002 and van de Vijver et al. in 2002\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/breastCancerNKI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancernki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancernki

   |downloads_bioconductor-breastcancernki| |docker_bioconductor-breastcancernki|

   :versions: 1.22.0-0, 1.20.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancernki

   and update with::

      conda update bioconductor-breastcancernki

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancernki:<tag>

   (see `bioconductor-breastcancernki/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancernki| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancernki.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breastcancernki
   :alt:   (downloads)
.. |docker_bioconductor-breastcancernki| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancernki/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancernki
.. _`bioconductor-breastcancernki/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancernki?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html