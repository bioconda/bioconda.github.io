:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psm_fragments'
.. highlight: bash

psm_fragments
=============

.. conda:recipe:: psm_fragments
   :replaces_section_title:
   :noindex:

   PSM validation against ion fragmentation 

   :homepage: https://github.com/galaxyproteomics/psm_fragments
   :license: MIT
   :recipe: /`psm_fragments <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psm_fragments/meta.yaml>`_

   


.. conda:package:: psm_fragments

   |downloads_psm_fragments| |docker_psm_fragments|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends lxml: 
   :depends numpy: 
   :depends plotly: 
   :depends pyteomics: 
   :depends python: ``>=3.6``
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

      mamba install psm_fragments

   and update with::

      mamba update psm_fragments

  To create a new environment, run::

      mamba create --name myenvname psm_fragments

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psm_fragments:<tag>

   (see `psm_fragments/tags`_ for valid values for ``<tag>``)


.. |downloads_psm_fragments| image:: https://img.shields.io/conda/dn/bioconda/psm_fragments.svg?style=flat
   :target: https://anaconda.org/bioconda/psm_fragments
   :alt:   (downloads)
.. |docker_psm_fragments| image:: https://quay.io/repository/biocontainers/psm_fragments/status
   :target: https://quay.io/repository/biocontainers/psm_fragments
.. _`psm_fragments/tags`: https://quay.io/repository/biocontainers/psm_fragments?tab=tags


.. raw:: html

    <script>
        var package = "psm_fragments";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psm_fragments/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psm_fragments/README.html