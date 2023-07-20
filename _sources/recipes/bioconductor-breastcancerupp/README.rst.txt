:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancerupp'
.. highlight: bash

bioconductor-breastcancerupp
============================

.. conda:recipe:: bioconductor-breastcancerupp
   :replaces_section_title:
   :noindex:

   Gene expression dataset published by Miller et al. \[2005\] \(UPP\).

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/breastCancerUPP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancerupp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerupp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerupp/meta.yaml>`_

   Gene expression data from a breast cancer study published by Miller et al. in 2005\, provided as an eSet.


.. conda:package:: bioconductor-breastcancerupp

   |downloads_bioconductor-breastcancerupp| |docker_bioconductor-breastcancerupp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.35.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.35.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancerupp

   and update with::

      conda update bioconductor-breastcancerupp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancerupp:<tag>

   (see `bioconductor-breastcancerupp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancerupp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancerupp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breastcancerupp
   :alt:   (downloads)
.. |docker_bioconductor-breastcancerupp| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancerupp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancerupp
.. _`bioconductor-breastcancerupp/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancerupp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breastcancerupp";
        var versions = ["1.38.0","1.35.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancerupp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancerupp/README.html