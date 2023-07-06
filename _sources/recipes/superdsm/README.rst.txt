:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'superdsm'
.. highlight: bash

superdsm
========

.. conda:recipe:: superdsm
   :replaces_section_title:
   :noindex:

   SuperDSM is a globally optimal segmentation method based on superadditivity and deformable shape models for cell nuclei in fluorescence microscopy images and beyond.

   :homepage: https://github.com/BMCV/SuperDSM
   :documentation: https://superdsm.readthedocs.io
   
   :license: MIT
   :recipe: /`superdsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superdsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/superdsm/meta.yaml>`_
   :links: doi: :doi:`10.1109/TPAMI.2022.3185583`

   


.. conda:package:: superdsm

   |downloads_superdsm| |docker_superdsm|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1-0``

      

   
   :depends blas: ``* mkl``
   :depends cvxopt: ``>=1.2.6,<2.0``
   :depends cvxpy: ``>=1.1.13,<2.0``
   :depends dill: ``>=0.3.2``
   :depends ipython: ``>=7.31.1``
   :depends matplotlib-base: ``>=3.0,<4.0``
   :depends mkl: ``>=2020.0``
   :depends numpy: ``>=1.18,<2.0``
   :depends python: ``>=3.6,<3.11``
   :depends ray-core: ``>=0.8.7,<1.7``
   :depends scikit-image: ``>=0.18,<1.0``
   :depends scipy: ``>=1.6.3,<2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install superdsm

   and update with::

      conda update superdsm

   or use the docker container::

      docker pull quay.io/biocontainers/superdsm:<tag>

   (see `superdsm/tags`_ for valid values for ``<tag>``)


.. |downloads_superdsm| image:: https://img.shields.io/conda/dn/bioconda/superdsm.svg?style=flat
   :target: https://anaconda.org/bioconda/superdsm
   :alt:   (downloads)
.. |docker_superdsm| image:: https://quay.io/repository/biocontainers/superdsm/status
   :target: https://quay.io/repository/biocontainers/superdsm
.. _`superdsm/tags`: https://quay.io/repository/biocontainers/superdsm?tab=tags


.. raw:: html

    <script>
        var package = "superdsm";
        var versions = ["0.1.3","0.1.2","0.1.2","0.1.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/superdsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/superdsm/README.html