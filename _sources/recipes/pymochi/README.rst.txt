:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pymochi'
.. highlight: bash

pymochi
=======

.. conda:recipe:: pymochi
   :replaces_section_title:
   :noindex:

   Neural networks to quantify energies\, energetic couplings\, epistasis and allostery from deep mutational scanning data

   :homepage: https://github.com/lehner-lab/MoCHI
   :license: MIT
   :recipe: /`pymochi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymochi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pymochi/meta.yaml>`_

   


.. conda:package:: pymochi

   |downloads_pymochi| |docker_pymochi|

   :versions:
      
      

      ``1.0-0``,  ``0.9-0``

      

   
   :depends matplotlib-base: ``>=3.5.1``
   :depends numpy: ``>=1.21.2``
   :depends pandas: ``>=1.4.2``
   :depends pyreadr: ``>=0.4.4``
   :depends python: ``3.9.*``
   :depends pytorch: ``>=1.10.1``
   :depends scikit-learn: ``>=1.0.2``
   :depends scipy: ``>=1.8.0``
   :depends seaborn: ``>=0.11.2``
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

      mamba install pymochi

   and update with::

      mamba update pymochi

  To create a new environment, run::

      mamba create --name myenvname pymochi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pymochi:<tag>

   (see `pymochi/tags`_ for valid values for ``<tag>``)


.. |downloads_pymochi| image:: https://img.shields.io/conda/dn/bioconda/pymochi.svg?style=flat
   :target: https://anaconda.org/bioconda/pymochi
   :alt:   (downloads)
.. |docker_pymochi| image:: https://quay.io/repository/biocontainers/pymochi/status
   :target: https://quay.io/repository/biocontainers/pymochi
.. _`pymochi/tags`: https://quay.io/repository/biocontainers/pymochi?tab=tags


.. raw:: html

    <script>
        var package = "pymochi";
        var versions = ["1.0","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pymochi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pymochi/README.html