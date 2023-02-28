:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ninja-nj'
.. highlight: bash

ninja-nj
========

.. conda:recipe:: ninja-nj
   :replaces_section_title:
   :noindex:

   Nearly Infinite Neighbor Joining Application

   :homepage: https://github.com/TravisWheelerLab/NINJA
   :license: MIT
   :recipe: /`ninja-nj <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ninja-nj/meta.yaml>`_

   


.. conda:package:: ninja-nj

   |downloads_ninja-nj| |docker_ninja-nj|

   :versions:
      
      

      ``0.97-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ninja-nj

   and update with::

      conda update ninja-nj

   or use the docker container::

      docker pull quay.io/biocontainers/ninja-nj:<tag>

   (see `ninja-nj/tags`_ for valid values for ``<tag>``)


.. |downloads_ninja-nj| image:: https://img.shields.io/conda/dn/bioconda/ninja-nj.svg?style=flat
   :target: https://anaconda.org/bioconda/ninja-nj
   :alt:   (downloads)
.. |docker_ninja-nj| image:: https://quay.io/repository/biocontainers/ninja-nj/status
   :target: https://quay.io/repository/biocontainers/ninja-nj
.. _`ninja-nj/tags`: https://quay.io/repository/biocontainers/ninja-nj?tab=tags


.. raw:: html

    <script>
        var package = "ninja-nj";
        var versions = ["0.97"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ninja-nj/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ninja-nj/README.html