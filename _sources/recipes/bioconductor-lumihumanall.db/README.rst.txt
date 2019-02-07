.. title:: Package Recipe 'bioconductor-lumihumanall.db'
.. highlight: bash


bioconductor-lumihumanall.db
============================

.. conda:recipe:: bioconductor-lumihumanall.db
   :replaces_section_title:

   Illumina Human Illumina expression annotation data \(chip lumiHumanAll\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/lumiHumanAll.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lumihumanall.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lumihumanall.db/meta.yaml>`_

   


.. conda:package:: bioconductor-lumihumanall.db

   |downloads_bioconductor-lumihumanall.db| |docker_bioconductor-lumihumanall.db|

   :versions: 1.22.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.23.25 :conda:package:`bioconductor-org.hs.eg.db` >=2.10.1 :conda:package:`r-base` 3.4.1* :conda:package:`wget`  

   :required~by: |required_by_bioconductor-lumihumanall.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lumihumanall.db

   and update with::

      conda update bioconductor-lumihumanall.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lumihumanall.db


.. |required_by_bioconductor-lumihumanall.db| conda:required_by:: bioconductor-lumihumanall.db
.. |downloads_bioconductor-lumihumanall.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lumihumanall.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lumihumanall.db| image:: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lumihumanall.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lumihumanall.db/README.html

