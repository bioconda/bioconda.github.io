:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rearr'
.. highlight: bash

rearr
=====

.. conda:recipe:: rearr
   :replaces_section_title:
   :noindex:

   Chimeric alignment of CRISPR\-seq

   :homepage: https://github.com/ljw20180420/rearr
   :documentation: https://ljw20180420.github.io/rearr
   
   :license: MIT / MIT
   :recipe: /`rearr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rearr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rearr/meta.yaml>`_

   rearr is a package to demultiplex and align CRISPR\-seq data.



.. conda:package:: rearr

   |downloads_rearr| |docker_rearr|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends bowtie2: 
   :depends cutadapt: 
   :depends gawk: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends make: 
   :depends numpy: 
   :depends perl: 
   :depends python: 
   :depends samtools: 
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

      mamba install rearr

   and update with::

      mamba update rearr

  To create a new environment, run::

      mamba create --name myenvname rearr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rearr:<tag>

   (see `rearr/tags`_ for valid values for ``<tag>``)


.. |downloads_rearr| image:: https://img.shields.io/conda/dn/bioconda/rearr.svg?style=flat
   :target: https://anaconda.org/bioconda/rearr
   :alt:   (downloads)
.. |docker_rearr| image:: https://quay.io/repository/biocontainers/rearr/status
   :target: https://quay.io/repository/biocontainers/rearr
.. _`rearr/tags`: https://quay.io/repository/biocontainers/rearr?tab=tags


.. raw:: html

    <script>
        var package = "rearr";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rearr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rearr/README.html