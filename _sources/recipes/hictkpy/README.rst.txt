:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hictkpy'
.. highlight: bash

hictkpy
=======

.. conda:recipe:: hictkpy
   :replaces_section_title:
   :noindex:

   Python bindings for hictk

   :homepage: https://github.com/paulsengroup/hictkpy
   :documentation: https://github.com/paulsengroup/hictkpy#readme
   
   :license: MIT
   :recipe: /`hictkpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictkpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictkpy/meta.yaml>`_
   :links: biotools: :biotools:`hictkpy`, doi: :doi:`10.5281/zenodo.8220300`

   


.. conda:package:: hictkpy

   |downloads_hictkpy| |docker_hictkpy|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends hdf5: ``>=1.12``
   :depends hdf5: ``>=1.14.1,<1.14.2.0a0``
   :depends libdeflate: ``>=1.18,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pandas: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hictkpy

   and update with::

      conda update hictkpy

   or use the docker container::

      docker pull quay.io/biocontainers/hictkpy:<tag>

   (see `hictkpy/tags`_ for valid values for ``<tag>``)


.. |downloads_hictkpy| image:: https://img.shields.io/conda/dn/bioconda/hictkpy.svg?style=flat
   :target: https://anaconda.org/bioconda/hictkpy
   :alt:   (downloads)
.. |docker_hictkpy| image:: https://quay.io/repository/biocontainers/hictkpy/status
   :target: https://quay.io/repository/biocontainers/hictkpy
.. _`hictkpy/tags`: https://quay.io/repository/biocontainers/hictkpy?tab=tags


.. raw:: html

    <script>
        var package = "hictkpy";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hictkpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hictkpy/README.html