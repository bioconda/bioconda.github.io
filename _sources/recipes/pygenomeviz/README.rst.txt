:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygenomeviz'
.. highlight: bash

pygenomeviz
===========

.. conda:recipe:: pygenomeviz
   :replaces_section_title:
   :noindex:

   A genome visualization python package for comparative genomics

   :homepage: https://github.com/moshi4/pyGenomeViz/
   :license: MIT
   :recipe: /`pygenomeviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygenomeviz/meta.yaml>`_

   


.. conda:package:: pygenomeviz

   |downloads_pygenomeviz| |docker_pygenomeviz|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``

      

   
   :depends biopython: ``>=1.79,<2.0``
   :depends matplotlib-base: ``>=3.5.2,<4.0.0``
   :depends numpy: ``>=1.21,<2.0``
   :depends python: ``>=3.7,<4.0``
   :depends typing-extensions: ``>=4.3.0,<5.0.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygenomeviz

   and update with::

      conda update pygenomeviz

   or use the docker container::

      docker pull quay.io/biocontainers/pygenomeviz:<tag>

   (see `pygenomeviz/tags`_ for valid values for ``<tag>``)


.. |downloads_pygenomeviz| image:: https://img.shields.io/conda/dn/bioconda/pygenomeviz.svg?style=flat
   :target: https://anaconda.org/bioconda/pygenomeviz
   :alt:   (downloads)
.. |docker_pygenomeviz| image:: https://quay.io/repository/biocontainers/pygenomeviz/status
   :target: https://quay.io/repository/biocontainers/pygenomeviz
.. _`pygenomeviz/tags`: https://quay.io/repository/biocontainers/pygenomeviz?tab=tags


.. raw:: html

    <script>
        var package = "pygenomeviz";
        var versions = ["0.2.2","0.2.1","0.2.0","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygenomeviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygenomeviz/README.html