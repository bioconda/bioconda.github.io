:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioexcel_seqqc'
.. highlight: bash

bioexcel_seqqc
==============

.. conda:recipe:: bioexcel_seqqc
   :replaces_section_title:
   :noindex:

   Sequence Quality Control pipeline\/modules

   :homepage: https://github.com/bioexcel/bioexcel_seqqc
   :license: APACHE / Apache Software License
   :recipe: /`bioexcel_seqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc/meta.yaml>`_

   


.. conda:package:: bioexcel_seqqc

   |downloads_bioexcel_seqqc| |docker_bioexcel_seqqc|

   :versions:
      
      

      ``0.6-0``,  ``0.5-0``

      

   
   :depends cutadapt: 
   :depends fastqc: 
   :depends python: ``>=3``
   :depends pyyaml: 
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

      mamba install bioexcel_seqqc

   and update with::

      mamba update bioexcel_seqqc

  To create a new environment, run::

      mamba create --name myenvname bioexcel_seqqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioexcel_seqqc:<tag>

   (see `bioexcel_seqqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioexcel_seqqc| image:: https://img.shields.io/conda/dn/bioconda/bioexcel_seqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioexcel_seqqc
   :alt:   (downloads)
.. |docker_bioexcel_seqqc| image:: https://quay.io/repository/biocontainers/bioexcel_seqqc/status
   :target: https://quay.io/repository/biocontainers/bioexcel_seqqc
.. _`bioexcel_seqqc/tags`: https://quay.io/repository/biocontainers/bioexcel_seqqc?tab=tags


.. raw:: html

    <script>
        var package = "bioexcel_seqqc";
        var versions = ["0.6","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioexcel_seqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioexcel_seqqc/README.html