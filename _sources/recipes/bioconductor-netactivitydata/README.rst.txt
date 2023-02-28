:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netactivitydata'
.. highlight: bash

bioconductor-netactivitydata
============================

.. conda:recipe:: bioconductor-netactivitydata
   :replaces_section_title:
   :noindex:

   Data required for getting the gene set scores with NetActivity package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/NetActivityData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netactivitydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivitydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivitydata/meta.yaml>`_

   This package contains the weights from pre\-trained shallow sparsely\-connected autoencoders. This data is required for getting the gene set scores with NetActivity package.


.. conda:package:: bioconductor-netactivitydata

   |downloads_bioconductor-netactivitydata| |docker_bioconductor-netactivitydata|

   :versions:
      
      

      ``1.0.0-0``,  ``0.99.8-0``

      

   
   :depends bioconductor-data-packages: ``>=20221110``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netactivitydata

   and update with::

      conda update bioconductor-netactivitydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netactivitydata:<tag>

   (see `bioconductor-netactivitydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netactivitydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netactivitydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netactivitydata
   :alt:   (downloads)
.. |docker_bioconductor-netactivitydata| image:: https://quay.io/repository/biocontainers/bioconductor-netactivitydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netactivitydata
.. _`bioconductor-netactivitydata/tags`: https://quay.io/repository/biocontainers/bioconductor-netactivitydata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netactivitydata";
        var versions = ["1.0.0","0.99.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netactivitydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netactivitydata/README.html