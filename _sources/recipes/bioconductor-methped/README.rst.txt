:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methped'
.. highlight: bash

bioconductor-methped
====================

.. conda:recipe:: bioconductor-methped
   :replaces_section_title:
   :noindex:

   A DNA methylation classifier tool for the identification of pediatric brain tumor subtypes

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MethPed.html
   :license: GPL-2
   :recipe: /`bioconductor-methped <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methped>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methped/meta.yaml>`_
   :links: biotools: :biotools:`methped`, doi: :doi:`10.1186/s13148-015-0103-3`

   Classification of pediatric tumors into biologically defined subtypes is challenging and multifaceted approaches are needed. For this aim\, we developed a diagnostic classifier based on DNA methylation profiles. We offer MethPed as an easy\-to\-use toolbox that allows researchers and clinical diagnosticians to test single samples as well as large cohorts for subclass prediction of pediatric brain tumors.  The current version of MethPed can classify the following tumor diagnoses\/subgroups\: Diffuse Intrinsic Pontine Glioma \(DIPG\)\, Ependymoma\, Embryonal tumors with multilayered rosettes \(ETMR\)\, Glioblastoma \(GBM\)\, Medulloblastoma \(MB\) \- Group 3 \(MB\_Gr3\)\, Group 4 \(MB\_Gr3\)\, Group WNT \(MB\_WNT\)\, Group SHH \(MB\_SHH\) and Pilocytic Astrocytoma \(PiloAstro\).


.. conda:package:: bioconductor-methped

   |downloads_bioconductor-methped| |docker_bioconductor-methped|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-randomforest: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methped

   and update with::

      conda update bioconductor-methped

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methped:<tag>

   (see `bioconductor-methped/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methped| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methped.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methped
   :alt:   (downloads)
.. |docker_bioconductor-methped| image:: https://quay.io/repository/biocontainers/bioconductor-methped/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methped
.. _`bioconductor-methped/tags`: https://quay.io/repository/biocontainers/bioconductor-methped?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methped";
        var versions = ["1.22.0","1.20.0","1.18.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methped/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methped/README.html