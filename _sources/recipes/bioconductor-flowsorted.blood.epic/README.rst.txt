:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowsorted.blood.epic'
.. highlight: bash

bioconductor-flowsorted.blood.epic
==================================

.. conda:recipe:: bioconductor-flowsorted.blood.epic
   :replaces_section_title:
   :noindex:

   Illumina EPIC data on immunomagnetic sorted peripheral adult blood cells

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/FlowSorted.Blood.EPIC.html
   :license: GPL-3
   :recipe: /`bioconductor-flowsorted.blood.epic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.epic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowsorted.blood.epic/meta.yaml>`_

   Raw data objects to be used for blood cell proportion estimation in minfi and similar packages. The FlowSorted.Blood.EPIC object is based in samples assayed by Brock Christensen and colleagues\; for details see Salas et al. 2018. https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE110554.


.. conda:package:: bioconductor-flowsorted.blood.epic

   |downloads_bioconductor-flowsorted.blood.epic| |docker_bioconductor-flowsorted.blood.epic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-0</code>,  <code>1.12.1-1</code>,  <code>1.12.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``2.2.0-0``,  ``1.12.1-1``,  ``1.12.1-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-data-packages: ``>=20221110``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-genefilter: ``>=1.80.0,<1.81.0``
   :depends bioconductor-minfi: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-nlme: 
   :depends r-quadprog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowsorted.blood.epic

   and update with::

      conda update bioconductor-flowsorted.blood.epic

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowsorted.blood.epic:<tag>

   (see `bioconductor-flowsorted.blood.epic/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowsorted.blood.epic| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowsorted.blood.epic.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowsorted.blood.epic
   :alt:   (downloads)
.. |docker_bioconductor-flowsorted.blood.epic| image:: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic
.. _`bioconductor-flowsorted.blood.epic/tags`: https://quay.io/repository/biocontainers/bioconductor-flowsorted.blood.epic?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowsorted.blood.epic";
        var versions = ["2.2.0","1.12.1","1.12.1","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowsorted.blood.epic/README.html