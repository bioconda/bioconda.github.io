:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'halfdeep'
.. highlight: bash

halfdeep
========

.. conda:recipe:: halfdeep
   :replaces_section_title:
   :noindex:

   Automated detection of intervals covered at half depth by sequenced reads.

   :homepage: https://github.com/richard-burhans/HalfDeep
   :license: `BSD-3-Clause <https://github.com/richard-burhans/HalfDeep/blob/master/LICENSE>`_
   :recipe: /`halfdeep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halfdeep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/halfdeep/meta.yaml>`_

   


.. conda:package:: halfdeep

   |downloads_halfdeep| |docker_halfdeep|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bash: 
   :depends coreutils: 
   :depends gawk: 
   :depends genodsp: 
   :depends grep: 
   :depends gzip: 
   :depends minimap2: 
   :depends python: ``>=3.9``
   :depends r-base: ``>=4.3.*``
   :depends samtools: 
   :depends sed: 
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

      mamba install halfdeep

   and update with::

      mamba update halfdeep

  To create a new environment, run::

      mamba create --name myenvname halfdeep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/halfdeep:<tag>

   (see `halfdeep/tags`_ for valid values for ``<tag>``)


.. |downloads_halfdeep| image:: https://img.shields.io/conda/dn/bioconda/halfdeep.svg?style=flat
   :target: https://anaconda.org/bioconda/halfdeep
   :alt:   (downloads)
.. |docker_halfdeep| image:: https://quay.io/repository/biocontainers/halfdeep/status
   :target: https://quay.io/repository/biocontainers/halfdeep
.. _`halfdeep/tags`: https://quay.io/repository/biocontainers/halfdeep?tab=tags


.. raw:: html

    <script>
        var package = "halfdeep";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/halfdeep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/halfdeep/README.html