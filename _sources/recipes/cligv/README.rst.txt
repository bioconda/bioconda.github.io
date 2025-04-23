:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cligv'
.. highlight: bash

cligv
=====

.. conda:recipe:: cligv
   :replaces_section_title:
   :noindex:

   command line Interactive Genome Viewer

   :homepage: https://github.com/jonasfreudig/cligv
   :license: MIT / MIT
   :recipe: /`cligv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cligv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cligv/meta.yaml>`_

   clIGV \(command line Interactive Genome Viewer\) is a fast\, interactive 
   genome browser for the terminal. It allows visualization of genomic 
   sequences\, variants from VCF files\, and alignments from BAM files\, 
   all with a simple interface directly in your terminal.



.. conda:package:: cligv

   |downloads_cligv| |docker_cligv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends pysam: ``>=0.19.0``
   :depends python: ``>=3.7``
   :depends rich: ``>=10.0.0``
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

      mamba install cligv

   and update with::

      mamba update cligv

  To create a new environment, run::

      mamba create --name myenvname cligv

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cligv:<tag>

   (see `cligv/tags`_ for valid values for ``<tag>``)


.. |downloads_cligv| image:: https://img.shields.io/conda/dn/bioconda/cligv.svg?style=flat
   :target: https://anaconda.org/bioconda/cligv
   :alt:   (downloads)
.. |docker_cligv| image:: https://quay.io/repository/biocontainers/cligv/status
   :target: https://quay.io/repository/biocontainers/cligv
.. _`cligv/tags`: https://quay.io/repository/biocontainers/cligv?tab=tags


.. raw:: html

    <script>
        var package = "cligv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cligv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cligv/README.html