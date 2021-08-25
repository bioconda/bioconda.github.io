:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ifeature'
.. highlight: bash

ifeature
========

.. conda:recipe:: ifeature
   :replaces_section_title:
   :noindex:

   A python package for feature extraction and selection from protein and peptide sequences

   :homepage: https://github.com/Jie-Yuan/iFeature
   :license: MIT / MIT
   :recipe: /`ifeature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ifeature/meta.yaml>`_

   


.. conda:package:: ifeature

   |downloads_ifeature| |docker_ifeature|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends jieba: 
   :depends lightgbm: ``3.0.0``
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.18.1``
   :depends python: 
   :depends six: ``1.15.0``
   :depends tqdm: ``4.49.0``
   :depends wrapt: ``1.12.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ifeature

   and update with::

      conda update ifeature

   or use the docker container::

      docker pull quay.io/biocontainers/ifeature:<tag>

   (see `ifeature/tags`_ for valid values for ``<tag>``)


.. |downloads_ifeature| image:: https://img.shields.io/conda/dn/bioconda/ifeature.svg?style=flat
   :target: https://anaconda.org/bioconda/ifeature
   :alt:   (downloads)
.. |docker_ifeature| image:: https://quay.io/repository/biocontainers/ifeature/status
   :target: https://quay.io/repository/biocontainers/ifeature
.. _`ifeature/tags`: https://quay.io/repository/biocontainers/ifeature?tab=tags


.. raw:: html

    <script>
        var package = "ifeature";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ifeature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ifeature/README.html