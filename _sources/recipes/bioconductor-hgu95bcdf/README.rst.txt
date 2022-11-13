:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95bcdf'
.. highlight: bash

bioconductor-hgu95bcdf
======================

.. conda:recipe:: bioconductor-hgu95bcdf
   :replaces_section_title:
   :noindex:

   hgu95bcdf

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/hgu95bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf/meta.yaml>`_

   A package containing an environment representing the HG U95B.CDF file.


.. conda:package:: bioconductor-hgu95bcdf

   |downloads_bioconductor-hgu95bcdf| |docker_bioconductor-hgu95bcdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu95bcdf

   and update with::

      conda update bioconductor-hgu95bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95bcdf:<tag>

   (see `bioconductor-hgu95bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95bcdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf
.. _`bioconductor-hgu95bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95bcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html