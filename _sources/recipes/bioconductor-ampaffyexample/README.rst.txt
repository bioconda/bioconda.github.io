:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ampaffyexample'
.. highlight: bash

bioconductor-ampaffyexample
===========================

.. conda:recipe:: bioconductor-ampaffyexample
   :replaces_section_title:
   :noindex:

   Example of Amplified Data

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/AmpAffyExample.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-ampaffyexample <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ampaffyexample>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ampaffyexample/meta.yaml>`_

   Six arrays. Three from amplified RNA\, three from the typical procedure.


.. conda:package:: bioconductor-ampaffyexample

   |downloads_bioconductor-ampaffyexample| |docker_bioconductor-ampaffyexample|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-data-packages: ``>=20221104``
   :depends curl: ``>=7.86.0,<8.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ampaffyexample

   and update with::

      conda update bioconductor-ampaffyexample

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ampaffyexample:<tag>

   (see `bioconductor-ampaffyexample/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ampaffyexample| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ampaffyexample.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ampaffyexample
   :alt:   (downloads)
.. |docker_bioconductor-ampaffyexample| image:: https://quay.io/repository/biocontainers/bioconductor-ampaffyexample/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ampaffyexample
.. _`bioconductor-ampaffyexample/tags`: https://quay.io/repository/biocontainers/bioconductor-ampaffyexample?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ampaffyexample";
        var versions = ["1.38.0","1.34.0","1.34.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ampaffyexample/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ampaffyexample/README.html