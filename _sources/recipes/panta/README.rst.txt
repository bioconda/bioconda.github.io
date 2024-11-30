:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panta'
.. highlight: bash

panta
=====

.. conda:recipe:: panta
   :replaces_section_title:
   :noindex:

   PanTA \- pan\-genome pipeline

   :homepage: https://github.com/amromics/panta
   :license: MIT / MIT
   :recipe: /`panta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panta/meta.yaml>`_

   


.. conda:package:: panta

   |downloads_panta| |docker_panta|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.13.0``
   :depends cd-hit: ``>=4.8.1``
   :depends diamond: ``>=2.1.3``
   :depends mafft: ``>=7.520``
   :depends mcl: ``>=14.137``
   :depends pandas: 
   :depends psutil: 
   :depends python: ``>=3.9``
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

      mamba install panta

   and update with::

      mamba update panta

  To create a new environment, run::

      mamba create --name myenvname panta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panta:<tag>

   (see `panta/tags`_ for valid values for ``<tag>``)


.. |downloads_panta| image:: https://img.shields.io/conda/dn/bioconda/panta.svg?style=flat
   :target: https://anaconda.org/bioconda/panta
   :alt:   (downloads)
.. |docker_panta| image:: https://quay.io/repository/biocontainers/panta/status
   :target: https://quay.io/repository/biocontainers/panta
.. _`panta/tags`: https://quay.io/repository/biocontainers/panta?tab=tags


.. raw:: html

    <script>
        var package = "panta";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panta/README.html