:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cami-amber'
.. highlight: bash

cami-amber
==========

.. conda:recipe:: cami-amber
   :replaces_section_title:
   :noindex:

   AMBER\: Assessment of Metagenome BinnERs

   :homepage: https://github.com/CAMI-challenge/AMBER
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`cami-amber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-amber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cami-amber/meta.yaml>`_

   


.. conda:package:: cami-amber

   |downloads_cami-amber| |docker_cami-amber|

   :versions:
      
      

      ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0.post0-0``

      

   
   :depends biopython: ``>=1.84``
   :depends bokeh: ``>=3.5.1``
   :depends jinja2: ``>=3.1.4``
   :depends matplotlib-base: ``>=3.8.4``
   :depends numpy: ``>=2.0.1``
   :depends pandas: ``>=2.2.2``
   :depends pyarrow: ``>=17.0.0``
   :depends python: ``>=3.6``
   :depends seaborn-base: ``>=0.13.2``
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

      mamba install cami-amber

   and update with::

      mamba update cami-amber

  To create a new environment, run::

      mamba create --name myenvname cami-amber

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cami-amber:<tag>

   (see `cami-amber/tags`_ for valid values for ``<tag>``)


.. |downloads_cami-amber| image:: https://img.shields.io/conda/dn/bioconda/cami-amber.svg?style=flat
   :target: https://anaconda.org/bioconda/cami-amber
   :alt:   (downloads)
.. |docker_cami-amber| image:: https://quay.io/repository/biocontainers/cami-amber/status
   :target: https://quay.io/repository/biocontainers/cami-amber
.. _`cami-amber/tags`: https://quay.io/repository/biocontainers/cami-amber?tab=tags


.. raw:: html

    <script>
        var package = "cami-amber";
        var versions = ["2.0.6","2.0.5","2.0.4","2.0.4","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cami-amber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cami-amber/README.html