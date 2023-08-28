:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svhip'
.. highlight: bash

svhip
=====

.. conda:recipe:: svhip
   :replaces_section_title:
   :noindex:

   Retrainable machine learning pipeline for the detection of secondary structure conservation on a genome\-level.

   :homepage: https://github.com/chrisBioInf/Svhip
   :license: MIT / MIT
   :recipe: /`svhip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svhip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svhip/meta.yaml>`_

   


.. conda:package:: svhip

   |downloads_svhip| |docker_svhip|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blosum: ``>=1.1.3``
   :depends clustalw: ``>=2.1.0``
   :depends matplotlib-base: ``>=3.5.1``
   :depends scikit-learn: ``1.1.3``
   :depends scipy: ``>=1.8.0``
   :depends seaborn: ``>=0.11.2``
   :depends viennarna: ``>=2.5.0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install svhip

   and update with::

      mamba update svhip

  To create a new environment, run::

      mamba create --name myenvname svhip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svhip:<tag>

   (see `svhip/tags`_ for valid values for ``<tag>``)


.. |downloads_svhip| image:: https://img.shields.io/conda/dn/bioconda/svhip.svg?style=flat
   :target: https://anaconda.org/bioconda/svhip
   :alt:   (downloads)
.. |docker_svhip| image:: https://quay.io/repository/biocontainers/svhip/status
   :target: https://quay.io/repository/biocontainers/svhip
.. _`svhip/tags`: https://quay.io/repository/biocontainers/svhip?tab=tags


.. raw:: html

    <script>
        var package = "svhip";
        var versions = ["1.0.9","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svhip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svhip/README.html