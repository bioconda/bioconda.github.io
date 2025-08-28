:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qglmm'
.. highlight: bash

qglmm
=====

.. conda:recipe:: qglmm
   :replaces_section_title:
   :noindex:

   Fast Generalized Linear Mixed Models in Python

   :homepage: https://github.com/mokar2001/qglmm
   :license: BSD-3-Clause
   :recipe: /`qglmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qglmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qglmm/meta.yaml>`_

   


.. conda:package:: qglmm

   |downloads_qglmm| |docker_qglmm|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install qglmm

   and update with::

      mamba update qglmm

  To create a new environment, run::

      mamba create --name myenvname qglmm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qglmm:<tag>

   (see `qglmm/tags`_ for valid values for ``<tag>``)


.. |downloads_qglmm| image:: https://img.shields.io/conda/dn/bioconda/qglmm.svg?style=flat
   :target: https://anaconda.org/bioconda/qglmm
   :alt:   (downloads)
.. |docker_qglmm| image:: https://quay.io/repository/biocontainers/qglmm/status
   :target: https://quay.io/repository/biocontainers/qglmm
.. _`qglmm/tags`: https://quay.io/repository/biocontainers/qglmm?tab=tags


.. raw:: html

    <script>
        var package = "qglmm";
        var versions = ["0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qglmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qglmm/README.html