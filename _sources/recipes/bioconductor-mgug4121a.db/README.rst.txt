:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mgug4121a.db'
.. highlight: bash

bioconductor-mgug4121a.db
=========================

.. conda:recipe:: bioconductor-mgug4121a.db
   :replaces_section_title:
   :noindex:

   Agilent Mouse annotation data \(chip mgug4121a\)

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/mgug4121a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mgug4121a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgug4121a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mgug4121a.db/meta.yaml>`_

   Agilent Mouse annotation data \(chip mgug4121a\) assembled using data from public repositories


.. conda:package:: bioconductor-mgug4121a.db

   |downloads_bioconductor-mgug4121a.db| |docker_bioconductor-mgug4121a.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-10</code>,  <code>3.2.3-9</code>,  <code>3.2.3-8</code>,  <code>3.2.3-7</code>,  <code>3.2.3-6</code>,  <code>3.2.3-5</code>,  <code>3.2.3-4</code>,  <code>3.2.3-3</code>,  <code>3.2.3-2</code>,  </span></summary>
      

      ``3.2.3-10``,  ``3.2.3-9``,  ``3.2.3-8``,  ``3.2.3-7``,  ``3.2.3-6``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends bioconductor-org.mm.eg.db: ``>=3.16.0,<3.17.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mgug4121a.db

   and update with::

      conda update bioconductor-mgug4121a.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mgug4121a.db:<tag>

   (see `bioconductor-mgug4121a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mgug4121a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mgug4121a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mgug4121a.db
   :alt:   (downloads)
.. |docker_bioconductor-mgug4121a.db| image:: https://quay.io/repository/biocontainers/bioconductor-mgug4121a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mgug4121a.db
.. _`bioconductor-mgug4121a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mgug4121a.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mgug4121a.db";
        var versions = ["3.2.3","3.2.3","3.2.3","3.2.3","3.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mgug4121a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mgug4121a.db/README.html