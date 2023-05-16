:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hic-straw'
.. highlight: bash

hic-straw
=========

.. conda:recipe:: hic-straw
   :replaces_section_title:
   :noindex:

   Straw bound with pybind11

   :homepage: https://github.com/aidenlab/straw
   :license: MIT
   :recipe: /`hic-straw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic-straw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hic-straw/meta.yaml>`_

   


.. conda:package:: hic-straw

   |downloads_hic-straw| |docker_hic-straw|

   :versions:
      
      

      ``1.3.1-3``,  ``1.3.1-1``,  ``1.3.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends pybind11: ``>=2.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hic-straw

   and update with::

      conda update hic-straw

   or use the docker container::

      docker pull quay.io/biocontainers/hic-straw:<tag>

   (see `hic-straw/tags`_ for valid values for ``<tag>``)


.. |downloads_hic-straw| image:: https://img.shields.io/conda/dn/bioconda/hic-straw.svg?style=flat
   :target: https://anaconda.org/bioconda/hic-straw
   :alt:   (downloads)
.. |docker_hic-straw| image:: https://quay.io/repository/biocontainers/hic-straw/status
   :target: https://quay.io/repository/biocontainers/hic-straw
.. _`hic-straw/tags`: https://quay.io/repository/biocontainers/hic-straw?tab=tags


.. raw:: html

    <script>
        var package = "hic-straw";
        var versions = ["1.3.1","1.3.1","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hic-straw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hic-straw/README.html