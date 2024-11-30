:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rapclust'
.. highlight: bash

rapclust
========

.. conda:recipe:: rapclust
   :replaces_section_title:
   :noindex:

   Accurate\, Fast and Lightweight Clustering of de novo Transcriptomes using Fragment Equivalence Classes

   :homepage: https://github.com/COMBINE-lab/RapClust
   :license: BSD / BSD with attribution
   :recipe: /`rapclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rapclust/meta.yaml>`_

   


.. conda:package:: rapclust

   |downloads_rapclust| |docker_rapclust|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends click: 
   :depends coloredlogs: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pyyaml: 
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

      mamba install rapclust

   and update with::

      mamba update rapclust

  To create a new environment, run::

      mamba create --name myenvname rapclust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rapclust:<tag>

   (see `rapclust/tags`_ for valid values for ``<tag>``)


.. |downloads_rapclust| image:: https://img.shields.io/conda/dn/bioconda/rapclust.svg?style=flat
   :target: https://anaconda.org/bioconda/rapclust
   :alt:   (downloads)
.. |docker_rapclust| image:: https://quay.io/repository/biocontainers/rapclust/status
   :target: https://quay.io/repository/biocontainers/rapclust
.. _`rapclust/tags`: https://quay.io/repository/biocontainers/rapclust?tab=tags


.. raw:: html

    <script>
        var package = "rapclust";
        var versions = ["0.1.2","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rapclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rapclust/README.html