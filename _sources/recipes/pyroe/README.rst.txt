:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyroe'
.. highlight: bash

pyroe
=====

.. conda:recipe:: pyroe
   :replaces_section_title:
   :noindex:

   Prepare a splici transcriptome

   :homepage: https://github.com/COMBINE-lab/pyroe
   :license: BSD-3-Clause
   :recipe: /`pyroe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyroe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyroe/meta.yaml>`_

   


.. conda:package:: pyroe

   |downloads_pyroe| |docker_pyroe|

   :versions:
      
      

      ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``

      

   
   :depends bedtools: ``>=2.30.0``
   :depends biopython: ``>=1.77``
   :depends packaging: ``>=21.0``
   :depends pandas: ``>=1.3.0``
   :depends pyranges: ``>=0.0.115``
   :depends python: ``>=3.7``
   :depends scanpy: ``>=1.8.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyroe

   and update with::

      conda update pyroe

   or use the docker container::

      docker pull quay.io/biocontainers/pyroe:<tag>

   (see `pyroe/tags`_ for valid values for ``<tag>``)


.. |downloads_pyroe| image:: https://img.shields.io/conda/dn/bioconda/pyroe.svg?style=flat
   :target: https://anaconda.org/bioconda/pyroe
   :alt:   (downloads)
.. |docker_pyroe| image:: https://quay.io/repository/biocontainers/pyroe/status
   :target: https://quay.io/repository/biocontainers/pyroe
.. _`pyroe/tags`: https://quay.io/repository/biocontainers/pyroe?tab=tags


.. raw:: html

    <script>
        var package = "pyroe";
        var versions = ["0.6.4","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyroe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyroe/README.html