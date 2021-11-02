:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-breastcancernki'
.. highlight: bash

bioconductor-breastcancernki
============================

.. conda:recipe:: bioconductor-breastcancernki
   :replaces_section_title:
   :noindex:

   Genexpression dataset published by van\'t Veer et al. \[2002\] and van de Vijver et al. \[2002\] \(NKI\).

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/breastCancerNKI.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancernki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancernki/meta.yaml>`_

   Genexpression data from a breast cancer study published by van\'t Veer et al. in 2002 and van de Vijver et al. in 2002\, provided as an eSet.


.. conda:package:: bioconductor-breastcancernki

   |downloads_bioconductor-breastcancernki| |docker_bioconductor-breastcancernki|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.27.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancernki

   and update with::

      conda update bioconductor-breastcancernki

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-breastcancernki:<tag>

   (see `bioconductor-breastcancernki/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-breastcancernki| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancernki.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-breastcancernki
   :alt:   (downloads)
.. |docker_bioconductor-breastcancernki| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancernki/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancernki
.. _`bioconductor-breastcancernki/tags`: https://quay.io/repository/biocontainers/bioconductor-breastcancernki?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-breastcancernki";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.27.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancernki/README.html