:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsinfer'
.. highlight: bash

htsinfer
========

.. conda:recipe:: htsinfer
   :replaces_section_title:
   :noindex:

   HTSinfer infers metadata from Illumina high throughput sequencing \(HTS\) data

   :homepage: https://github.com/zavolanlab/htsinfer
   :license: APACHE / Apache-2.0
   :recipe: /`htsinfer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsinfer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsinfer/meta.yaml>`_

   


.. conda:package:: htsinfer

   |downloads_htsinfer| |docker_htsinfer|

   :versions:
      
      

      ``1.0.0_rc.1-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-0``,  ``0.9.0-0``

      

   
   :depends biopython: ``>=1.78``
   :depends cutadapt: ``>=3.5,<=4.2``
   :depends kallisto: ``>=0.46.1,<=0.48.0``
   :depends numpy: ``>=1.22,<1.25``
   :depends pandas: ``>=1.3.5,<1.4.0``
   :depends pyahocorasick: ``>=1.4.0``
   :depends pydantic: ``>=2,<3``
   :depends pysam: ``>=0.16.0``
   :depends python: ``>=3.8,<=3.10``
   :depends star: ``>=2.7.6``
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

      mamba install htsinfer

   and update with::

      mamba update htsinfer

  To create a new environment, run::

      mamba create --name myenvname htsinfer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/htsinfer:<tag>

   (see `htsinfer/tags`_ for valid values for ``<tag>``)


.. |downloads_htsinfer| image:: https://img.shields.io/conda/dn/bioconda/htsinfer.svg?style=flat
   :target: https://anaconda.org/bioconda/htsinfer
   :alt:   (downloads)
.. |docker_htsinfer| image:: https://quay.io/repository/biocontainers/htsinfer/status
   :target: https://quay.io/repository/biocontainers/htsinfer
.. _`htsinfer/tags`: https://quay.io/repository/biocontainers/htsinfer?tab=tags


.. raw:: html

    <script>
        var package = "htsinfer";
        var versions = ["1.0.0_rc.1","0.11.0","0.11.0","0.10.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsinfer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsinfer/README.html