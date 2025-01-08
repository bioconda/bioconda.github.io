:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rgu34acdf'
.. highlight: bash

bioconductor-rgu34acdf
======================

.. conda:recipe:: bioconductor-rgu34acdf
   :replaces_section_title:
   :noindex:

   rgu34acdf

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/rgu34acdf.html
   :license: LGPL
   :recipe: /`bioconductor-rgu34acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rgu34acdf/meta.yaml>`_

   A package containing an environment representing the RG\_U34A.cdf file.


.. conda:package:: bioconductor-rgu34acdf

   |downloads_bioconductor-rgu34acdf| |docker_bioconductor-rgu34acdf|

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

      mamba install bioconductor-rgu34acdf

   and update with::

      mamba update bioconductor-rgu34acdf

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rgu34acdf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rgu34acdf:<tag>

   (see `bioconductor-rgu34acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rgu34acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rgu34acdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rgu34acdf
   :alt:   (downloads)
.. |docker_bioconductor-rgu34acdf| image:: https://quay.io/repository/biocontainers/bioconductor-rgu34acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rgu34acdf
.. _`bioconductor-rgu34acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-rgu34acdf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rgu34acdf";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rgu34acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rgu34acdf/README.html