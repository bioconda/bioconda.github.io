:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gneiss'
.. highlight: bash

gneiss
======

.. conda:recipe:: gneiss
   :replaces_section_title:
   :noindex:

   Compositional data analysis tools and visualizations

   :homepage: https://biocore.github.io/gneiss/
   :license: BSD / BSD
   :recipe: /`gneiss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gneiss/meta.yaml>`_

   


.. conda:package:: gneiss

   |downloads_gneiss| |docker_gneiss|

   :versions:
      
      

      ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      

   
   :depends biom-format: 
   :depends bokeh: 
   :depends ipython: ``>=3.2.0``
   :depends matplotlib: ``>=1.4.3``
   :depends nose: ``>=1.3.7``
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.18.0``
   :depends python: ``>3``
   :depends scikit-bio: ``>=0.5.1``
   :depends scipy: ``>=0.15.1``
   :depends seaborn: 
   :depends statsmodels: ``>=0.8.0``
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

      mamba install gneiss

   and update with::

      mamba update gneiss

  To create a new environment, run::

      mamba create --name myenvname gneiss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gneiss:<tag>

   (see `gneiss/tags`_ for valid values for ``<tag>``)


.. |downloads_gneiss| image:: https://img.shields.io/conda/dn/bioconda/gneiss.svg?style=flat
   :target: https://anaconda.org/bioconda/gneiss
   :alt:   (downloads)
.. |docker_gneiss| image:: https://quay.io/repository/biocontainers/gneiss/status
   :target: https://quay.io/repository/biocontainers/gneiss
.. _`gneiss/tags`: https://quay.io/repository/biocontainers/gneiss?tab=tags


.. raw:: html

    <script>
        var package = "gneiss";
        var versions = ["0.4.6","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gneiss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gneiss/README.html