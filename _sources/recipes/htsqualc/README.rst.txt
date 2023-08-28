:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htsqualc'
.. highlight: bash

htsqualc
========

.. conda:recipe:: htsqualc
   :replaces_section_title:
   :noindex:

   HTSQualC is an automated quality control analysis tool for a single and paired\-end high\-throughput sequencing data \(HTS\)

   :homepage: https://reneshbedre.github.io/blog/htseqqc.html
   :license: MIT
   :recipe: /`htsqualc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsqualc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htsqualc/meta.yaml>`_

   


.. conda:package:: htsqualc

   |downloads_htsqualc| |docker_htsqualc|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pysam: 
   :depends python: 
   :depends termcolor: 
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

      mamba install htsqualc

   and update with::

      mamba update htsqualc

  To create a new environment, run::

      mamba create --name myenvname htsqualc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/htsqualc:<tag>

   (see `htsqualc/tags`_ for valid values for ``<tag>``)


.. |downloads_htsqualc| image:: https://img.shields.io/conda/dn/bioconda/htsqualc.svg?style=flat
   :target: https://anaconda.org/bioconda/htsqualc
   :alt:   (downloads)
.. |docker_htsqualc| image:: https://quay.io/repository/biocontainers/htsqualc/status
   :target: https://quay.io/repository/biocontainers/htsqualc
.. _`htsqualc/tags`: https://quay.io/repository/biocontainers/htsqualc?tab=tags


.. raw:: html

    <script>
        var package = "htsqualc";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htsqualc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htsqualc/README.html