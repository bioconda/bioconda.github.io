.. title:: Package Recipe 'bioconductor-clariomdhumantranscriptcluster.db'
.. highlight: bash


bioconductor-clariomdhumantranscriptcluster.db
==============================================

.. conda:recipe:: bioconductor-clariomdhumantranscriptcluster.db
   :replaces_section_title:

   Affymetrix clariomdhuman annotation data \(chip clariomdhumantranscriptcluster\) assembled using data from public repositories

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/clariomdhumantranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clariomdhumantranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clariomdhumantranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clariomdhumantranscriptcluster.db/meta.yaml>`_

   


.. conda:package:: bioconductor-clariomdhumantranscriptcluster.db

   |downloads_bioconductor-clariomdhumantranscriptcluster.db| |docker_bioconductor-clariomdhumantranscriptcluster.db|

   :versions: 8.7.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-org.hs.eg.db` >=3.7.0,<3.8.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-clariomdhumantranscriptcluster.db|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clariomdhumantranscriptcluster.db

   and update with::

      conda update bioconductor-clariomdhumantranscriptcluster.db

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-clariomdhumantranscriptcluster.db


.. |required_by_bioconductor-clariomdhumantranscriptcluster.db| conda:required_by:: bioconductor-clariomdhumantranscriptcluster.db
.. |downloads_bioconductor-clariomdhumantranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clariomdhumantranscriptcluster.db.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-clariomdhumantranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-clariomdhumantranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clariomdhumantranscriptcluster.db







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clariomdhumantranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clariomdhumantranscriptcluster.db/README.html

