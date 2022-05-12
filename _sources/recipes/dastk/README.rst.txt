:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dastk'
.. highlight: bash

dastk
=====

.. conda:recipe:: dastk
   :replaces_section_title:
   :noindex:

   Differential ATAC\-seq toolkit

   :homepage: https://github.com/Dowell-Lab/DAStk
   :license: BSD / BSD-3
   :recipe: /`dastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dastk/meta.yaml>`_
   :links: doi: :doi:`10.3390/molecules23051136`, biotools: :biotools:`DAStk_-_Differential_ATAC-seq_toolkit`

   


.. conda:package:: dastk

   |downloads_dastk| |docker_dastk|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends adjusttext: 
   :depends matplotlib-base: 
   :depends matplotlib-venn: 
   :depends networkx: ``>=2``
   :depends pandas: 
   :depends pybedtools: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends upsetplot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dastk

   and update with::

      conda update dastk

   or use the docker container::

      docker pull quay.io/biocontainers/dastk:<tag>

   (see `dastk/tags`_ for valid values for ``<tag>``)


.. |downloads_dastk| image:: https://img.shields.io/conda/dn/bioconda/dastk.svg?style=flat
   :target: https://anaconda.org/bioconda/dastk
   :alt:   (downloads)
.. |docker_dastk| image:: https://quay.io/repository/biocontainers/dastk/status
   :target: https://quay.io/repository/biocontainers/dastk
.. _`dastk/tags`: https://quay.io/repository/biocontainers/dastk?tab=tags


.. raw:: html

    <script>
        var package = "dastk";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dastk/README.html