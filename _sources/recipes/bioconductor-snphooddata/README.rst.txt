:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snphooddata'
.. highlight: bash

bioconductor-snphooddata
========================

.. conda:recipe:: bioconductor-snphooddata
   :replaces_section_title:
   :noindex:

   Additional and more complex example data for the SNPhood package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/SNPhoodData.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-snphooddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphooddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphooddata/meta.yaml>`_

   This companion package for SNPhood provides some example datasets of a larger size than allowed for the SNPhood package. They include full and real\-world examples for performing analyses with the SNPhood package.


.. conda:package:: bioconductor-snphooddata

   |downloads_bioconductor-snphooddata| |docker_bioconductor-snphooddata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.27.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.27.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20221103``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snphooddata

   and update with::

      conda update bioconductor-snphooddata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-snphooddata:<tag>

   (see `bioconductor-snphooddata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-snphooddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snphooddata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snphooddata
   :alt:   (downloads)
.. |docker_bioconductor-snphooddata| image:: https://quay.io/repository/biocontainers/bioconductor-snphooddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snphooddata
.. _`bioconductor-snphooddata/tags`: https://quay.io/repository/biocontainers/bioconductor-snphooddata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snphooddata";
        var versions = ["1.27.0","1.24.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snphooddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snphooddata/README.html