:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tecount'
.. highlight: bash

tecount
=======

.. conda:recipe:: tecount
   :replaces_section_title:
   :noindex:

   A package to count read alignments on transposable elements subfamilies\, families and classes.

   :homepage: https://github.com/bodegalab/tecount
   :license: MIT
   :recipe: /`tecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tecount/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41588-021-00989-7`

   


.. conda:package:: tecount

   |downloads_tecount| |docker_tecount|

   :versions:
      
      

      ``1.0.0-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3.7``
   :depends samtools: ``>=1.14``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tecount

   and update with::

      conda update tecount

   or use the docker container::

      docker pull quay.io/biocontainers/tecount:<tag>

   (see `tecount/tags`_ for valid values for ``<tag>``)


.. |downloads_tecount| image:: https://img.shields.io/conda/dn/bioconda/tecount.svg?style=flat
   :target: https://anaconda.org/bioconda/tecount
   :alt:   (downloads)
.. |docker_tecount| image:: https://quay.io/repository/biocontainers/tecount/status
   :target: https://quay.io/repository/biocontainers/tecount
.. _`tecount/tags`: https://quay.io/repository/biocontainers/tecount?tab=tags


.. raw:: html

    <script>
        var package = "tecount";
        var versions = ["1.0.0","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tecount/README.html