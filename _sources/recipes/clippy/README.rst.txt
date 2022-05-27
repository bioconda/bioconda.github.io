:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clippy'
.. highlight: bash

clippy
======

.. conda:recipe:: clippy
   :replaces_section_title:
   :noindex:

   An intuitive and interactive peak caller for CLIP data

   :homepage: https://github.com/ulelab/clippy
   :license: GPL-3.0-only
   :recipe: /`clippy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clippy/meta.yaml>`_

   


.. conda:package:: clippy

   |downloads_clippy| |docker_clippy|

   :versions:
      
      

      ``1.4.1-1``,  ``1.4.1-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-2``,  ``1.3.1-0``

      

   
   :depends bedtools: ``2.26.0.*``
   :depends dash: ``1.20.0.*``
   :depends dash-bootstrap-components: ``0.11.3.*``
   :depends matplotlib-base: 
   :depends numpy: ``>=1.19.0,<1.20.3``
   :depends numpy-base: ``>=1.19.0,<1.20.3``
   :depends numpydoc: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends werkzeug: ``2.0.0.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clippy

   and update with::

      conda update clippy

   or use the docker container::

      docker pull quay.io/biocontainers/clippy:<tag>

   (see `clippy/tags`_ for valid values for ``<tag>``)


.. |downloads_clippy| image:: https://img.shields.io/conda/dn/bioconda/clippy.svg?style=flat
   :target: https://anaconda.org/bioconda/clippy
   :alt:   (downloads)
.. |docker_clippy| image:: https://quay.io/repository/biocontainers/clippy/status
   :target: https://quay.io/repository/biocontainers/clippy
.. _`clippy/tags`: https://quay.io/repository/biocontainers/clippy?tab=tags


.. raw:: html

    <script>
        var package = "clippy";
        var versions = ["1.4.1","1.4.1","1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clippy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clippy/README.html