:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markov_clustering'
.. highlight: bash

markov_clustering
=================

.. conda:recipe:: markov_clustering
   :replaces_section_title:
   :noindex:

   This module implements the MCL algorithm in python.

   :homepage: https://github.com/GuyAllard/markov_clustering
   :license: MIT / MIT
   :recipe: /`markov_clustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_clustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_clustering/meta.yaml>`_

   


.. conda:package:: markov_clustering

   |downloads_markov_clustering| |docker_markov_clustering|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: ``>=0.19.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install markov_clustering

   and update with::

      conda update markov_clustering

   or use the docker container::

      docker pull quay.io/biocontainers/markov_clustering:<tag>

   (see `markov_clustering/tags`_ for valid values for ``<tag>``)


.. |downloads_markov_clustering| image:: https://img.shields.io/conda/dn/bioconda/markov_clustering.svg?style=flat
   :target: https://anaconda.org/bioconda/markov_clustering
   :alt:   (downloads)
.. |docker_markov_clustering| image:: https://quay.io/repository/biocontainers/markov_clustering/status
   :target: https://quay.io/repository/biocontainers/markov_clustering
.. _`markov_clustering/tags`: https://quay.io/repository/biocontainers/markov_clustering?tab=tags


.. raw:: html

    <script>
        var package = "markov_clustering";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markov_clustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markov_clustering/README.html