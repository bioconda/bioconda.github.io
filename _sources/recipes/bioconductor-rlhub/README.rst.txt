:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rlhub'
.. highlight: bash

bioconductor-rlhub
==================

.. conda:recipe:: bioconductor-rlhub
   :replaces_section_title:
   :noindex:

   An ExperimentHub package for accessing processed RLSuite data sets

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/RLHub.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-rlhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rlhub/meta.yaml>`_

   \| RLHub provides a convenient interface to the processed data provided within RLSuite\, a tool\-chain for analyzing R\-loop\-mapping data sets. The primary purpose of RLHub is to serve the processed data sets required by the RLSeq R package and the RLBase web service. Additionally\, RLHub provides a stand\-alone R interface to these data\, benefiting users who are addressing questions related to R\-loop regions \(RL\-Regions\)\, R\-loop\-binding proteins \(RLBPs\)\, R\-loop co\-localizing factors\, and the differences between R\-loop\-mapping methods. The full data\-generating protocol is found here\: https\:\/\/github.com\/Bishop\-Laboratory\/RLBase\-data.


.. conda:package:: bioconductor-rlhub

   |downloads_bioconductor-rlhub| |docker_bioconductor-rlhub|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-data-packages: ``>=20221108``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rlhub

   and update with::

      conda update bioconductor-rlhub

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rlhub:<tag>

   (see `bioconductor-rlhub/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rlhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rlhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rlhub
   :alt:   (downloads)
.. |docker_bioconductor-rlhub| image:: https://quay.io/repository/biocontainers/bioconductor-rlhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rlhub
.. _`bioconductor-rlhub/tags`: https://quay.io/repository/biocontainers/bioconductor-rlhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rlhub";
        var versions = ["1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rlhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rlhub/README.html