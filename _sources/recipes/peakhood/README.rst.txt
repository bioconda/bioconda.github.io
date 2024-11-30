:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakhood'
.. highlight: bash

peakhood
========

.. conda:recipe:: peakhood
   :replaces_section_title:
   :noindex:

   Individual site context extraction for CLIP\-Seq peak regions

   :homepage: https://github.com/BackofenLab/Peakhood
   :license: MIT
   :recipe: /`peakhood <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakhood>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakhood/meta.yaml>`_

   


.. conda:package:: peakhood

   |downloads_peakhood| |docker_peakhood|

   :versions:
      
      

      ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends bedtools: 
   :depends markdown: 
   :depends python: ``>=3.8``
   :depends samtools: 
   :depends seaborn: 
   :depends ucsc-twobitinfo: 
   :depends ucsc-twobittofa: 
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

      mamba install peakhood

   and update with::

      mamba update peakhood

  To create a new environment, run::

      mamba create --name myenvname peakhood

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peakhood:<tag>

   (see `peakhood/tags`_ for valid values for ``<tag>``)


.. |downloads_peakhood| image:: https://img.shields.io/conda/dn/bioconda/peakhood.svg?style=flat
   :target: https://anaconda.org/bioconda/peakhood
   :alt:   (downloads)
.. |docker_peakhood| image:: https://quay.io/repository/biocontainers/peakhood/status
   :target: https://quay.io/repository/biocontainers/peakhood
.. _`peakhood/tags`: https://quay.io/repository/biocontainers/peakhood?tab=tags


.. raw:: html

    <script>
        var package = "peakhood";
        var versions = ["0.3","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakhood/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakhood/README.html