:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pcxndata'
.. highlight: bash

bioconductor-pcxndata
=====================

.. conda:recipe:: bioconductor-pcxndata
   :replaces_section_title:
   :noindex:

   Correlation coefficients and p values between pre\-defined pathway\/gene sets

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/pcxnData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pcxndata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pcxndata/meta.yaml>`_

   PCxN database contains correlation coefficients and p values between pre\-defined gene sets within MSigDB H hallmark gene sets\, MSigDB C2 CP \(Canonical pathways\)\, MSigDB C5 GO BP gene sets and Pathprint respectively\, as well as adjusted pathway correlations to account for the shared genes between pathway pairs.


.. conda:package:: bioconductor-pcxndata

   |downloads_bioconductor-pcxndata| |docker_bioconductor-pcxndata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-2</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.11.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-0``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pcxndata

   and update with::

      conda update bioconductor-pcxndata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pcxndata:<tag>

   (see `bioconductor-pcxndata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pcxndata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pcxndata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pcxndata
   :alt:   (downloads)
.. |docker_bioconductor-pcxndata| image:: https://quay.io/repository/biocontainers/bioconductor-pcxndata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pcxndata
.. _`bioconductor-pcxndata/tags`: https://quay.io/repository/biocontainers/bioconductor-pcxndata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pcxndata/README.html