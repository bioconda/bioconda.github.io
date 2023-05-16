:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cyushuffle'
.. highlight: bash

cyushuffle
==========

.. conda:recipe:: cyushuffle
   :replaces_section_title:
   :noindex:

   A Cython wrapper over uShuffle \- a useful tool for shuffling biological sequences while preserving the k\-let counts

   :homepage: https://github.com/guma44/ushuffle
   :documentation: https://cs.usu.edu/people/MinghuiJiang/ushuffle/
   
   :license: BSD / BSD
   :recipe: /`cyushuffle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyushuffle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyushuffle/meta.yaml>`_

   


.. conda:package:: cyushuffle

   |downloads_cyushuffle| |docker_cyushuffle|

   :versions:
      
      

      ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cyushuffle

   and update with::

      conda update cyushuffle

   or use the docker container::

      docker pull quay.io/biocontainers/cyushuffle:<tag>

   (see `cyushuffle/tags`_ for valid values for ``<tag>``)


.. |downloads_cyushuffle| image:: https://img.shields.io/conda/dn/bioconda/cyushuffle.svg?style=flat
   :target: https://anaconda.org/bioconda/cyushuffle
   :alt:   (downloads)
.. |docker_cyushuffle| image:: https://quay.io/repository/biocontainers/cyushuffle/status
   :target: https://quay.io/repository/biocontainers/cyushuffle
.. _`cyushuffle/tags`: https://quay.io/repository/biocontainers/cyushuffle?tab=tags


.. raw:: html

    <script>
        var package = "cyushuffle";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyushuffle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyushuffle/README.html