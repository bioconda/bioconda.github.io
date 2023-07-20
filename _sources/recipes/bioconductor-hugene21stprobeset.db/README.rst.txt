:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hugene21stprobeset.db'
.. highlight: bash

bioconductor-hugene21stprobeset.db
==================================

.. conda:recipe:: bioconductor-hugene21stprobeset.db
   :replaces_section_title:
   :noindex:

   Affymetrix hugene21 annotation data \(chip hugene21stprobeset\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hugene21stprobeset.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hugene21stprobeset.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene21stprobeset.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hugene21stprobeset.db/meta.yaml>`_

   Affymetrix hugene21 annotation data \(chip hugene21stprobeset\) assembled using data from public repositories


.. conda:package:: bioconductor-hugene21stprobeset.db

   |downloads_bioconductor-hugene21stprobeset.db| |docker_bioconductor-hugene21stprobeset.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  <code>8.7.0-5</code>,  <code>8.7.0-4</code>,  <code>8.7.0-3</code>,  </span></summary>
      

      ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hugene21stprobeset.db

   and update with::

      conda update bioconductor-hugene21stprobeset.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hugene21stprobeset.db:<tag>

   (see `bioconductor-hugene21stprobeset.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hugene21stprobeset.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hugene21stprobeset.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hugene21stprobeset.db
   :alt:   (downloads)
.. |docker_bioconductor-hugene21stprobeset.db| image:: https://quay.io/repository/biocontainers/bioconductor-hugene21stprobeset.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hugene21stprobeset.db
.. _`bioconductor-hugene21stprobeset.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hugene21stprobeset.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hugene21stprobeset.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hugene21stprobeset.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hugene21stprobeset.db/README.html