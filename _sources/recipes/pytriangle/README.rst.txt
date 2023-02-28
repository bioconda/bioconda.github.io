:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytriangle'
.. highlight: bash

pytriangle
==========

.. conda:recipe:: pytriangle
   :replaces_section_title:
   :noindex:

   A python interface to the 2D triangulation program TRIANGLE

   :homepage: https://github.com/pletzer/pytriangle
   :license: MIT
   :recipe: /`pytriangle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle/meta.yaml>`_

   


.. conda:package:: pytriangle

   |downloads_pytriangle| |docker_pytriangle|

   :versions:
      
      

      ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pytriangle

   and update with::

      conda update pytriangle

   or use the docker container::

      docker pull quay.io/biocontainers/pytriangle:<tag>

   (see `pytriangle/tags`_ for valid values for ``<tag>``)


.. |downloads_pytriangle| image:: https://img.shields.io/conda/dn/bioconda/pytriangle.svg?style=flat
   :target: https://anaconda.org/bioconda/pytriangle
   :alt:   (downloads)
.. |docker_pytriangle| image:: https://quay.io/repository/biocontainers/pytriangle/status
   :target: https://quay.io/repository/biocontainers/pytriangle
.. _`pytriangle/tags`: https://quay.io/repository/biocontainers/pytriangle?tab=tags


.. raw:: html

    <script>
        var package = "pytriangle";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytriangle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytriangle/README.html