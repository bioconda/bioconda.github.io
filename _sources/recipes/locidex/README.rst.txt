:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'locidex'
.. highlight: bash

locidex
=======

.. conda:recipe:: locidex
   :replaces_section_title:
   :noindex:

   Locidex\: Common search engine for similarity based typing applications

   :homepage: https://pypi.org/project/locidex/
   :developer docs: https://github.com/phac-nml/locidex
   :license: Apache-2.0
   :recipe: /`locidex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locidex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/locidex/meta.yaml>`_

   


.. conda:package:: locidex

   |downloads_locidex| |docker_locidex|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends biopython: ``>=1.83``
   :depends blast: ``>=2.9.0``
   :depends mafft: 
   :depends numba: ``>=0.57.1``
   :depends numpy: 
   :depends pandas: ``>=2.0.2``
   :depends pyrodigal: ``>=3.0``
   :depends pytables: ``>=3.8``
   :depends python: ``>=3.8,<4``
   :depends six: ``>=1.16``
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

      mamba install locidex

   and update with::

      mamba update locidex

  To create a new environment, run::

      mamba create --name myenvname locidex

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/locidex:<tag>

   (see `locidex/tags`_ for valid values for ``<tag>``)


.. |downloads_locidex| image:: https://img.shields.io/conda/dn/bioconda/locidex.svg?style=flat
   :target: https://anaconda.org/bioconda/locidex
   :alt:   (downloads)
.. |docker_locidex| image:: https://quay.io/repository/biocontainers/locidex/status
   :target: https://quay.io/repository/biocontainers/locidex
.. _`locidex/tags`: https://quay.io/repository/biocontainers/locidex?tab=tags


.. raw:: html

    <script>
        var package = "locidex";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/locidex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/locidex/README.html