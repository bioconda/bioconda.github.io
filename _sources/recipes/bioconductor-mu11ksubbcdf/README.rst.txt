:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mu11ksubbcdf'
.. highlight: bash

bioconductor-mu11ksubbcdf
=========================

.. conda:recipe:: bioconductor-mu11ksubbcdf
   :replaces_section_title:
   :noindex:

   mu11ksubbcdf

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/mu11ksubbcdf.html
   :license: LGPL
   :recipe: /`bioconductor-mu11ksubbcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu11ksubbcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mu11ksubbcdf/meta.yaml>`_

   A package containing an environment representing the Mu11KsubB.CDF file.


.. conda:package:: bioconductor-mu11ksubbcdf

   |downloads_bioconductor-mu11ksubbcdf| |docker_bioconductor-mu11ksubbcdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  <code>2.18.0-4</code>,  </span></summary>
      

      ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
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

      mamba install bioconductor-mu11ksubbcdf

   and update with::

      mamba update bioconductor-mu11ksubbcdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mu11ksubbcdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mu11ksubbcdf:<tag>

   (see `bioconductor-mu11ksubbcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mu11ksubbcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mu11ksubbcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mu11ksubbcdf
   :alt:   (downloads)
.. |docker_bioconductor-mu11ksubbcdf| image:: https://quay.io/repository/biocontainers/bioconductor-mu11ksubbcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mu11ksubbcdf
.. _`bioconductor-mu11ksubbcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mu11ksubbcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mu11ksubbcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mu11ksubbcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mu11ksubbcdf/README.html