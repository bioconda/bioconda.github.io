:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scapp'
.. highlight: bash

scapp
=====

.. conda:recipe:: scapp
   :replaces_section_title:
   :noindex:

   Plasmid assembly in metagenomes

   :homepage: https://github.com/Shamir-Lab/SCAPP
   :license: MIT / MIT
   :recipe: /`scapp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scapp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scapp/meta.yaml>`_

   


.. conda:package:: scapp

   |downloads_scapp| |docker_scapp|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends blast: ``>=2.10.1``
   :depends bwa: 
   :depends networkx: ``2.4.*``
   :depends plasclass: 
   :depends pysam: ``0.15.3.*``
   :depends python: ``>=3.7``
   :depends samtools: 
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

      mamba install scapp

   and update with::

      mamba update scapp

  To create a new environment, run::

      mamba create --name myenvname scapp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scapp:<tag>

   (see `scapp/tags`_ for valid values for ``<tag>``)


.. |downloads_scapp| image:: https://img.shields.io/conda/dn/bioconda/scapp.svg?style=flat
   :target: https://anaconda.org/bioconda/scapp
   :alt:   (downloads)
.. |docker_scapp| image:: https://quay.io/repository/biocontainers/scapp/status
   :target: https://quay.io/repository/biocontainers/scapp
.. _`scapp/tags`: https://quay.io/repository/biocontainers/scapp?tab=tags


.. raw:: html

    <script>
        var package = "scapp";
        var versions = ["0.1.4","0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scapp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scapp/README.html