:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phiercc'
.. highlight: bash

phiercc
=======

.. conda:recipe:: phiercc
   :replaces_section_title:
   :noindex:

   Hierarchical Clustering of cgMLST profiles

   :homepage: https://github.com/zheminzhou/pHierCC
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`phiercc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phiercc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phiercc/meta.yaml>`_

   


.. conda:package:: phiercc

   |downloads_phiercc| |docker_phiercc|

   :versions:
      
      

      ``1.24-0``

      

   
   :depends click: ``>=7.0``
   :depends matplotlib-base: ``>=3.2.1``
   :depends numba: ``>=0.38.0``
   :depends numpy: ``>=1.18.1``
   :depends pandas: ``>=0.24.2``
   :depends python: ``>=3.6,<3.9``
   :depends scikit-learn: ``>=0.23.1``
   :depends scipy: ``>=1.3.2``
   :depends sharedarray: ``>=3.2.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phiercc

   and update with::

      conda update phiercc

   or use the docker container::

      docker pull quay.io/biocontainers/phiercc:<tag>

   (see `phiercc/tags`_ for valid values for ``<tag>``)


.. |downloads_phiercc| image:: https://img.shields.io/conda/dn/bioconda/phiercc.svg?style=flat
   :target: https://anaconda.org/bioconda/phiercc
   :alt:   (downloads)
.. |docker_phiercc| image:: https://quay.io/repository/biocontainers/phiercc/status
   :target: https://quay.io/repository/biocontainers/phiercc
.. _`phiercc/tags`: https://quay.io/repository/biocontainers/phiercc?tab=tags


.. raw:: html

    <script>
        var package = "phiercc";
        var versions = ["1.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phiercc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phiercc/README.html