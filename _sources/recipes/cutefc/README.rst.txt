:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutefc'
.. highlight: bash

cutefc
======

.. conda:recipe:: cutefc
   :replaces_section_title:
   :noindex:

   Regenotyping structural variants through an accurate and efficient force\-calling method

   :homepage: https://github.com/Meltpinkg/cuteFC
   :license: MIT
   :recipe: /`cutefc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutefc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutefc/meta.yaml>`_

   


.. conda:package:: cutefc

   |downloads_cutefc| |docker_cutefc|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends cigar: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends pyvcf3: 
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install cutefc

   and update with::

      mamba update cutefc

  To create a new environment, run::

      mamba create --name myenvname cutefc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cutefc:<tag>

   (see `cutefc/tags`_ for valid values for ``<tag>``)


.. |downloads_cutefc| image:: https://img.shields.io/conda/dn/bioconda/cutefc.svg?style=flat
   :target: https://anaconda.org/bioconda/cutefc
   :alt:   (downloads)
.. |docker_cutefc| image:: https://quay.io/repository/biocontainers/cutefc/status
   :target: https://quay.io/repository/biocontainers/cutefc
.. _`cutefc/tags`: https://quay.io/repository/biocontainers/cutefc?tab=tags


.. raw:: html

    <script>
        var package = "cutefc";
        var versions = ["1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutefc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutefc/README.html