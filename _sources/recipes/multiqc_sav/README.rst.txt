:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc_sav'
.. highlight: bash

multiqc_sav
===========

.. conda:recipe:: multiqc_sav
   :replaces_section_title:
   :noindex:

   MultiQC plugin to visualize Illumina SAV plots

   :homepage: http://multiqc.info
   :license: GPL3
   :recipe: /`multiqc_sav <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc_sav/meta.yaml>`_

   


.. conda:package:: multiqc_sav

   |downloads_multiqc_sav| |docker_multiqc_sav|

   :versions:
      
      

      ``0.2.0-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends illumina-interop: ``>=1.7.0,<2``
   :depends multiqc: ``>=1.25``
   :depends numpy: 
   :depends pandas: 
   :depends python: 
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

      mamba install multiqc_sav

   and update with::

      mamba update multiqc_sav

  To create a new environment, run::

      mamba create --name myenvname multiqc_sav

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multiqc_sav:<tag>

   (see `multiqc_sav/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc_sav| image:: https://img.shields.io/conda/dn/bioconda/multiqc_sav.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc_sav
   :alt:   (downloads)
.. |docker_multiqc_sav| image:: https://quay.io/repository/biocontainers/multiqc_sav/status
   :target: https://quay.io/repository/biocontainers/multiqc_sav
.. _`multiqc_sav/tags`: https://quay.io/repository/biocontainers/multiqc_sav?tab=tags


.. raw:: html

    <script>
        var package = "multiqc_sav";
        var versions = ["0.2.0","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc_sav/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc_sav/README.html