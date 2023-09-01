:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pirs'
.. highlight: bash

pirs
====

.. conda:recipe:: pirs
   :replaces_section_title:
   :noindex:

   pIRS is a program for simulating Illumina PE reads.

   :homepage: https://github.com/galaxy001/pirs
   :license: GPL-2.0
   :recipe: /`pirs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pirs/meta.yaml>`_

   


.. conda:package:: pirs

   |downloads_pirs| |docker_pirs|

   :versions:
      
      

      ``2.0.2-6``,  ``2.0.2-5``,  ``2.0.2-4``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends bwa: 
   :depends coreutils: 
   :depends gnuplot: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: 
   :depends samtools: 
   :depends soapaligner: 
   :depends soapcoverage: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
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

      mamba install pirs

   and update with::

      mamba update pirs

  To create a new environment, run::

      mamba create --name myenvname pirs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pirs:<tag>

   (see `pirs/tags`_ for valid values for ``<tag>``)


.. |downloads_pirs| image:: https://img.shields.io/conda/dn/bioconda/pirs.svg?style=flat
   :target: https://anaconda.org/bioconda/pirs
   :alt:   (downloads)
.. |docker_pirs| image:: https://quay.io/repository/biocontainers/pirs/status
   :target: https://quay.io/repository/biocontainers/pirs
.. _`pirs/tags`: https://quay.io/repository/biocontainers/pirs?tab=tags


.. raw:: html

    <script>
        var package = "pirs";
        var versions = ["2.0.2","2.0.2","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pirs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pirs/README.html