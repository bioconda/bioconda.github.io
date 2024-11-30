:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosg'
.. highlight: bash

cosg
====

.. conda:recipe:: cosg
   :replaces_section_title:
   :noindex:

   Accurate and fast cell marker gene identification with COSG

   :homepage: https://github.com/genecell/COSG
   :license: BSD-3-Clause
   :recipe: /`cosg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosg/meta.yaml>`_

   


.. conda:package:: cosg

   |downloads_cosg| |docker_cosg|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=0.21``
   :depends python: 
   :depends scanpy: ``>=1.6.0``
   :depends scikit-learn: ``>=0.21.2``
   :depends scipy: ``>=1.4``
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

      mamba install cosg

   and update with::

      mamba update cosg

  To create a new environment, run::

      mamba create --name myenvname cosg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cosg:<tag>

   (see `cosg/tags`_ for valid values for ``<tag>``)


.. |downloads_cosg| image:: https://img.shields.io/conda/dn/bioconda/cosg.svg?style=flat
   :target: https://anaconda.org/bioconda/cosg
   :alt:   (downloads)
.. |docker_cosg| image:: https://quay.io/repository/biocontainers/cosg/status
   :target: https://quay.io/repository/biocontainers/cosg
.. _`cosg/tags`: https://quay.io/repository/biocontainers/cosg?tab=tags


.. raw:: html

    <script>
        var package = "cosg";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosg/README.html