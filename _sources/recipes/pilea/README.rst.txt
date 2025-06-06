:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pilea'
.. highlight: bash

pilea
=====

.. conda:recipe:: pilea
   :replaces_section_title:
   :noindex:

   Pilea\: profiling bacterial growth dynamics from metagenomes with sketching

   :homepage: https://github.com/xinehc/pilea
   :license: MIT / MIT
   :recipe: /`pilea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pilea/meta.yaml>`_

   


.. conda:package:: pilea

   |downloads_pilea| |docker_pilea|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends kmc: ``>=3.2.4``
   :depends mmh3: ``>=5.1.0``
   :depends python: ``>=3.7``
   :depends rich-argparse: 
   :depends scikit-learn: ``>=1.6.1``
   :depends statsmodels: ``>=0.14.4``
   :depends threadpoolctl: 
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

      mamba install pilea

   and update with::

      mamba update pilea

  To create a new environment, run::

      mamba create --name myenvname pilea

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pilea:<tag>

   (see `pilea/tags`_ for valid values for ``<tag>``)


.. |downloads_pilea| image:: https://img.shields.io/conda/dn/bioconda/pilea.svg?style=flat
   :target: https://anaconda.org/bioconda/pilea
   :alt:   (downloads)
.. |docker_pilea| image:: https://quay.io/repository/biocontainers/pilea/status
   :target: https://quay.io/repository/biocontainers/pilea
.. _`pilea/tags`: https://quay.io/repository/biocontainers/pilea?tab=tags


.. raw:: html

    <script>
        var package = "pilea";
        var versions = ["1.1.2","1.1.1","1.1.0","1.0.0","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pilea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pilea/README.html