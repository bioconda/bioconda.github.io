:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymsaviz'
.. highlight: bash

pymsaviz
========

.. conda:recipe:: pymsaviz
   :replaces_section_title:
   :noindex:

   MSA visualization python package for sequence analysis

   :homepage: https://moshi4.github.io/pyMSAviz/
   :license: MIT
   :recipe: /`pymsaviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymsaviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymsaviz/meta.yaml>`_

   


.. conda:package:: pymsaviz

   |downloads_pymsaviz| |docker_pymsaviz|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends biopython: ``>=1.79,<2.0``
   :depends matplotlib-base: ``>=3.5.2,<4.0.0``
   :depends python: ``>=3.7,<4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pymsaviz

   and update with::

      conda update pymsaviz

   or use the docker container::

      docker pull quay.io/biocontainers/pymsaviz:<tag>

   (see `pymsaviz/tags`_ for valid values for ``<tag>``)


.. |downloads_pymsaviz| image:: https://img.shields.io/conda/dn/bioconda/pymsaviz.svg?style=flat
   :target: https://anaconda.org/bioconda/pymsaviz
   :alt:   (downloads)
.. |docker_pymsaviz| image:: https://quay.io/repository/biocontainers/pymsaviz/status
   :target: https://quay.io/repository/biocontainers/pymsaviz
.. _`pymsaviz/tags`: https://quay.io/repository/biocontainers/pymsaviz?tab=tags


.. raw:: html

    <script>
        var package = "pymsaviz";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymsaviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymsaviz/README.html