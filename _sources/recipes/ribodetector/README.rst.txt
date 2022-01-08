:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribodetector'
.. highlight: bash

ribodetector
============

.. conda:recipe:: ribodetector
   :replaces_section_title:
   :noindex:

   Accurate and rapid RiboRNA sequences Detector based on deep learning

   :homepage: https://github.com/hzi-bifo/RiboDetector
   :license: GPL-3
   :recipe: /`ribodetector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodetector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribodetector/meta.yaml>`_
   :links: biotools: :biotools:`ribodetector`

   


.. conda:package:: ribodetector

   |downloads_ribodetector| |docker_ribodetector|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends onnxruntime: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends pytorch: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ribodetector

   and update with::

      conda update ribodetector

   or use the docker container::

      docker pull quay.io/biocontainers/ribodetector:<tag>

   (see `ribodetector/tags`_ for valid values for ``<tag>``)


.. |downloads_ribodetector| image:: https://img.shields.io/conda/dn/bioconda/ribodetector.svg?style=flat
   :target: https://anaconda.org/bioconda/ribodetector
   :alt:   (downloads)
.. |docker_ribodetector| image:: https://quay.io/repository/biocontainers/ribodetector/status
   :target: https://quay.io/repository/biocontainers/ribodetector
.. _`ribodetector/tags`: https://quay.io/repository/biocontainers/ribodetector?tab=tags


.. raw:: html

    <script>
        var package = "ribodetector";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribodetector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribodetector/README.html