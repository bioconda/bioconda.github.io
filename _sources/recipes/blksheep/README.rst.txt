:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blksheep'
.. highlight: bash

blksheep
========

.. conda:recipe:: blksheep
   :replaces_section_title:
   :noindex:

   A package for differential extreme values analysis

   :homepage: https://github.com/ruggleslab/blackSheep/
   :documentation: https://blacksheep.readthedocs.io/en/master/
   
   :developer docs: https://github.com/ruggleslab/blackSheep
   :license: MIT / MIT
   :recipe: /`blksheep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blksheep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blksheep/meta.yaml>`_

   


.. conda:package:: blksheep

   |downloads_blksheep| |docker_blksheep|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends matplotlib-base: ``>=3.1.0``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.24.2``
   :depends python: 
   :depends scikit-learn: ``>=0.21.2``
   :depends scipy: ``>=1.2.1``
   :depends seaborn: ``>=0.9.0``
   :depends statsmodels: ``>=0.10.0``
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

      mamba install blksheep

   and update with::

      mamba update blksheep

  To create a new environment, run::

      mamba create --name myenvname blksheep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blksheep:<tag>

   (see `blksheep/tags`_ for valid values for ``<tag>``)


.. |downloads_blksheep| image:: https://img.shields.io/conda/dn/bioconda/blksheep.svg?style=flat
   :target: https://anaconda.org/bioconda/blksheep
   :alt:   (downloads)
.. |docker_blksheep| image:: https://quay.io/repository/biocontainers/blksheep/status
   :target: https://quay.io/repository/biocontainers/blksheep
.. _`blksheep/tags`: https://quay.io/repository/biocontainers/blksheep?tab=tags


.. raw:: html

    <script>
        var package = "blksheep";
        var versions = ["0.0.7","0.0.6","0.0.5","0.0.3","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blksheep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blksheep/README.html