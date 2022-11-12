:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mge-cluster'
.. highlight: bash

mge-cluster
===========

.. conda:recipe:: mge-cluster
   :replaces_section_title:
   :noindex:

   A classification framework for mobile genetic elements \(MGEs\)

   :homepage: https://gitlab.com/sirarredondo/mge_cluster
   :license: MIT / MIT
   :recipe: /`mge-cluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mge-cluster/meta.yaml>`_

   


.. conda:package:: mge-cluster

   |downloads_mge-cluster| |docker_mge-cluster|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends bifrost: ``>=1.0.6``
   :depends hdbscan: 
   :depends joblib: ``1.1.0``
   :depends numpy: ``>=1.16.6``
   :depends opentsne: 
   :depends pandas: 
   :depends python: 
   :depends scikit-learn: ``>=0.20``
   :depends unitig-caller: ``1.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mge-cluster

   and update with::

      conda update mge-cluster

   or use the docker container::

      docker pull quay.io/biocontainers/mge-cluster:<tag>

   (see `mge-cluster/tags`_ for valid values for ``<tag>``)


.. |downloads_mge-cluster| image:: https://img.shields.io/conda/dn/bioconda/mge-cluster.svg?style=flat
   :target: https://anaconda.org/bioconda/mge-cluster
   :alt:   (downloads)
.. |docker_mge-cluster| image:: https://quay.io/repository/biocontainers/mge-cluster/status
   :target: https://quay.io/repository/biocontainers/mge-cluster
.. _`mge-cluster/tags`: https://quay.io/repository/biocontainers/mge-cluster?tab=tags


.. raw:: html

    <script>
        var package = "mge-cluster";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mge-cluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mge-cluster/README.html