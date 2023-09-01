:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ezaai'
.. highlight: bash

ezaai
=====

.. conda:recipe:: ezaai
   :replaces_section_title:
   :noindex:

   EzAAI is a suite of workflows for improved AAI calculation performance 
   along with the novel module that provides hierarchical clustering analysis 
   and dendrogram representation.


   :homepage: http://leb.snu.ac.kr/ezaai
   :developer docs: https://github.com/endixk/ezaai
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`ezaai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ezaai/meta.yaml>`_
   :links: doi: :doi:`10.1007/s12275-021-1154-0`

   


.. conda:package:: ezaai

   |downloads_ezaai| |docker_ezaai|

   :versions:
      
      

      ``1.2.2-0``

      

   
   :depends blast: 
   :depends diamond: 
   :depends mmseqs2: 
   :depends openjdk: ``>=8,<9``
   :depends prodigal: 
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

      mamba install ezaai

   and update with::

      mamba update ezaai

  To create a new environment, run::

      mamba create --name myenvname ezaai

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ezaai:<tag>

   (see `ezaai/tags`_ for valid values for ``<tag>``)


.. |downloads_ezaai| image:: https://img.shields.io/conda/dn/bioconda/ezaai.svg?style=flat
   :target: https://anaconda.org/bioconda/ezaai
   :alt:   (downloads)
.. |docker_ezaai| image:: https://quay.io/repository/biocontainers/ezaai/status
   :target: https://quay.io/repository/biocontainers/ezaai
.. _`ezaai/tags`: https://quay.io/repository/biocontainers/ezaai?tab=tags


.. raw:: html

    <script>
        var package = "ezaai";
        var versions = ["1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ezaai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ezaai/README.html