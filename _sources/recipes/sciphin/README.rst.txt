:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sciphin'
.. highlight: bash

sciphin
=======

.. conda:recipe:: sciphin
   :replaces_section_title:
   :noindex:

   Single\-Cell mutation Identification via finite\-sites Phylogenetic Inference

   :homepage: https://github.com/cbg-ethz/SCIPhI
   :license: GNU GENERAL PUBLIC LICENSE Version 3 for SCIPhIN and Boost Software License - Version 1.0 for dlib (as an upstream project)
   :recipe: /`sciphin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sciphin/meta.yaml>`_

   


.. conda:package:: sciphin

   |downloads_sciphin| |docker_sciphin|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.12,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sciphin

   and update with::

      conda update sciphin

   or use the docker container::

      docker pull quay.io/biocontainers/sciphin:<tag>

   (see `sciphin/tags`_ for valid values for ``<tag>``)


.. |downloads_sciphin| image:: https://img.shields.io/conda/dn/bioconda/sciphin.svg?style=flat
   :target: https://anaconda.org/bioconda/sciphin
   :alt:   (downloads)
.. |docker_sciphin| image:: https://quay.io/repository/biocontainers/sciphin/status
   :target: https://quay.io/repository/biocontainers/sciphin
.. _`sciphin/tags`: https://quay.io/repository/biocontainers/sciphin?tab=tags


.. raw:: html

    <script>
        var package = "sciphin";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sciphin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sciphin/README.html