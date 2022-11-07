:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xenopuslaeviscdf'
.. highlight: bash

bioconductor-xenopuslaeviscdf
=============================

.. conda:recipe:: bioconductor-xenopuslaeviscdf
   :replaces_section_title:
   :noindex:

   xenopuslaeviscdf

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/xenopuslaeviscdf.html
   :license: LGPL
   :recipe: /`bioconductor-xenopuslaeviscdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenopuslaeviscdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xenopuslaeviscdf/meta.yaml>`_

   A package containing an environment representing the Xenopus\_laevis.cdf file.


.. conda:package:: bioconductor-xenopuslaeviscdf

   |downloads_bioconductor-xenopuslaeviscdf| |docker_bioconductor-xenopuslaeviscdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  <code>2.18.0-3</code>,  <code>2.18.0-2</code>,  </span></summary>
      

      ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-xenopuslaeviscdf

   and update with::

      conda update bioconductor-xenopuslaeviscdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-xenopuslaeviscdf:<tag>

   (see `bioconductor-xenopuslaeviscdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-xenopuslaeviscdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xenopuslaeviscdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xenopuslaeviscdf
   :alt:   (downloads)
.. |docker_bioconductor-xenopuslaeviscdf| image:: https://quay.io/repository/biocontainers/bioconductor-xenopuslaeviscdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xenopuslaeviscdf
.. _`bioconductor-xenopuslaeviscdf/tags`: https://quay.io/repository/biocontainers/bioconductor-xenopuslaeviscdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xenopuslaeviscdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xenopuslaeviscdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xenopuslaeviscdf/README.html