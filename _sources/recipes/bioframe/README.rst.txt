:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioframe'
.. highlight: bash

bioframe
========

.. conda:recipe:: bioframe
   :replaces_section_title:
   :noindex:

   Pandas utilities for tab\-delimited and other genomic files

   :homepage: https://github.com/mirnylab/bioframe
   :documentation: https://bioframe.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`bioframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioframe/meta.yaml>`_

   


.. conda:package:: bioframe

   |downloads_bioframe| |docker_bioframe|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.0-0``,  ``0.0.12-0``

      

   
   :depends cytoolz: 
   :depends matplotlib-base: 
   :depends numpy: ``>=1.10``
   :depends pairix: 
   :depends pandas: ``>=1.3``
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends requests: 
   :depends six: 
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

      mamba install bioframe

   and update with::

      mamba update bioframe

  To create a new environment, run::

      mamba create --name myenvname bioframe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioframe:<tag>

   (see `bioframe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioframe| image:: https://img.shields.io/conda/dn/bioconda/bioframe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioframe
   :alt:   (downloads)
.. |docker_bioframe| image:: https://quay.io/repository/biocontainers/bioframe/status
   :target: https://quay.io/repository/biocontainers/bioframe
.. _`bioframe/tags`: https://quay.io/repository/biocontainers/bioframe?tab=tags


.. raw:: html

    <script>
        var package = "bioframe";
        var versions = ["0.5.0","0.4.1","0.4.0","0.3.3","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioframe/README.html