:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19'
.. highlight: bash

bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19
=========================================================

.. conda:recipe:: bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19
   :replaces_section_title:
   :noindex:

   Annotation for Illumina\'s 450k methylation arrays

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/IlluminaHumanMethylation450kanno.ilmn12.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/meta.yaml>`_

   Manifests and annotation for Illumina\'s 450k array data.


.. conda:package:: bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19

   |downloads_bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19| |docker_bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.1-3</code>,  <code>0.6.1-2</code>,  <code>0.6.1-1</code>,  <code>0.6.1-0</code>,  <code>0.6.0-14</code>,  <code>0.6.0-13</code>,  <code>0.6.0-12</code>,  <code>0.6.0-11</code>,  <code>0.6.0-10</code>,  </span></summary>
      

      ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-14``,  ``0.6.0-13``,  ``0.6.0-12``,  ``0.6.0-11``,  ``0.6.0-10``,  ``0.6.0-9``,  ``0.6.0-8``,  ``0.6.0-7``,  ``0.6.0-5``,  ``0.6.0-4``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-minfi: ``>=1.52.0,<1.53.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19

   and update with::

      mamba update bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19:<tag>

   (see `bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19
.. _`bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19/README.html