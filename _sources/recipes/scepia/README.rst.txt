:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scepia'
.. highlight: bash

scepia
======

.. conda:recipe:: scepia
   :replaces_section_title:
   :noindex:

   Single Cell Epigenome\-based Inference of Activity

   :homepage: https://github.com/vanheeringen-lab/scepia
   :license: MIT / MIT
   :recipe: /`scepia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia/meta.yaml>`_
   :links: biotools: :biotools:`scepia`

   


.. conda:package:: scepia

   |downloads_scepia| |docker_scepia|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends adjusttext: 
   :depends geosketch: 
   :depends gimmemotifs: ``>=0.15.2,<=0.17.1``
   :depends leidenalg: 
   :depends loguru: 
   :depends louvain: 
   :depends python: ``>=3.7``
   :depends scanpy: 
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

      mamba install scepia

   and update with::

      mamba update scepia

  To create a new environment, run::

      mamba create --name myenvname scepia

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scepia:<tag>

   (see `scepia/tags`_ for valid values for ``<tag>``)


.. |downloads_scepia| image:: https://img.shields.io/conda/dn/bioconda/scepia.svg?style=flat
   :target: https://anaconda.org/bioconda/scepia
   :alt:   (downloads)
.. |docker_scepia| image:: https://quay.io/repository/biocontainers/scepia/status
   :target: https://quay.io/repository/biocontainers/scepia
.. _`scepia/tags`: https://quay.io/repository/biocontainers/scepia?tab=tags


.. raw:: html

    <script>
        var package = "scepia";
        var versions = ["0.5.1","0.5.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scepia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scepia/README.html