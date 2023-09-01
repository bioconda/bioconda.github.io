:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coidb'
.. highlight: bash

coidb
=====

.. conda:recipe:: coidb
   :replaces_section_title:
   :noindex:

   A tool to obtain and maintain a database of COI metabarcode references

   :homepage: https://github.com/johnne/coidb
   :license: MIT
   :recipe: /`coidb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb/meta.yaml>`_

   


.. conda:package:: coidb

   |downloads_coidb| |docker_coidb|

   :versions:
      
      

      ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``

      

   
   :depends biopython: 
   :depends importlib_resources: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends seqkit: 
   :depends snakemake: 
   :depends tqdm: 
   :depends unzip: 
   :depends vsearch: 
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

      mamba install coidb

   and update with::

      mamba update coidb

  To create a new environment, run::

      mamba create --name myenvname coidb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coidb:<tag>

   (see `coidb/tags`_ for valid values for ``<tag>``)


.. |downloads_coidb| image:: https://img.shields.io/conda/dn/bioconda/coidb.svg?style=flat
   :target: https://anaconda.org/bioconda/coidb
   :alt:   (downloads)
.. |docker_coidb| image:: https://quay.io/repository/biocontainers/coidb/status
   :target: https://quay.io/repository/biocontainers/coidb
.. _`coidb/tags`: https://quay.io/repository/biocontainers/coidb?tab=tags


.. raw:: html

    <script>
        var package = "coidb";
        var versions = ["0.4.8","0.4.7","0.4.6","0.4.5","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coidb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coidb/README.html