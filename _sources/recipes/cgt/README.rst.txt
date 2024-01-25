:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgt'
.. highlight: bash

cgt
===

.. conda:recipe:: cgt
   :replaces_section_title:
   :noindex:

   Calculate a core genome threshold \(cgt\) from metagenome data

   :homepage: https://github.com/bacpop/cgt
   :license: APACHE / Apache-2.0
   :recipe: /`cgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgt/meta.yaml>`_

   


.. conda:package:: cgt

   |downloads_cgt| |docker_cgt|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install cgt

   and update with::

      mamba update cgt

  To create a new environment, run::

      mamba create --name myenvname cgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgt:<tag>

   (see `cgt/tags`_ for valid values for ``<tag>``)


.. |downloads_cgt| image:: https://img.shields.io/conda/dn/bioconda/cgt.svg?style=flat
   :target: https://anaconda.org/bioconda/cgt
   :alt:   (downloads)
.. |docker_cgt| image:: https://quay.io/repository/biocontainers/cgt/status
   :target: https://quay.io/repository/biocontainers/cgt
.. _`cgt/tags`: https://quay.io/repository/biocontainers/cgt?tab=tags


.. raw:: html

    <script>
        var package = "cgt";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgt/README.html