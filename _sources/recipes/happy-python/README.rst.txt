:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'happy-python'
.. highlight: bash

happy-python
============

.. conda:recipe:: happy-python
   :replaces_section_title:
   :noindex:

   Haploidy and Size Completeness Estimation with Python

   :homepage: https://github.com/AntoineHo/HapPy
   :documentation: https://pypi.org/project/happy-AntoineHo/
   
   :license: MIT / MIT
   :recipe: /`happy-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happy-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/happy-python/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-021-04118-3`

   


.. conda:package:: happy-python

   |downloads_happy-python| |docker_happy-python|

   :versions:
      
      

      ``0.2.1rc0-0``

      

   
   :depends docopt: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends sambamba: 
   :depends samtools: 
   :depends scipy: 
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

      mamba install happy-python

   and update with::

      mamba update happy-python

  To create a new environment, run::

      mamba create --name myenvname happy-python

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/happy-python:<tag>

   (see `happy-python/tags`_ for valid values for ``<tag>``)


.. |downloads_happy-python| image:: https://img.shields.io/conda/dn/bioconda/happy-python.svg?style=flat
   :target: https://anaconda.org/bioconda/happy-python
   :alt:   (downloads)
.. |docker_happy-python| image:: https://quay.io/repository/biocontainers/happy-python/status
   :target: https://quay.io/repository/biocontainers/happy-python
.. _`happy-python/tags`: https://quay.io/repository/biocontainers/happy-python?tab=tags


.. raw:: html

    <script>
        var package = "happy-python";
        var versions = ["0.2.1rc0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/happy-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/happy-python/README.html