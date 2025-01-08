:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylationepicmanifest'
.. highlight: bash

bioconductor-illuminahumanmethylationepicmanifest
=================================================

.. conda:recipe:: bioconductor-illuminahumanmethylationepicmanifest
   :replaces_section_title:
   :noindex:

   Manifest for Illumina\'s EPIC methylation arrays

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/IlluminaHumanMethylationEPICmanifest.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylationepicmanifest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicmanifest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylationepicmanifest/meta.yaml>`_

   A manifest package for Illumina\'s EPIC methylation arrays.


.. conda:package:: bioconductor-illuminahumanmethylationepicmanifest

   |downloads_bioconductor-illuminahumanmethylationepicmanifest| |docker_bioconductor-illuminahumanmethylationepicmanifest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-17</code>,  <code>0.3.0-16</code>,  <code>0.3.0-15</code>,  <code>0.3.0-14</code>,  <code>0.3.0-13</code>,  <code>0.3.0-12</code>,  <code>0.3.0-11</code>,  <code>0.3.0-10</code>,  <code>0.3.0-9</code>,  </span></summary>
      

      ``0.3.0-17``,  ``0.3.0-16``,  ``0.3.0-15``,  ``0.3.0-14``,  ``0.3.0-13``,  ``0.3.0-12``,  ``0.3.0-11``,  ``0.3.0-10``,  ``0.3.0-9``,  ``0.3.0-7``,  ``0.3.0-6``,  ``0.3.0-5``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-0``

      
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

      mamba install bioconductor-illuminahumanmethylationepicmanifest

   and update with::

      mamba update bioconductor-illuminahumanmethylationepicmanifest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylationepicmanifest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylationepicmanifest:<tag>

   (see `bioconductor-illuminahumanmethylationepicmanifest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylationepicmanifest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylationepicmanifest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylationepicmanifest
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylationepicmanifest| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicmanifest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicmanifest
.. _`bioconductor-illuminahumanmethylationepicmanifest/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylationepicmanifest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylationepicmanifest";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicmanifest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylationepicmanifest/README.html