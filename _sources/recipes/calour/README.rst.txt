:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calour'
.. highlight: bash

calour
======

.. conda:recipe:: calour
   :replaces_section_title:
   :noindex:

   exploratory and interactive microbiome analyses based on heatmaps

   :homepage: https://biocore.github.io/calour/
   :developer docs: https://github.com/biocore/calour
   :license: BSD / BSD-3-Clause
   :recipe: /`calour <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour/meta.yaml>`_

   Calour is a python package for processing\, analysis and interactive
   exploration of microbiome \(and other matrix form data\)\,
   incorporating external databases.



.. conda:package:: calour

   |downloads_calour| |docker_calour|

   :versions:
      
      

      ``2020.8.6-0``,  ``2019.5.1-0``,  ``2018.10.1-0``

      

   
   :depends biom-format: 
   :depends docrep: 
   :depends ipython: 
   :depends ipywidgets: 
   :depends matplotlib-base: ``>=2.0``
   :depends numpy: 
   :depends pandas: 
   :depends pyqt: ``>5``
   :depends python: ``>=3.5``
   :depends scikit-bio: ``>=0.5.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install calour

   and update with::

      mamba update calour

  To create a new environment, run::

      mamba create --name myenvname calour

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/calour:<tag>

   (see `calour/tags`_ for valid values for ``<tag>``)


.. |downloads_calour| image:: https://img.shields.io/conda/dn/bioconda/calour.svg?style=flat
   :target: https://anaconda.org/bioconda/calour
   :alt:   (downloads)
.. |docker_calour| image:: https://quay.io/repository/biocontainers/calour/status
   :target: https://quay.io/repository/biocontainers/calour
.. _`calour/tags`: https://quay.io/repository/biocontainers/calour?tab=tags


.. raw:: html

    <script>
        var package = "calour";
        var versions = ["2020.8.6","2019.5.1","2018.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calour/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calour/README.html