:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coolpuppy'
.. highlight: bash

coolpuppy
=========

.. conda:recipe:: coolpuppy
   :replaces_section_title:
   :noindex:

   A versatile tool to perform pile\-up analysis on Hi\-C data in .cool format 

   :homepage: https://github.com/open2c/coolpuppy
   :documentation: https://coolpuppy.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`coolpuppy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coolpuppy/meta.yaml>`_

   


.. conda:package:: coolpuppy

   |downloads_coolpuppy| |docker_coolpuppy|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioframe: ``>=0.3.3``
   :depends cooler: ``>=0.8.5``
   :depends cooltools: ``>=0.5.2``
   :depends h5py: ``>=3.0``
   :depends h5sparse: 
   :depends m2r2: 
   :depends matplotlib-base: 
   :depends more-itertools: 
   :depends multiprocessing-logging: 
   :depends natsort: 
   :depends numba: 
   :depends numpy: ``>=1.16.5``
   :depends pandas: 
   :depends pytables: 
   :depends python: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install coolpuppy

   and update with::

      conda update coolpuppy

   or use the docker container::

      docker pull quay.io/biocontainers/coolpuppy:<tag>

   (see `coolpuppy/tags`_ for valid values for ``<tag>``)


.. |downloads_coolpuppy| image:: https://img.shields.io/conda/dn/bioconda/coolpuppy.svg?style=flat
   :target: https://anaconda.org/bioconda/coolpuppy
   :alt:   (downloads)
.. |docker_coolpuppy| image:: https://quay.io/repository/biocontainers/coolpuppy/status
   :target: https://quay.io/repository/biocontainers/coolpuppy
.. _`coolpuppy/tags`: https://quay.io/repository/biocontainers/coolpuppy?tab=tags


.. raw:: html

    <script>
        var package = "coolpuppy";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coolpuppy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coolpuppy/README.html