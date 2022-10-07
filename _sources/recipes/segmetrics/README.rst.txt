:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'segmetrics'
.. highlight: bash

segmetrics
==========

.. conda:recipe:: segmetrics
   :replaces_section_title:
   :noindex:

   A Python package implementing image segmentation and object detection performance measures\, for biomedical image analysis and beyond.

   :homepage: https://github.com/BMCV/segmetrics.py
   :license: MIT
   :recipe: /`segmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/segmetrics/meta.yaml>`_

   


.. conda:package:: segmetrics

   |downloads_segmetrics| |docker_segmetrics|

   :versions:
      
      

      ``0.11.3-0``

      

   
   :depends dill: 
   :depends numpy: ``>=1.18``
   :depends python: 
   :depends scikit-image: ``>=0.18``
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install segmetrics

   and update with::

      conda update segmetrics

   or use the docker container::

      docker pull quay.io/biocontainers/segmetrics:<tag>

   (see `segmetrics/tags`_ for valid values for ``<tag>``)


.. |downloads_segmetrics| image:: https://img.shields.io/conda/dn/bioconda/segmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/segmetrics
   :alt:   (downloads)
.. |docker_segmetrics| image:: https://quay.io/repository/biocontainers/segmetrics/status
   :target: https://quay.io/repository/biocontainers/segmetrics
.. _`segmetrics/tags`: https://quay.io/repository/biocontainers/segmetrics?tab=tags


.. raw:: html

    <script>
        var package = "segmetrics";
        var versions = ["0.11.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/segmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/segmetrics/README.html