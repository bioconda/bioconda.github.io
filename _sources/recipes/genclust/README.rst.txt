:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genclust'
.. highlight: bash

genclust
========

.. conda:recipe:: genclust
   :replaces_section_title:
   :noindex:

   A genetic algorithm for clustering gene expression data.

   :homepage: http://www.math.unipa.it/~lobosco/genclust/
   :license: GNU GPL
   :recipe: /`genclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genclust/meta.yaml>`_
   :links: doi: :doi:`10.1186/1471-2105-6-289`

   


.. conda:package:: genclust

   |downloads_genclust| |docker_genclust|

   :versions:
      
      

      ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genclust

   and update with::

      conda update genclust

   or use the docker container::

      docker pull quay.io/biocontainers/genclust:<tag>

   (see `genclust/tags`_ for valid values for ``<tag>``)


.. |downloads_genclust| image:: https://img.shields.io/conda/dn/bioconda/genclust.svg?style=flat
   :target: https://anaconda.org/bioconda/genclust
   :alt:   (downloads)
.. |docker_genclust| image:: https://quay.io/repository/biocontainers/genclust/status
   :target: https://quay.io/repository/biocontainers/genclust
.. _`genclust/tags`: https://quay.io/repository/biocontainers/genclust?tab=tags


.. raw:: html

    <script>
        var package = "genclust";
        var versions = ["1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genclust/README.html