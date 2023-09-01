:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sashimi-py'
.. highlight: bash

sashimi-py
==========

.. conda:recipe:: sashimi-py
   :replaces_section_title:
   :noindex:

   This is an pure Python version of sashimi plot

   :homepage: https://github.com/ygidtu/sashimi.py
   :documentation: https://sashimi.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sashimi-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sashimi-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sashimi-py/meta.yaml>`_

   


.. conda:package:: sashimi-py

   |downloads_sashimi-py| |docker_sashimi-py|

   :versions:
      
      

      ``0.1.5-0``,  ``0.0.4-0``

      

   
   :depends adjusttext: 
   :depends cairocffi: 
   :depends click: 
   :depends click-option-group: 
   :depends filetype: 
   :depends hicmatrix: 
   :depends loguru: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybigwig: 
   :depends pysam: 
   :depends python: 
   :depends requests: 
   :depends seaborn-base: 
   :depends wheel: 
   :depends xmltodict: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sashimi-py

   and update with::

      mamba update sashimi-py

  To create a new environment, run::

      mamba create --name myenvname sashimi-py

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sashimi-py:<tag>

   (see `sashimi-py/tags`_ for valid values for ``<tag>``)


.. |downloads_sashimi-py| image:: https://img.shields.io/conda/dn/bioconda/sashimi-py.svg?style=flat
   :target: https://anaconda.org/bioconda/sashimi-py
   :alt:   (downloads)
.. |docker_sashimi-py| image:: https://quay.io/repository/biocontainers/sashimi-py/status
   :target: https://quay.io/repository/biocontainers/sashimi-py
.. _`sashimi-py/tags`: https://quay.io/repository/biocontainers/sashimi-py?tab=tags


.. raw:: html

    <script>
        var package = "sashimi-py";
        var versions = ["0.1.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sashimi-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sashimi-py/README.html