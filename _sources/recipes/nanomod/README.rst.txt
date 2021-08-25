:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanomod'
.. highlight: bash

nanomod
=======

.. conda:recipe:: nanomod
   :replaces_section_title:
   :noindex:

   A computational method for Nanopore signal analysis and modification detection.

   :homepage: https://github.com/WGLab/NanoMod
   :license: GPL3
   :recipe: /`nanomod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanomod/meta.yaml>`_

   


.. conda:package:: nanomod

   |downloads_nanomod| |docker_nanomod|

   :versions:
      
      

      ``0.2.2-0``

      

   
   :depends bwa: 
   :depends h5py: 
   :depends minimap2: 
   :depends numpy: 
   :depends python: ``2.7.*``
   :depends r-base: ``>=3.4``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-scales: 
   :depends rpy2: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanomod

   and update with::

      conda update nanomod

   or use the docker container::

      docker pull quay.io/biocontainers/nanomod:<tag>

   (see `nanomod/tags`_ for valid values for ``<tag>``)


.. |downloads_nanomod| image:: https://img.shields.io/conda/dn/bioconda/nanomod.svg?style=flat
   :target: https://anaconda.org/bioconda/nanomod
   :alt:   (downloads)
.. |docker_nanomod| image:: https://quay.io/repository/biocontainers/nanomod/status
   :target: https://quay.io/repository/biocontainers/nanomod
.. _`nanomod/tags`: https://quay.io/repository/biocontainers/nanomod?tab=tags


.. raw:: html

    <script>
        var package = "nanomod";
        var versions = ["0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanomod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanomod/README.html