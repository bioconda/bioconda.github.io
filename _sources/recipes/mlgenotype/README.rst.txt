:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mlgenotype'
.. highlight: bash

mlgenotype
==========

.. conda:recipe:: mlgenotype
   :replaces_section_title:
   :noindex:

   A package with utilities for training random forest classifiers to recognize SVs in short read datasets

   :homepage: https://github.com/nhansen/mlgenotype
   :license: MIT
   :recipe: /`mlgenotype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlgenotype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mlgenotype/meta.yaml>`_

   


.. conda:package:: mlgenotype

   |downloads_mlgenotype| |docker_mlgenotype|

   :versions:
      
      

      ``0.1.12-0``

      

   
   :depends pandas: ``>=1.0``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``1.0.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mlgenotype

   and update with::

      conda update mlgenotype

   or use the docker container::

      docker pull quay.io/biocontainers/mlgenotype:<tag>

   (see `mlgenotype/tags`_ for valid values for ``<tag>``)


.. |downloads_mlgenotype| image:: https://img.shields.io/conda/dn/bioconda/mlgenotype.svg?style=flat
   :target: https://anaconda.org/bioconda/mlgenotype
   :alt:   (downloads)
.. |docker_mlgenotype| image:: https://quay.io/repository/biocontainers/mlgenotype/status
   :target: https://quay.io/repository/biocontainers/mlgenotype
.. _`mlgenotype/tags`: https://quay.io/repository/biocontainers/mlgenotype?tab=tags


.. raw:: html

    <script>
        var package = "mlgenotype";
        var versions = ["0.1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mlgenotype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mlgenotype/README.html