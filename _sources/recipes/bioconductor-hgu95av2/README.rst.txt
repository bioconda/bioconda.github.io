:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95av2'
.. highlight: bash

bioconductor-hgu95av2
=====================

.. conda:recipe:: bioconductor-hgu95av2
   :replaces_section_title:
   :noindex:

   Affymetrix Human Genome U95 Set Annotation Data \(hgu95av2\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/hgu95av2.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-hgu95av2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95av2/meta.yaml>`_

   Affymetrix Human Genome U95 Set annotation data \(hgu95av2\) assembled using data from public data repositories


.. conda:package:: bioconductor-hgu95av2

   |downloads_bioconductor-hgu95av2| |docker_bioconductor-hgu95av2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-12</code>,  <code>2.2.0-11</code>,  <code>2.2.0-10</code>,  <code>2.2.0-9</code>,  <code>2.2.0-8</code>,  <code>2.2.0-7</code>,  <code>2.2.0-6</code>,  <code>2.2.0-5</code>,  <code>2.2.0-4</code>,  </span></summary>
      

      ``2.2.0-12``,  ``2.2.0-11``,  ``2.2.0-10``,  ``2.2.0-9``,  ``2.2.0-8``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
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

      mamba install bioconductor-hgu95av2

   and update with::

      mamba update bioconductor-hgu95av2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu95av2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95av2:<tag>

   (see `bioconductor-hgu95av2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95av2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95av2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95av2
   :alt:   (downloads)
.. |docker_bioconductor-hgu95av2| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95av2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95av2
.. _`bioconductor-hgu95av2/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95av2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95av2";
        var versions = ["2.2.0","2.2.0","2.2.0","2.2.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95av2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95av2/README.html