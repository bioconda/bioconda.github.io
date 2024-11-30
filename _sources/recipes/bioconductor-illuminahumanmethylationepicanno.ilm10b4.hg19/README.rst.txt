:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19'
.. highlight: bash

bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19
==========================================================

.. conda:recipe:: bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19
   :replaces_section_title:
   :noindex:

   Annotation for Illumina\'s EPIC methylation arrays

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/IlluminaHumanMethylationEPICanno.ilm10b4.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/meta.yaml>`_

   An annotation package for Illumina\'s EPIC methylation arrays.


.. conda:package:: bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19

   |downloads_bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19| |docker_bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.0-15</code>,  <code>0.6.0-14</code>,  <code>0.6.0-13</code>,  <code>0.6.0-12</code>,  <code>0.6.0-11</code>,  <code>0.6.0-10</code>,  <code>0.6.0-9</code>,  <code>0.6.0-8</code>,  <code>0.6.0-7</code>,  </span></summary>
      

      ``0.6.0-15``,  ``0.6.0-14``,  ``0.6.0-13``,  ``0.6.0-12``,  ``0.6.0-11``,  ``0.6.0-10``,  ``0.6.0-9``,  ``0.6.0-8``,  ``0.6.0-7``,  ``0.6.0-6``,  ``0.6.0-5``,  ``0.6.0-3``,  ``0.6.0-2``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-minfi: ``>=1.48.0,<1.49.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19

   and update with::

      mamba update bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19:<tag>

   (see `bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19
.. _`bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19";
        var versions = ["0.6.0","0.6.0","0.6.0","0.6.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicanno.ilm10b4.hg19/README.html