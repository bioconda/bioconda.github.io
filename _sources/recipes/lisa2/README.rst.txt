:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lisa2'
.. highlight: bash

lisa2
=====

.. conda:recipe:: lisa2
   :replaces_section_title:
   :noindex:

   Lisa\: inferring transcriptional regulators through integrative modeling of public chromatin accessibility and ChIP\-seq data. X. Shirley Liu Lab\, 2020

   :homepage: https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-1934-6
   :license: MIT
   :recipe: /`lisa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lisa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lisa2/meta.yaml>`_

   


.. conda:package:: lisa2

   |downloads_lisa2| |docker_lisa2|

   :versions:
      
      

      ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``

      

   
   :depends h5py: ``>=2``
   :depends numpy: ``>=1.17,<2``
   :depends python: ``>=3.5``
   :depends scikit-learn: ``>=0.22,<2``
   :depends scipy: ``>=1.4,<2``
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

      mamba install lisa2

   and update with::

      mamba update lisa2

  To create a new environment, run::

      mamba create --name myenvname lisa2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lisa2:<tag>

   (see `lisa2/tags`_ for valid values for ``<tag>``)


.. |downloads_lisa2| image:: https://img.shields.io/conda/dn/bioconda/lisa2.svg?style=flat
   :target: https://anaconda.org/bioconda/lisa2
   :alt:   (downloads)
.. |docker_lisa2| image:: https://quay.io/repository/biocontainers/lisa2/status
   :target: https://quay.io/repository/biocontainers/lisa2
.. _`lisa2/tags`: https://quay.io/repository/biocontainers/lisa2?tab=tags


.. raw:: html

    <script>
        var package = "lisa2";
        var versions = ["2.3.2","2.3.2","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lisa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lisa2/README.html