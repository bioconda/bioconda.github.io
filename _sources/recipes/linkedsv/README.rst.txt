:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkedsv'
.. highlight: bash

linkedsv
========

.. conda:recipe:: linkedsv
   :replaces_section_title:
   :noindex:

   A novel structural variant caller for 10X Genomics \(linked\-read\) sequencing data

   :homepage: https://github.com/WGLab/LinkedSV
   :license: MIT / MIT
   :recipe: /`linkedsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkedsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkedsv/meta.yaml>`_

   


.. conda:package:: linkedsv

   |downloads_linkedsv| |docker_linkedsv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bedtools: 
   :depends fermikit: 
   :depends htslib: ``>=1.21,<1.22.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends numpy: 
   :depends pandas: 
   :depends perl: 
   :depends pigz: 
   :depends psutil: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
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

      mamba install linkedsv

   and update with::

      mamba update linkedsv

  To create a new environment, run::

      mamba create --name myenvname linkedsv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/linkedsv:<tag>

   (see `linkedsv/tags`_ for valid values for ``<tag>``)


.. |downloads_linkedsv| image:: https://img.shields.io/conda/dn/bioconda/linkedsv.svg?style=flat
   :target: https://anaconda.org/bioconda/linkedsv
   :alt:   (downloads)
.. |docker_linkedsv| image:: https://quay.io/repository/biocontainers/linkedsv/status
   :target: https://quay.io/repository/biocontainers/linkedsv
.. _`linkedsv/tags`: https://quay.io/repository/biocontainers/linkedsv?tab=tags


.. raw:: html

    <script>
        var package = "linkedsv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkedsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkedsv/README.html