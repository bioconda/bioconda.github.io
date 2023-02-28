:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimap'
.. highlight: bash

trimap
======

.. conda:recipe:: trimap
   :replaces_section_title:
   :noindex:

   TriMap\: Large\-scale Dimensionality Reduction Using Triplets

   :homepage: http://github.com/eamid/trimap
   :license: Apache-2.0
   :recipe: /`trimap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimap/meta.yaml>`_

   


.. conda:package:: trimap

   |downloads_trimap| |docker_trimap|

   :versions:
      
      

      ``1.0.15-0``

      

   
   :depends numba: ``>=0.34``
   :depends python: 
   :depends python-annoy: ``>=1.11``
   :depends scikit-learn: ``>=0.16``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trimap

   and update with::

      conda update trimap

   or use the docker container::

      docker pull quay.io/biocontainers/trimap:<tag>

   (see `trimap/tags`_ for valid values for ``<tag>``)


.. |downloads_trimap| image:: https://img.shields.io/conda/dn/bioconda/trimap.svg?style=flat
   :target: https://anaconda.org/bioconda/trimap
   :alt:   (downloads)
.. |docker_trimap| image:: https://quay.io/repository/biocontainers/trimap/status
   :target: https://quay.io/repository/biocontainers/trimap
.. _`trimap/tags`: https://quay.io/repository/biocontainers/trimap?tab=tags


.. raw:: html

    <script>
        var package = "trimap";
        var versions = ["1.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimap/README.html