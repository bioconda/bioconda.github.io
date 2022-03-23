:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metanovo'
.. highlight: bash

metanovo
========

.. conda:recipe:: metanovo
   :replaces_section_title:
   :noindex:

   Produce targeted databases for mass spectrometry analysis.

   :homepage: https://github.com/uct-cbio/proteomics-pipelines
   :license: MIT
   :recipe: /`metanovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metanovo/meta.yaml>`_

   


.. conda:package:: metanovo

   |downloads_metanovo| |docker_metanovo|

   :versions:
      
      

      ``1.9.4-0``

      

   
   :depends biopython: ``1.79``
   :depends numpy: ``1.22.1``
   :depends pandas: ``1.3.5``
   :depends parallel: ``20220222.*``
   :depends python: ``3.9.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metanovo

   and update with::

      conda update metanovo

   or use the docker container::

      docker pull quay.io/biocontainers/metanovo:<tag>

   (see `metanovo/tags`_ for valid values for ``<tag>``)


.. |downloads_metanovo| image:: https://img.shields.io/conda/dn/bioconda/metanovo.svg?style=flat
   :target: https://anaconda.org/bioconda/metanovo
   :alt:   (downloads)
.. |docker_metanovo| image:: https://quay.io/repository/biocontainers/metanovo/status
   :target: https://quay.io/repository/biocontainers/metanovo
.. _`metanovo/tags`: https://quay.io/repository/biocontainers/metanovo?tab=tags


.. raw:: html

    <script>
        var package = "metanovo";
        var versions = ["1.9.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metanovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metanovo/README.html