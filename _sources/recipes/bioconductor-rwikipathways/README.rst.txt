.. title:: Package Recipe 'bioconductor-rwikipathways'
.. highlight: bash


bioconductor-rwikipathways
==========================

.. conda:recipe:: bioconductor-rwikipathways
   :replaces_section_title:

   Use this package to interface with the WikiPathways API.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/rWikiPathways.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rwikipathways <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rwikipathways/meta.yaml>`_

   


.. conda:package:: bioconductor-rwikipathways

   |downloads_bioconductor-rwikipathways| |docker_bioconductor-rwikipathways|

   :versions: 1.2.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-catools`  :conda:package:`r-httr`  :conda:package:`r-rjsonio`  

   :required~by: |required_by_bioconductor-rwikipathways|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rwikipathways

   and update with::

      conda update bioconductor-rwikipathways

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rwikipathways


.. |required_by_bioconductor-rwikipathways| conda:required_by:: bioconductor-rwikipathways
.. |downloads_bioconductor-rwikipathways| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rwikipathways.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rwikipathways| image:: https://quay.io/repository/biocontainers/bioconductor-rwikipathways/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rwikipathways







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rwikipathways/README.html

