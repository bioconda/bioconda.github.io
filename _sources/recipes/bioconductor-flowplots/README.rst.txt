.. title:: Package Recipe 'bioconductor-flowplots'
.. highlight: bash


bioconductor-flowplots
======================

.. conda:recipe:: bioconductor-flowplots
   :replaces_section_title:

   Graphical displays with embedded statistical tests for gated ICS flow cytometry data\, and a data class which stores \"stacked\" data and has methods for computing summary measures on stacked data\, such as marginal and polyfunctional degree data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowPlots.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowplots/meta.yaml>`_

   


.. conda:package:: bioconductor-flowplots

   |downloads_bioconductor-flowplots| |docker_bioconductor-flowplots|

   :versions: 1.30.1

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_bioconductor-flowplots|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowplots

   and update with::

      conda update bioconductor-flowplots

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowplots


.. |required_by_bioconductor-flowplots| conda:required_by:: bioconductor-flowplots
.. |downloads_bioconductor-flowplots| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowplots.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowplots| image:: https://quay.io/repository/biocontainers/bioconductor-flowplots/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowplots







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowplots/README.html

