:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu95bcdf'
.. highlight: bash

bioconductor-hgu95bcdf
======================

.. conda:recipe:: bioconductor-hgu95bcdf
   :replaces_section_title:
   :noindex:

   hgu95bcdf

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/hgu95bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu95bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu95bcdf/meta.yaml>`_

   A package containing an environment representing the HG U95B.CDF file.


.. conda:package:: bioconductor-hgu95bcdf

   |downloads_bioconductor-hgu95bcdf| |docker_bioconductor-hgu95bcdf|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-13</code>,  <code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  <code>2.18.0-5</code>,  </span></summary>
      

      ``2.18.0-13``,  ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20241103``
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

      mamba install bioconductor-hgu95bcdf

   and update with::

      mamba update bioconductor-hgu95bcdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu95bcdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu95bcdf:<tag>

   (see `bioconductor-hgu95bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu95bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu95bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu95bcdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu95bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf
.. _`bioconductor-hgu95bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu95bcdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu95bcdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu95bcdf/README.html