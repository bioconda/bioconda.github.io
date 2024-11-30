:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation27kmanifest'
.. highlight: bash

bioconductor-illuminahumanmethylation27kmanifest
================================================

.. conda:recipe:: bioconductor-illuminahumanmethylation27kmanifest
   :replaces_section_title:
   :noindex:

   Annotation for Illumina\'s 27k methylation arrays

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/IlluminaHumanMethylation27kmanifest.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylation27kmanifest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27kmanifest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27kmanifest/meta.yaml>`_

   Manifest for Illumina\'s 27k array data


.. conda:package:: bioconductor-illuminahumanmethylation27kmanifest

   |downloads_bioconductor-illuminahumanmethylation27kmanifest| |docker_bioconductor-illuminahumanmethylation27kmanifest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-12</code>,  <code>0.4.0-11</code>,  <code>0.4.0-10</code>,  <code>0.4.0-9</code>,  <code>0.4.0-8</code>,  <code>0.4.0-7</code>,  <code>0.4.0-6</code>,  <code>0.4.0-5</code>,  <code>0.4.0-4</code>,  </span></summary>
      

      ``0.4.0-12``,  ``0.4.0-11``,  ``0.4.0-10``,  ``0.4.0-9``,  ``0.4.0-8``,  ``0.4.0-7``,  ``0.4.0-6``,  ``0.4.0-5``,  ``0.4.0-4``,  ``0.4.0-3``,  ``0.4.0-2``,  ``0.4.0-0``

      
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

      mamba install bioconductor-illuminahumanmethylation27kmanifest

   and update with::

      mamba update bioconductor-illuminahumanmethylation27kmanifest

  To create a new environment, run::

      mamba create --name myenvname bioconductor-illuminahumanmethylation27kmanifest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation27kmanifest:<tag>

   (see `bioconductor-illuminahumanmethylation27kmanifest/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-illuminahumanmethylation27kmanifest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation27kmanifest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation27kmanifest
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation27kmanifest| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27kmanifest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27kmanifest
.. _`bioconductor-illuminahumanmethylation27kmanifest/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27kmanifest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation27kmanifest";
        var versions = ["0.4.0","0.4.0","0.4.0","0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27kmanifest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27kmanifest/README.html