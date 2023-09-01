:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jass_preprocessing'
.. highlight: bash

jass_preprocessing
==================

.. conda:recipe:: jass_preprocessing
   :replaces_section_title:
   :noindex:

   Harmonizing raw GWAS summary statistic for further analysis with jass

   :homepage: http://statistical-genetics.pages.pasteur.fr/jass_preprocessing/
   :license: MIT / MIT
   :recipe: /`jass_preprocessing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing/meta.yaml>`_

   


.. conda:package:: jass_preprocessing

   |downloads_jass_preprocessing| |docker_jass_preprocessing|

   :versions:
      
      

      ``2.2-0``,  ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
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

      mamba install jass_preprocessing

   and update with::

      mamba update jass_preprocessing

  To create a new environment, run::

      mamba create --name myenvname jass_preprocessing

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/jass_preprocessing:<tag>

   (see `jass_preprocessing/tags`_ for valid values for ``<tag>``)


.. |downloads_jass_preprocessing| image:: https://img.shields.io/conda/dn/bioconda/jass_preprocessing.svg?style=flat
   :target: https://anaconda.org/bioconda/jass_preprocessing
   :alt:   (downloads)
.. |docker_jass_preprocessing| image:: https://quay.io/repository/biocontainers/jass_preprocessing/status
   :target: https://quay.io/repository/biocontainers/jass_preprocessing
.. _`jass_preprocessing/tags`: https://quay.io/repository/biocontainers/jass_preprocessing?tab=tags


.. raw:: html

    <script>
        var package = "jass_preprocessing";
        var versions = ["2.2","2.1","2.0.1","2.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jass_preprocessing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jass_preprocessing/README.html