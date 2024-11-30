:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioprov'
.. highlight: bash

bioprov
=======

.. conda:recipe:: bioprov
   :replaces_section_title:
   :noindex:

   BioProv \- Provenance capture for bioinformatics workflows

   :homepage: https://github.com/vinisalazar/BioProv
   :documentation: https://bioprov.readthedocs.io/
   
   :developer docs: https://github.com/vinisalazar/bioprov
   :license: MIT / MIT
   :recipe: /`bioprov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioprov/meta.yaml>`_

   


.. conda:package:: bioprov

   |downloads_bioprov| |docker_bioprov|

   :versions:
      
      

      ``0.1.23-0``,  ``0.1.22-0``,  ``0.1.20-0``

      

   
   :depends biopython: 
   :depends coolname: 
   :depends coveralls: 
   :depends dataclasses: 
   :depends pandas: 
   :depends prodigal: 
   :depends prov: 
   :depends provstore-api: 
   :depends pydot: 
   :depends pytest: 
   :depends pytest-cov: 
   :depends python: 
   :depends tinydb: 
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

      mamba install bioprov

   and update with::

      mamba update bioprov

  To create a new environment, run::

      mamba create --name myenvname bioprov

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioprov:<tag>

   (see `bioprov/tags`_ for valid values for ``<tag>``)


.. |downloads_bioprov| image:: https://img.shields.io/conda/dn/bioconda/bioprov.svg?style=flat
   :target: https://anaconda.org/bioconda/bioprov
   :alt:   (downloads)
.. |docker_bioprov| image:: https://quay.io/repository/biocontainers/bioprov/status
   :target: https://quay.io/repository/biocontainers/bioprov
.. _`bioprov/tags`: https://quay.io/repository/biocontainers/bioprov?tab=tags


.. raw:: html

    <script>
        var package = "bioprov";
        var versions = ["0.1.23","0.1.22","0.1.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioprov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioprov/README.html