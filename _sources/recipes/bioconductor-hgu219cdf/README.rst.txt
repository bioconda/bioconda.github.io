:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu219cdf'
.. highlight: bash

bioconductor-hgu219cdf
======================

.. conda:recipe:: bioconductor-hgu219cdf
   :replaces_section_title:
   :noindex:

   hgu219cdf

   :homepage: https://bioconductor.org/packages/3.16/data/annotation/html/hgu219cdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu219cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu219cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu219cdf/meta.yaml>`_

   A package containing an environment representing the HG\-U219.cdf file.


.. conda:package:: bioconductor-hgu219cdf

   |downloads_bioconductor-hgu219cdf| |docker_bioconductor-hgu219cdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221102``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu219cdf

   and update with::

      conda update bioconductor-hgu219cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu219cdf:<tag>

   (see `bioconductor-hgu219cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu219cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu219cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu219cdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu219cdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu219cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu219cdf
.. _`bioconductor-hgu219cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu219cdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu219cdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu219cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu219cdf/README.html