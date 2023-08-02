:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynteny'
.. highlight: bash

phynteny
========

.. conda:recipe:: phynteny
   :replaces_section_title:
   :noindex:

   Phynteny\: Synteny\-based prediction of bacteriophage genes

   :homepage: https://github.com/susiegriggo/Phynteny
   :license: MIT / MIT
   :recipe: /`phynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny/meta.yaml>`_

   


.. conda:package:: phynteny

   |downloads_phynteny| |docker_phynteny|

   :versions:
      
      

      ``0.1.11-0``

      

   
   :depends biopython: ``>=1.79``
   :depends click: 
   :depends joblib: 
   :depends loguru: 
   :depends numpy: 
   :depends pandas: 
   :depends pickle5: ``>=0.0.10``
   :depends python: ``<3.11``
   :depends python_abi: 
   :depends scikit-learn: ``<=1.2.2``
   :depends tensorflow-cpu: ``2.9.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phynteny

   and update with::

      conda update phynteny

   or use the docker container::

      docker pull quay.io/biocontainers/phynteny:<tag>

   (see `phynteny/tags`_ for valid values for ``<tag>``)


.. |downloads_phynteny| image:: https://img.shields.io/conda/dn/bioconda/phynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/phynteny
   :alt:   (downloads)
.. |docker_phynteny| image:: https://quay.io/repository/biocontainers/phynteny/status
   :target: https://quay.io/repository/biocontainers/phynteny
.. _`phynteny/tags`: https://quay.io/repository/biocontainers/phynteny?tab=tags


.. raw:: html

    <script>
        var package = "phynteny";
        var versions = ["0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynteny/README.html