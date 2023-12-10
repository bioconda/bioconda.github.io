:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hu6800subdcdf'
.. highlight: bash

bioconductor-hu6800subdcdf
==========================

.. conda:recipe:: bioconductor-hu6800subdcdf
   :replaces_section_title:
   :noindex:

   hu6800subdcdf

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/hu6800subdcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hu6800subdcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800subdcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hu6800subdcdf/meta.yaml>`_

   A package containing an environment representing the Hu6800subD.CDF file.


.. conda:package:: bioconductor-hu6800subdcdf

   |downloads_bioconductor-hu6800subdcdf| |docker_bioconductor-hu6800subdcdf|

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

      mamba install bioconductor-hu6800subdcdf

   and update with::

      mamba update bioconductor-hu6800subdcdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hu6800subdcdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hu6800subdcdf:<tag>

   (see `bioconductor-hu6800subdcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hu6800subdcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hu6800subdcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hu6800subdcdf
   :alt:   (downloads)
.. |docker_bioconductor-hu6800subdcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hu6800subdcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hu6800subdcdf
.. _`bioconductor-hu6800subdcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hu6800subdcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hu6800subdcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hu6800subdcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hu6800subdcdf/README.html