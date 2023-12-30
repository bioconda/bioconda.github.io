:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgug4845a.db'
.. highlight: bash

bioconductor-hgug4845a.db
=========================

.. conda:recipe:: bioconductor-hgug4845a.db
   :replaces_section_title:
   :noindex:

   agilent AMADID 026652 annotation data \(chip hgug4845a\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/hgug4845a.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hgug4845a.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4845a.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgug4845a.db/meta.yaml>`_

   agilent AMADID 026652 annotation data \(chip hgug4845a\) assembled using data from public repositories


.. conda:package:: bioconductor-hgug4845a.db

   |downloads_bioconductor-hgug4845a.db| |docker_bioconductor-hgug4845a.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.3-12</code>,  <code>0.0.3-11</code>,  <code>0.0.3-10</code>,  <code>0.0.3-9</code>,  <code>0.0.3-8</code>,  <code>0.0.3-7</code>,  <code>0.0.3-6</code>,  <code>0.0.3-5</code>,  <code>0.0.3-4</code>,  </span></summary>
      

      ``0.0.3-12``,  ``0.0.3-11``,  ``0.0.3-10``,  ``0.0.3-9``,  ``0.0.3-8``,  ``0.0.3-7``,  ``0.0.3-6``,  ``0.0.3-5``,  ``0.0.3-4``,  ``0.0.3-3``,  ``0.0.3-2``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
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

      mamba install bioconductor-hgug4845a.db

   and update with::

      mamba update bioconductor-hgug4845a.db

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgug4845a.db

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgug4845a.db:<tag>

   (see `bioconductor-hgug4845a.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgug4845a.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgug4845a.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgug4845a.db
   :alt:   (downloads)
.. |docker_bioconductor-hgug4845a.db| image:: https://quay.io/repository/biocontainers/bioconductor-hgug4845a.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgug4845a.db
.. _`bioconductor-hgug4845a.db/tags`: https://quay.io/repository/biocontainers/bioconductor-hgug4845a.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgug4845a.db";
        var versions = ["0.0.3","0.0.3","0.0.3","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgug4845a.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgug4845a.db/README.html