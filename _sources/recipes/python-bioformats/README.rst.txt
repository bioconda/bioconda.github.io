:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-bioformats'
.. highlight: bash

python-bioformats
=================

.. conda:recipe:: python-bioformats
   :replaces_section_title:
   :noindex:

   Read and write life sciences file formats

   :homepage: http://github.com/CellProfiler/python-bioformats/
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`python-bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats/meta.yaml>`_

   


.. conda:package:: python-bioformats

   |downloads_python-bioformats| |docker_python-bioformats|

   :versions:
      
      

      ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.0-0``,  ``1.5.2-0``

      

   
   :depends boto3: ``>=1.14.23``
   :depends future: ``>=0.18.2``
   :depends openjdk: 
   :depends python: 
   :depends python-javabridge: ``4.0.3``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install python-bioformats

   and update with::

      mamba update python-bioformats

  To create a new environment, run::

      mamba create --name myenvname python-bioformats

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-bioformats:<tag>

   (see `python-bioformats/tags`_ for valid values for ``<tag>``)


.. |downloads_python-bioformats| image:: https://img.shields.io/conda/dn/bioconda/python-bioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/python-bioformats
   :alt:   (downloads)
.. |docker_python-bioformats| image:: https://quay.io/repository/biocontainers/python-bioformats/status
   :target: https://quay.io/repository/biocontainers/python-bioformats
.. _`python-bioformats/tags`: https://quay.io/repository/biocontainers/python-bioformats?tab=tags


.. raw:: html

    <script>
        var package = "python-bioformats";
        var versions = ["4.0.7","4.0.6","4.0.5","4.0.4","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-bioformats/README.html