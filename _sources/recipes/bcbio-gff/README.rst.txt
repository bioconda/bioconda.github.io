:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-gff'
.. highlight: bash

bcbio-gff
=========

.. conda:recipe:: bcbio-gff
   :replaces_section_title:
   :noindex:

   A Python library to read and write Generic Feature Format \(GFF\).

   :homepage: https://github.com/chapmanb/bcbb/tree/master/gff
   :license: Biopython License Agreement
   :recipe: /`bcbio-gff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-gff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-gff/meta.yaml>`_

   


.. conda:package:: bcbio-gff

   |downloads_bcbio-gff| |docker_bcbio-gff|

   :versions:
      
      

      ``0.6.9-0``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.2-1``,  ``0.6.2-0``

      

   
   :depends biopython: 
   :depends bx-python: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-gff

   and update with::

      conda update bcbio-gff

   or use the docker container::

      docker pull quay.io/biocontainers/bcbio-gff:<tag>

   (see `bcbio-gff/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-gff| image:: https://img.shields.io/conda/dn/bioconda/bcbio-gff.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-gff
   :alt:   (downloads)
.. |docker_bcbio-gff| image:: https://quay.io/repository/biocontainers/bcbio-gff/status
   :target: https://quay.io/repository/biocontainers/bcbio-gff
.. _`bcbio-gff/tags`: https://quay.io/repository/biocontainers/bcbio-gff?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-gff";
        var versions = ["0.6.9","0.6.8","0.6.7","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-gff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-gff/README.html