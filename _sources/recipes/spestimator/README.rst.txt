:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spestimator'
.. highlight: bash

spestimator
===========

.. conda:recipe:: spestimator
   :replaces_section_title:
   :noindex:

   A tool to predict bacterial species from fasta files using RefSeq 16S.

   :homepage: https://github.com/erinyoung/Spestimator
   :license: MIT
   :recipe: /`spestimator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spestimator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spestimator/meta.yaml>`_

   


.. conda:package:: spestimator

   |downloads_spestimator| |docker_spestimator|

   :versions:
      
      

      ``0.3.0.233-0``,  ``0.1.0.232-0``

      

   
   :depends blast: 
   :depends ncbi-datasets-pyclient: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends requests: 
   :depends tqdm: 
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

      mamba install spestimator

   and update with::

      mamba update spestimator

  To create a new environment, run::

      mamba create --name myenvname spestimator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spestimator:<tag>

   (see `spestimator/tags`_ for valid values for ``<tag>``)


.. |downloads_spestimator| image:: https://img.shields.io/conda/dn/bioconda/spestimator.svg?style=flat
   :target: https://anaconda.org/bioconda/spestimator
   :alt:   (downloads)
.. |docker_spestimator| image:: https://quay.io/repository/biocontainers/spestimator/status
   :target: https://quay.io/repository/biocontainers/spestimator
.. _`spestimator/tags`: https://quay.io/repository/biocontainers/spestimator?tab=tags


.. raw:: html

    <script>
        var package = "spestimator";
        var versions = ["0.3.0.233","0.1.0.232"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spestimator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spestimator/README.html