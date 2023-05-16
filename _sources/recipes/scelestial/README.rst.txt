:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scelestial'
.. highlight: bash

scelestial
==========

.. conda:recipe:: scelestial
   :replaces_section_title:
   :noindex:

   Scelestial\, Single Cell Lineage Tree Inference based on a Steiner Tree Approximation Algorithm

   :homepage: https://github.com/hzi-bifo/scelestial-paper-materials-devel
   :license: GPL / GPL 3.0
   :recipe: /`scelestial <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelestial>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scelestial/meta.yaml>`_

   


.. conda:package:: scelestial

   |downloads_scelestial| |docker_scelestial|

   :versions:
      
      

      ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends boost: ``>=1.78.0,<1.78.1.0a0``
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scelestial

   and update with::

      conda update scelestial

   or use the docker container::

      docker pull quay.io/biocontainers/scelestial:<tag>

   (see `scelestial/tags`_ for valid values for ``<tag>``)


.. |downloads_scelestial| image:: https://img.shields.io/conda/dn/bioconda/scelestial.svg?style=flat
   :target: https://anaconda.org/bioconda/scelestial
   :alt:   (downloads)
.. |docker_scelestial| image:: https://quay.io/repository/biocontainers/scelestial/status
   :target: https://quay.io/repository/biocontainers/scelestial
.. _`scelestial/tags`: https://quay.io/repository/biocontainers/scelestial?tab=tags


.. raw:: html

    <script>
        var package = "scelestial";
        var versions = ["1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scelestial/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scelestial/README.html