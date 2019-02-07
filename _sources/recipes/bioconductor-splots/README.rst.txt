.. title:: Package Recipe 'bioconductor-splots'
.. highlight: bash


bioconductor-splots
===================

.. conda:recipe:: bioconductor-splots
   :replaces_section_title:

   The splots package provides the plotScreen function for visualising data in microtitre plate or slide format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/splots.html
   :license: LGPL
   :recipe: /`bioconductor-splots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splots/meta.yaml>`_
   :links: biotools: :biotools:`splots`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-splots

   |downloads_bioconductor-splots| |docker_bioconductor-splots|

   :versions: 1.48.0, 1.46.0, 1.44.0, 1.42.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-splots|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-splots

   and update with::

      conda update bioconductor-splots

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-splots


.. |required_by_bioconductor-splots| conda:required_by:: bioconductor-splots
.. |downloads_bioconductor-splots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splots.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-splots| image:: https://quay.io/repository/biocontainers/bioconductor-splots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splots







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splots/README.html

