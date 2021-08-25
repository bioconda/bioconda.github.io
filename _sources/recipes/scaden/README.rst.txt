:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scaden'
.. highlight: bash

scaden
======

.. conda:recipe:: scaden
   :replaces_section_title:
   :noindex:

   Cell type deconvolution using single cell data

   :homepage: https://github.com/KevinMenden/scaden
   :license: MIT
   :recipe: /`scaden <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaden>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaden/meta.yaml>`_

   


.. conda:package:: scaden

   |downloads_scaden| |docker_scaden|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.0-0``

      

   
   :depends click: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.16.0,<1.19.0``
   :depends pandas: 
   :depends python: ``>=3``
   :depends rich: 
   :depends scanpy: 
   :depends scikit-learn: 
   :depends scipy: ``1.4.1.*``
   :depends seaborn: 
   :depends tensorflow: ``>=2``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scaden

   and update with::

      conda update scaden

   or use the docker container::

      docker pull quay.io/biocontainers/scaden:<tag>

   (see `scaden/tags`_ for valid values for ``<tag>``)


.. |downloads_scaden| image:: https://img.shields.io/conda/dn/bioconda/scaden.svg?style=flat
   :target: https://anaconda.org/bioconda/scaden
   :alt:   (downloads)
.. |docker_scaden| image:: https://quay.io/repository/biocontainers/scaden/status
   :target: https://quay.io/repository/biocontainers/scaden
.. _`scaden/tags`: https://quay.io/repository/biocontainers/scaden?tab=tags


.. raw:: html

    <script>
        var package = "scaden";
        var versions = ["1.1.2","1.1.1","0.9.4","0.9.2","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scaden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scaden/README.html