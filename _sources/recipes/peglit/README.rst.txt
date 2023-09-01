:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peglit'
.. highlight: bash

peglit
======

.. conda:recipe:: peglit
   :replaces_section_title:
   :noindex:

   Automatically identifies non\-interfering nucleotide linkers between a pegRNA and 3\' motif

   :homepage: https://github.com/sshen8/peglit/
   :license: BSD / BSD-3-Clause
   :recipe: /`peglit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit/meta.yaml>`_

   


.. conda:package:: peglit

   |downloads_peglit| |docker_peglit|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends levenshtein: 
   :depends matplotlib-base: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :depends viennarna: ``>=2.5``
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

      mamba install peglit

   and update with::

      mamba update peglit

  To create a new environment, run::

      mamba create --name myenvname peglit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peglit:<tag>

   (see `peglit/tags`_ for valid values for ``<tag>``)


.. |downloads_peglit| image:: https://img.shields.io/conda/dn/bioconda/peglit.svg?style=flat
   :target: https://anaconda.org/bioconda/peglit
   :alt:   (downloads)
.. |docker_peglit| image:: https://quay.io/repository/biocontainers/peglit/status
   :target: https://quay.io/repository/biocontainers/peglit
.. _`peglit/tags`: https://quay.io/repository/biocontainers/peglit?tab=tags


.. raw:: html

    <script>
        var package = "peglit";
        var versions = ["1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peglit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peglit/README.html