:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hictk'
.. highlight: bash

hictk
=====

.. conda:recipe:: hictk
   :replaces_section_title:
   :noindex:

   Blazing fast toolkit to work with .hic and .cool files

   :homepage: https://github.com/paulsengroup/hictk
   :documentation: https://github.com/paulsengroup/hictk#readme
   
   :license: MIT
   :recipe: /`hictk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hictk/meta.yaml>`_
   :links: biotools: :biotools:`hictk`, doi: :doi:`10.5281/zenodo.8214221`

   


.. conda:package:: hictk

   |downloads_hictk| |docker_hictk|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends boost: ``>=1.82.0,<1.82.1.0a0``
   :depends hdf5: ``>=1.12``
   :depends hdf5: ``>=1.14.1,<1.14.2.0a0``
   :depends libdeflate: ``>=1.18,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hictk

   and update with::

      conda update hictk

   or use the docker container::

      docker pull quay.io/biocontainers/hictk:<tag>

   (see `hictk/tags`_ for valid values for ``<tag>``)


.. |downloads_hictk| image:: https://img.shields.io/conda/dn/bioconda/hictk.svg?style=flat
   :target: https://anaconda.org/bioconda/hictk
   :alt:   (downloads)
.. |docker_hictk| image:: https://quay.io/repository/biocontainers/hictk/status
   :target: https://quay.io/repository/biocontainers/hictk
.. _`hictk/tags`: https://quay.io/repository/biocontainers/hictk?tab=tags


.. raw:: html

    <script>
        var package = "hictk";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hictk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hictk/README.html