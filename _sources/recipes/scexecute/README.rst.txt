:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scexecute'
.. highlight: bash

scexecute
=========

.. conda:recipe:: scexecute
   :replaces_section_title:
   :noindex:

   SCExecute generates cell\-barcode specific BAM files from aligned\, aggregate single\-cell sequencing data\, executing a user\-provided command on each barcode\-stratified BAM file.

   :homepage: https://horvathlab.github.io/NGS/SCExecute
   :license: MIT
   :recipe: /`scexecute <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scexecute>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scexecute/meta.yaml>`_

   


.. conda:package:: scexecute

   |downloads_scexecute| |docker_scexecute|

   :versions:
      
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends psutil: 
   :depends pysam: 
   :depends python: ``>=3.7``
   :depends samtools: 
   :depends wxpython: 
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

      mamba install scexecute

   and update with::

      mamba update scexecute

  To create a new environment, run::

      mamba create --name myenvname scexecute

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scexecute:<tag>

   (see `scexecute/tags`_ for valid values for ``<tag>``)


.. |downloads_scexecute| image:: https://img.shields.io/conda/dn/bioconda/scexecute.svg?style=flat
   :target: https://anaconda.org/bioconda/scexecute
   :alt:   (downloads)
.. |docker_scexecute| image:: https://quay.io/repository/biocontainers/scexecute/status
   :target: https://quay.io/repository/biocontainers/scexecute
.. _`scexecute/tags`: https://quay.io/repository/biocontainers/scexecute?tab=tags


.. raw:: html

    <script>
        var package = "scexecute";
        var versions = ["1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scexecute/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scexecute/README.html