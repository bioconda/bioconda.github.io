:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbkviz'
.. highlight: bash

gbkviz
======

.. conda:recipe:: gbkviz
   :replaces_section_title:
   :noindex:

   Simple web application to visualize and compare genomes in Genbank files

   :homepage: https://github.com/moshi4/GBKviz/
   :license: MIT
   :recipe: /`gbkviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz/meta.yaml>`_

   


.. conda:package:: gbkviz

   |downloads_gbkviz| |docker_gbkviz|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.5-0``

      

   
   :depends biopython: ``>=1.79,<2.0``
   :depends mummer4: ``>=4.0.0rc1``
   :depends python: ``>=3.7,<4.0``
   :depends reportlab: ``>=3.5.68,<4.0.0``
   :depends streamlit: ``1.8.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gbkviz

   and update with::

      conda update gbkviz

   or use the docker container::

      docker pull quay.io/biocontainers/gbkviz:<tag>

   (see `gbkviz/tags`_ for valid values for ``<tag>``)


.. |downloads_gbkviz| image:: https://img.shields.io/conda/dn/bioconda/gbkviz.svg?style=flat
   :target: https://anaconda.org/bioconda/gbkviz
   :alt:   (downloads)
.. |docker_gbkviz| image:: https://quay.io/repository/biocontainers/gbkviz/status
   :target: https://quay.io/repository/biocontainers/gbkviz
.. _`gbkviz/tags`: https://quay.io/repository/biocontainers/gbkviz?tab=tags


.. raw:: html

    <script>
        var package = "gbkviz";
        var versions = ["1.2.0","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbkviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbkviz/README.html