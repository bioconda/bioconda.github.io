:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qualifilter'
.. highlight: bash

qualifilter
===========

.. conda:recipe:: qualifilter
   :replaces_section_title:
   :noindex:

   Generate a QC report summarizing key quality metrics and sample pass\/fail status according to user\-defined thresholds.

   :homepage: https://github.com/buhlentozini/QualiFilter
   :license: MIT / MIT
   :recipe: /`qualifilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualifilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qualifilter/meta.yaml>`_

   


.. conda:package:: qualifilter

   |downloads_qualifilter| |docker_qualifilter|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends pandas: ``>=1.0``
   :depends python: 
   :depends pyyaml: 
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

      mamba install qualifilter

   and update with::

      mamba update qualifilter

  To create a new environment, run::

      mamba create --name myenvname qualifilter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/qualifilter:<tag>

   (see `qualifilter/tags`_ for valid values for ``<tag>``)


.. |downloads_qualifilter| image:: https://img.shields.io/conda/dn/bioconda/qualifilter.svg?style=flat
   :target: https://anaconda.org/bioconda/qualifilter
   :alt:   (downloads)
.. |docker_qualifilter| image:: https://quay.io/repository/biocontainers/qualifilter/status
   :target: https://quay.io/repository/biocontainers/qualifilter
.. _`qualifilter/tags`: https://quay.io/repository/biocontainers/qualifilter?tab=tags


.. raw:: html

    <script>
        var package = "qualifilter";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qualifilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qualifilter/README.html