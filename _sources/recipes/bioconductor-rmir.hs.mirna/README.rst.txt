:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmir.hs.mirna'
.. highlight: bash

bioconductor-rmir.hs.mirna
==========================

.. conda:recipe:: bioconductor-rmir.hs.mirna
   :replaces_section_title:
   :noindex:

   Various databases of microRNA Targets

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/RmiR.Hs.miRNA.html
   :license: The Artistic License, Version 2.0
   :recipe: /`bioconductor-rmir.hs.mirna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir.hs.mirna/meta.yaml>`_

   Various databases of microRNA Targets


.. conda:package:: bioconductor-rmir.hs.mirna

   |downloads_bioconductor-rmir.hs.mirna| |docker_bioconductor-rmir.hs.mirna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-15</code>,  <code>1.0.7-14</code>,  <code>1.0.7-13</code>,  <code>1.0.7-12</code>,  <code>1.0.7-11</code>,  <code>1.0.7-10</code>,  <code>1.0.7-9</code>,  <code>1.0.7-8</code>,  <code>1.0.7-7</code>,  </span></summary>
      

      ``1.0.7-15``,  ``1.0.7-14``,  ``1.0.7-13``,  ``1.0.7-12``,  ``1.0.7-11``,  ``1.0.7-10``,  ``1.0.7-9``,  ``1.0.7-8``,  ``1.0.7-7``,  ``1.0.7-6``,  ``1.0.7-5``,  ``1.0.7-3``,  ``1.0.7-2``,  ``1.0.7-0``

      
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

      mamba install bioconductor-rmir.hs.mirna

   and update with::

      mamba update bioconductor-rmir.hs.mirna

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rmir.hs.mirna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmir.hs.mirna:<tag>

   (see `bioconductor-rmir.hs.mirna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmir.hs.mirna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.hs.mirna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmir.hs.mirna
   :alt:   (downloads)
.. |docker_bioconductor-rmir.hs.mirna| image:: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna
.. _`bioconductor-rmir.hs.mirna/tags`: https://quay.io/repository/biocontainers/bioconductor-rmir.hs.mirna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rmir.hs.mirna";
        var versions = ["1.0.7","1.0.7","1.0.7","1.0.7","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir.hs.mirna/README.html