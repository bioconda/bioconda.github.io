:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'doubletdetection'
.. highlight: bash

doubletdetection
================

.. conda:recipe:: doubletdetection
   :replaces_section_title:
   :noindex:

   Method to detect and enable removal of doublets from single\-cell RNA\-sequencing.

   :homepage: https://github.com/JonathanShor/DoubletDetection
   :documentation: https://doubletdetection.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`doubletdetection <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletdetection>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletdetection/meta.yaml>`_

   


.. conda:package:: doubletdetection

   |downloads_doubletdetection| |docker_doubletdetection|

   :versions:
      
      

      ``4.3.0.post1-0``,  ``4.2-0``

      

   
   :depends anndata: ``>=0.8``
   :depends ipywidgets: 
   :depends leidenalg: 
   :depends louvain: 
   :depends matplotlib-base: ``>=3.6``
   :depends numpy: ``>=1.24``
   :depends pandas: ``>=0.22.0``
   :depends phenograph: 
   :depends python: ``>=3.10``
   :depends scanpy: ``>1.10.0``
   :depends scipy: ``>=1.8``
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

      mamba install doubletdetection

   and update with::

      mamba update doubletdetection

  To create a new environment, run::

      mamba create --name myenvname doubletdetection

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/doubletdetection:<tag>

   (see `doubletdetection/tags`_ for valid values for ``<tag>``)


.. |downloads_doubletdetection| image:: https://img.shields.io/conda/dn/bioconda/doubletdetection.svg?style=flat
   :target: https://anaconda.org/bioconda/doubletdetection
   :alt:   (downloads)
.. |docker_doubletdetection| image:: https://quay.io/repository/biocontainers/doubletdetection/status
   :target: https://quay.io/repository/biocontainers/doubletdetection
.. _`doubletdetection/tags`: https://quay.io/repository/biocontainers/doubletdetection?tab=tags


.. raw:: html

    <script>
        var package = "doubletdetection";
        var versions = ["4.3.0.post1","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/doubletdetection/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/doubletdetection/README.html