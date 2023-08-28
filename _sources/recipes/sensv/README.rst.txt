:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sensv'
.. highlight: bash

sensv
=====

.. conda:recipe:: sensv
   :replaces_section_title:
   :noindex:

   SENSV

   :homepage: https://github.com/HKU-BAL/SENSV
   :license: AGPLv3
   :recipe: /`sensv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sensv/meta.yaml>`_

   


.. conda:package:: sensv

   |downloads_sensv| |docker_sensv|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``v1.0.1-0``

      

   
   :depends grabix: ``0.1.8.*``
   :depends htslib: ``1.10.2.*``
   :depends intervaltree: ``3.0.2.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends minimap2: ``2.17.*``
   :depends pandas: ``1.0.1.*``
   :depends pigz: ``2.3.4.*``
   :depends pyfaidx: ``0.5.8.*``
   :depends pypy3.6: ``7.3.0.*``
   :depends pysam: ``0.15.3.*``
   :depends samtools: 
   :depends scipy: ``1.4.1.*``
   :depends survivor: ``1.0.6.*``
   :depends vcflib: ``1.0.0.*``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install sensv

   and update with::

      mamba update sensv

  To create a new environment, run::

      mamba create --name myenvname sensv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sensv:<tag>

   (see `sensv/tags`_ for valid values for ``<tag>``)


.. |downloads_sensv| image:: https://img.shields.io/conda/dn/bioconda/sensv.svg?style=flat
   :target: https://anaconda.org/bioconda/sensv
   :alt:   (downloads)
.. |docker_sensv| image:: https://quay.io/repository/biocontainers/sensv/status
   :target: https://quay.io/repository/biocontainers/sensv
.. _`sensv/tags`: https://quay.io/repository/biocontainers/sensv?tab=tags


.. raw:: html

    <script>
        var package = "sensv";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sensv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sensv/README.html