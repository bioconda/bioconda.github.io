:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusterone'
.. highlight: bash

clusterone
==========

.. conda:recipe:: clusterone
   :replaces_section_title:
   :noindex:

   Graph clustering algorithm

   :homepage: https://paccanarolab.org/cluster-one/
   :license: GPL-3.0
   :recipe: /`clusterone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusterone/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.1938`

   ClusterONE is a graph clustering algorithm that is able to handle weighted graphs and readily generates overlapping clusters


.. conda:package:: clusterone

   |downloads_clusterone| |docker_clusterone|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clusterone

   and update with::

      conda update clusterone

   or use the docker container::

      docker pull quay.io/biocontainers/clusterone:<tag>

   (see `clusterone/tags`_ for valid values for ``<tag>``)


.. |downloads_clusterone| image:: https://img.shields.io/conda/dn/bioconda/clusterone.svg?style=flat
   :target: https://anaconda.org/bioconda/clusterone
   :alt:   (downloads)
.. |docker_clusterone| image:: https://quay.io/repository/biocontainers/clusterone/status
   :target: https://quay.io/repository/biocontainers/clusterone
.. _`clusterone/tags`: https://quay.io/repository/biocontainers/clusterone?tab=tags


.. raw:: html

    <script>
        var package = "clusterone";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusterone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusterone/README.html