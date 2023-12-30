:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation450kprobe'
.. highlight: bash

bioconductor-illuminahumanmethylation450kprobe
==============================================

.. conda:recipe:: bioconductor-illuminahumanmethylation450kprobe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type IlluminaHumanMethylation450k

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/IlluminaHumanMethylation450kprobe.html
   :license: LGPL
   :recipe: /`bioconductor-illuminahumanmethylation450kprobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kprobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kprobe/meta.yaml>`_

   Probe sequences from Illumina \(ftp.illumina.com\) for hm450 probes


.. conda:package:: bioconductor-illuminahumanmethylation450kprobe

   |downloads_bioconductor-illuminahumanmethylation450kprobe| |docker_bioconductor-illuminahumanmethylation450kprobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.6-12</code>,  <code>2.0.6-11</code>,  <code>2.0.6-10</code>,  <code>2.0.6-9</code>,  <code>2.0.6-8</code>,  <code>2.0.6-7</code>,  <code>2.0.6-6</code>,  <code>2.0.6-5</code>,  <code>2.0.6-4</code>,  </span></summary>
      

      ``2.0.6-12``,  ``2.0.6-11``,  ``2.0.6-10``,  ``2.0.6-9``,  ``2.0.6-8``,  ``2.0.6-7``,  ``2.0.6-6``,  ``2.0.6-5``,  ``2.0.6-4``,  ``2.0.6-3``,  ``2.0.6-2``,  ``2.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-illuminahumanmethylation450kprobe

   and update with::

      mamba update bioconductor-illuminahumanmethylation450kprobe

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylation450kprobe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation450kprobe:<tag>

   (see `bioconductor-illuminahumanmethylation450kprobe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylation450kprobe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation450kprobe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation450kprobe
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation450kprobe| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe
.. _`bioconductor-illuminahumanmethylation450kprobe/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kprobe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation450kprobe";
        var versions = ["2.0.6","2.0.6","2.0.6","2.0.6","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kprobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kprobe/README.html