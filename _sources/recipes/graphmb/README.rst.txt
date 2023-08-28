:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphmb'
.. highlight: bash

graphmb
=======

.. conda:recipe:: graphmb
   :replaces_section_title:
   :noindex:

   GraphMB is a Metagenomic Binner developed for long\-read assemblies\, that takes advantage of graph machine learning algorithms and the assembly graph generated during assembly.

   :homepage: https://github.com/MicrobialDarkMatter/GraphMB
   :license: MIT
   :recipe: /`graphmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmb/meta.yaml>`_

   


.. conda:package:: graphmb

   |downloads_graphmb| |docker_graphmb|

   :versions:
      
      

      ``0.2.5-0``,  ``0.2.3-0``

      

   
   :depends importlib-resources: 
   :depends mlflow: ``>=2.3.1``
   :depends networkx: ``>=2.6.2``
   :depends python: 
   :depends pytorch: ``>=1.13.1``
   :depends requests: 
   :depends tensorflow: ``>=2.11.1``
   :depends tqdm: ``>=4.61.2``
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

      mamba install graphmb

   and update with::

      mamba update graphmb

  To create a new environment, run::

      mamba create --name myenvname graphmb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphmb:<tag>

   (see `graphmb/tags`_ for valid values for ``<tag>``)


.. |downloads_graphmb| image:: https://img.shields.io/conda/dn/bioconda/graphmb.svg?style=flat
   :target: https://anaconda.org/bioconda/graphmb
   :alt:   (downloads)
.. |docker_graphmb| image:: https://quay.io/repository/biocontainers/graphmb/status
   :target: https://quay.io/repository/biocontainers/graphmb
.. _`graphmb/tags`: https://quay.io/repository/biocontainers/graphmb?tab=tags


.. raw:: html

    <script>
        var package = "graphmb";
        var versions = ["0.2.5","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphmb/README.html