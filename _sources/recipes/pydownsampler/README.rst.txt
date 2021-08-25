:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydownsampler'
.. highlight: bash

pydownsampler
=============

.. conda:recipe:: pydownsampler
   :replaces_section_title:
   :noindex:

   A Python package for downsampling sequence alignment files

   :homepage: https://github.com/LindoNkambule/pydownsampler
   :license: MIT / MIT
   :recipe: /`pydownsampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydownsampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydownsampler/meta.yaml>`_

   


.. conda:package:: pydownsampler

   |downloads_pydownsampler| |docker_pydownsampler|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends docopt: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pydownsampler

   and update with::

      conda update pydownsampler

   or use the docker container::

      docker pull quay.io/biocontainers/pydownsampler:<tag>

   (see `pydownsampler/tags`_ for valid values for ``<tag>``)


.. |downloads_pydownsampler| image:: https://img.shields.io/conda/dn/bioconda/pydownsampler.svg?style=flat
   :target: https://anaconda.org/bioconda/pydownsampler
   :alt:   (downloads)
.. |docker_pydownsampler| image:: https://quay.io/repository/biocontainers/pydownsampler/status
   :target: https://quay.io/repository/biocontainers/pydownsampler
.. _`pydownsampler/tags`: https://quay.io/repository/biocontainers/pydownsampler?tab=tags


.. raw:: html

    <script>
        var package = "pydownsampler";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydownsampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydownsampler/README.html