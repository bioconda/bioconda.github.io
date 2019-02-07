.. title:: Package Recipe 'bioconductor-tabulamurisdata'
.. highlight: bash


bioconductor-tabulamurisdata
============================

.. conda:recipe:: bioconductor-tabulamurisdata
   :replaces_section_title:

   Access to processed 10x \(droplet\) and SmartSeq2 \(on FACS\-sorted cells\) single\-cell RNA\-seq data from the Tabula Muris consortium \(http\:\/\/tabula\-muris.ds.czbiohub.org\/\).

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/TabulaMurisData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tabulamurisdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tabulamurisdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tabulamurisdata/meta.yaml>`_

   


.. conda:package:: bioconductor-tabulamurisdata

   |downloads_bioconductor-tabulamurisdata| |docker_bioconductor-tabulamurisdata|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-tabulamurisdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tabulamurisdata

   and update with::

      conda update bioconductor-tabulamurisdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tabulamurisdata


.. |required_by_bioconductor-tabulamurisdata| conda:required_by:: bioconductor-tabulamurisdata
.. |downloads_bioconductor-tabulamurisdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tabulamurisdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tabulamurisdata| image:: https://quay.io/repository/biocontainers/bioconductor-tabulamurisdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tabulamurisdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tabulamurisdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tabulamurisdata/README.html

