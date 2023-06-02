:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmassbank'
.. highlight: bash

bioconductor-rmassbank
======================

.. conda:recipe:: bioconductor-rmassbank
   :replaces_section_title:
   :noindex:

   Workflow to process tandem MS files and build MassBank records

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/RMassBank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbank/meta.yaml>`_

   Workflow to process tandem MS files and build MassBank records. Functions include automated extraction of tandem MS spectra\, formula assignment to tandem MS fragments\, recalibration of tandem MS spectra with assigned fragments\, spectrum cleanup\, automated retrieval of compound information from Internet databases\, and export to MassBank records.


.. conda:package:: bioconductor-rmassbank

   |downloads_bioconductor-rmassbank| |docker_bioconductor-rmassbank|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.0-1</code>,  <code>3.8.0-0</code>,  <code>3.4.0-2</code>,  <code>3.4.0-1</code>,  <code>3.4.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.13.0-0</code>,  </span></summary>
      

      ``3.8.0-1``,  ``3.8.0-0``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.2.0-0``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.13.0-0``,  ``2.12.0-1``,  ``2.10.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-chemmineob: ``>=1.36.0,<1.37.0``
   :depends bioconductor-chemminer: ``>=3.50.0,<3.51.0``
   :depends bioconductor-msnbase: ``>=2.24.0,<2.25.0``
   :depends bioconductor-mzr: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends openbabel: 
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-envipat: 
   :depends r-httr: 
   :depends r-logger: 
   :depends r-r.utils: 
   :depends r-rcdk: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-readjdx: 
   :depends r-rjson: 
   :depends r-webchem: 
   :depends r-xml: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmassbank

   and update with::

      conda update bioconductor-rmassbank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmassbank:<tag>

   (see `bioconductor-rmassbank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmassbank
   :alt:   (downloads)
.. |docker_bioconductor-rmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-rmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmassbank
.. _`bioconductor-rmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-rmassbank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmassbank";
        var versions = ["3.8.0","3.8.0","3.4.0","3.4.0","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmassbank/README.html