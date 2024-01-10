:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-fcs-gx'
.. highlight: bash

ncbi-fcs-gx
===========

.. conda:recipe:: ncbi-fcs-gx
   :replaces_section_title:
   :noindex:

   The NCBI Foreign Contamination Screen. Genomic cross\-species aligner\, for contamination detection.

   :homepage: https://github.com/ncbi/fcs
   :license: `NCBI-PD <https://github.com/ncbi/fcs/blob/main/LICENSE.txt>`_
   :recipe: /`ncbi-fcs-gx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-fcs-gx/meta.yaml>`_

   


.. conda:package:: ncbi-fcs-gx

   |downloads_ncbi-fcs-gx| |docker_ncbi-fcs-gx|

   :versions:
      
      

      ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends aria2: ``1.36.0.*``
   :depends grep: ``>=3.4``
   :depends gzip: ``>=1.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends pv: ``>=1.4.6``
   :depends python: ``>=3.9``
   :depends rclone: ``1.61.1.*``
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

      mamba install ncbi-fcs-gx

   and update with::

      mamba update ncbi-fcs-gx

  To create a new environment, run::

      mamba create --name myenvname ncbi-fcs-gx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-fcs-gx:<tag>

   (see `ncbi-fcs-gx/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-fcs-gx| image:: https://img.shields.io/conda/dn/bioconda/ncbi-fcs-gx.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-fcs-gx
   :alt:   (downloads)
.. |docker_ncbi-fcs-gx| image:: https://quay.io/repository/biocontainers/ncbi-fcs-gx/status
   :target: https://quay.io/repository/biocontainers/ncbi-fcs-gx
.. _`ncbi-fcs-gx/tags`: https://quay.io/repository/biocontainers/ncbi-fcs-gx?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-fcs-gx";
        var versions = ["0.5.0","0.5.0","0.5.0","0.5.0","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-fcs-gx/README.html