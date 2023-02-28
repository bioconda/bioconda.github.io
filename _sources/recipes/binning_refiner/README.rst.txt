:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'binning_refiner'
.. highlight: bash

binning_refiner
===============

.. conda:recipe:: binning_refiner
   :replaces_section_title:
   :noindex:

   Improving genome bins through the combination of different binning programs

   :homepage: https://github.com/songweizhi/Binning_refiner
   :license: GPL3 / GPL3
   :recipe: /`binning_refiner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binning_refiner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/binning_refiner/meta.yaml>`_

   


.. conda:package:: binning_refiner

   |downloads_binning_refiner| |docker_binning_refiner|

   :versions:
      
      

      ``1.4.3-0``

      

   
   :depends biopython: 
   :depends python: 
   :depends r-googlevis: 
   :depends r-optparse: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install binning_refiner

   and update with::

      conda update binning_refiner

   or use the docker container::

      docker pull quay.io/biocontainers/binning_refiner:<tag>

   (see `binning_refiner/tags`_ for valid values for ``<tag>``)


.. |downloads_binning_refiner| image:: https://img.shields.io/conda/dn/bioconda/binning_refiner.svg?style=flat
   :target: https://anaconda.org/bioconda/binning_refiner
   :alt:   (downloads)
.. |docker_binning_refiner| image:: https://quay.io/repository/biocontainers/binning_refiner/status
   :target: https://quay.io/repository/biocontainers/binning_refiner
.. _`binning_refiner/tags`: https://quay.io/repository/biocontainers/binning_refiner?tab=tags


.. raw:: html

    <script>
        var package = "binning_refiner";
        var versions = ["1.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/binning_refiner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/binning_refiner/README.html