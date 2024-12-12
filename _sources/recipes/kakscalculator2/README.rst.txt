:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kakscalculator2'
.. highlight: bash

kakscalculator2
===============

.. conda:recipe:: kakscalculator2
   :replaces_section_title:
   :noindex:

   KaKs\_Calculator2.0 calculates Ka and Ks.

   :homepage: https://github.com/kullrich/kakscalculator2
   :license: GPL3
   :recipe: /`kakscalculator2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kakscalculator2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kakscalculator2/meta.yaml>`_
   :links: doi: :doi:`10.1016/S1672-0229(10)60008-3`

   KaKs\_Calculator2.0 includes several methods for calculating Ka and Ks. This software is a toolkit of incorporating gamma series methods and sliding window strategies.


.. conda:package:: kakscalculator2

   |downloads_kakscalculator2| |docker_kakscalculator2|

   :versions:
      
      

      ``2.0.1-5``,  ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends libcxx: ``>=18``
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

      mamba install kakscalculator2

   and update with::

      mamba update kakscalculator2

  To create a new environment, run::

      mamba create --name myenvname kakscalculator2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kakscalculator2:<tag>

   (see `kakscalculator2/tags`_ for valid values for ``<tag>``)


.. |downloads_kakscalculator2| image:: https://img.shields.io/conda/dn/bioconda/kakscalculator2.svg?style=flat
   :target: https://anaconda.org/bioconda/kakscalculator2
   :alt:   (downloads)
.. |docker_kakscalculator2| image:: https://quay.io/repository/biocontainers/kakscalculator2/status
   :target: https://quay.io/repository/biocontainers/kakscalculator2
.. _`kakscalculator2/tags`: https://quay.io/repository/biocontainers/kakscalculator2?tab=tags


.. raw:: html

    <script>
        var package = "kakscalculator2";
        var versions = ["2.0.1","2.0.1","2.0.1","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kakscalculator2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kakscalculator2/README.html