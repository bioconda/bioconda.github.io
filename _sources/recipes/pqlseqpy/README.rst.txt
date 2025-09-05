:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pqlseqpy'
.. highlight: bash

pqlseqpy
========

.. conda:recipe:: pqlseqpy
   :replaces_section_title:
   :noindex:

   Fast PQLseq in Python

   :homepage: https://github.com/mokar2001/PQLseqPy
   :license: BSD-3-Clause
   :recipe: /`pqlseqpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pqlseqpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pqlseqpy/meta.yaml>`_

   


.. conda:package:: pqlseqpy

   |downloads_pqlseqpy| |docker_pqlseqpy|

   :versions:
      
      

      ``0.1.2-0``

      

   
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

      mamba install pqlseqpy

   and update with::

      mamba update pqlseqpy

  To create a new environment, run::

      mamba create --name myenvname pqlseqpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pqlseqpy:<tag>

   (see `pqlseqpy/tags`_ for valid values for ``<tag>``)


.. |downloads_pqlseqpy| image:: https://img.shields.io/conda/dn/bioconda/pqlseqpy.svg?style=flat
   :target: https://anaconda.org/bioconda/pqlseqpy
   :alt:   (downloads)
.. |docker_pqlseqpy| image:: https://quay.io/repository/biocontainers/pqlseqpy/status
   :target: https://quay.io/repository/biocontainers/pqlseqpy
.. _`pqlseqpy/tags`: https://quay.io/repository/biocontainers/pqlseqpy?tab=tags


.. raw:: html

    <script>
        var package = "pqlseqpy";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pqlseqpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pqlseqpy/README.html