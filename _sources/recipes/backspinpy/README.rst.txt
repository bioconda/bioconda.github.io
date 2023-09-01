:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'backspinpy'
.. highlight: bash

backspinpy
==========

.. conda:recipe:: backspinpy
   :replaces_section_title:
   :noindex:

   backSPIN clustering algorythm

   :homepage: https://github.com/linnarsson-lab/BackSPIN
   :license: MIT / MIT
   :recipe: /`backspinpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/backspinpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/backspinpy/meta.yaml>`_

   


.. conda:package:: backspinpy

   |downloads_backspinpy| |docker_backspinpy|

   :versions:
      
      

      ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends future: 
   :depends numpy: 
   :depends python: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install backspinpy

   and update with::

      mamba update backspinpy

  To create a new environment, run::

      mamba create --name myenvname backspinpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/backspinpy:<tag>

   (see `backspinpy/tags`_ for valid values for ``<tag>``)


.. |downloads_backspinpy| image:: https://img.shields.io/conda/dn/bioconda/backspinpy.svg?style=flat
   :target: https://anaconda.org/bioconda/backspinpy
   :alt:   (downloads)
.. |docker_backspinpy| image:: https://quay.io/repository/biocontainers/backspinpy/status
   :target: https://quay.io/repository/biocontainers/backspinpy
.. _`backspinpy/tags`: https://quay.io/repository/biocontainers/backspinpy?tab=tags


.. raw:: html

    <script>
        var package = "backspinpy";
        var versions = ["0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/backspinpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/backspinpy/README.html