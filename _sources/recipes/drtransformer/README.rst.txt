:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drtransformer'
.. highlight: bash

drtransformer
=============

.. conda:recipe:: drtransformer
   :replaces_section_title:
   :noindex:

   Heuristic cotranscriptional folding using the nearest neighbor energy model.

   :homepage: https://pypi.org/project/drtransformer/
   :license: MIT
   :recipe: /`drtransformer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drtransformer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drtransformer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad034`

   


.. conda:package:: drtransformer

   |downloads_drtransformer| |docker_drtransformer|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends flit: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends packaging: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends viennarna: ``>=2.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install drtransformer

   and update with::

      conda update drtransformer

   or use the docker container::

      docker pull quay.io/biocontainers/drtransformer:<tag>

   (see `drtransformer/tags`_ for valid values for ``<tag>``)


.. |downloads_drtransformer| image:: https://img.shields.io/conda/dn/bioconda/drtransformer.svg?style=flat
   :target: https://anaconda.org/bioconda/drtransformer
   :alt:   (downloads)
.. |docker_drtransformer| image:: https://quay.io/repository/biocontainers/drtransformer/status
   :target: https://quay.io/repository/biocontainers/drtransformer
.. _`drtransformer/tags`: https://quay.io/repository/biocontainers/drtransformer?tab=tags


.. raw:: html

    <script>
        var package = "drtransformer";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drtransformer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drtransformer/README.html