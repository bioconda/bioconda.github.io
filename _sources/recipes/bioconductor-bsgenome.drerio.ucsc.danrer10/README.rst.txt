:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.drerio.ucsc.danrer10'
.. highlight: bash

bioconductor-bsgenome.drerio.ucsc.danrer10
==========================================

.. conda:recipe:: bioconductor-bsgenome.drerio.ucsc.danrer10
   :replaces_section_title:
   :noindex:

   Full genome sequences for Danio rerio \(UCSC version danRer10\)

   :homepage: https://bioconductor.org/packages/3.18/data/annotation/html/BSgenome.Drerio.UCSC.danRer10.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.drerio.ucsc.danrer10 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.drerio.ucsc.danrer10>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.drerio.ucsc.danrer10/meta.yaml>`_

   Full genome sequences for Danio rerio \(Zebrafish\) as provided by UCSC \(danRer10\, Sep. 2014\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.drerio.ucsc.danrer10

   |downloads_bioconductor-bsgenome.drerio.ucsc.danrer10| |docker_bioconductor-bsgenome.drerio.ucsc.danrer10|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-12</code>,  <code>1.4.2-11</code>,  <code>1.4.2-10</code>,  <code>1.4.2-9</code>,  <code>1.4.2-8</code>,  <code>1.4.2-7</code>,  <code>1.4.2-6</code>,  <code>1.4.2-5</code>,  <code>1.4.2-4</code>,  </span></summary>
      

      ``1.4.2-12``,  ``1.4.2-11``,  ``1.4.2-10``,  ``1.4.2-9``,  ``1.4.2-8``,  ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.70.0,<1.71.0``
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

      mamba install bioconductor-bsgenome.drerio.ucsc.danrer10

   and update with::

      mamba update bioconductor-bsgenome.drerio.ucsc.danrer10

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.drerio.ucsc.danrer10

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer10:<tag>

   (see `bioconductor-bsgenome.drerio.ucsc.danrer10/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.drerio.ucsc.danrer10| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.drerio.ucsc.danrer10.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.drerio.ucsc.danrer10
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.drerio.ucsc.danrer10| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer10/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer10
.. _`bioconductor-bsgenome.drerio.ucsc.danrer10/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.drerio.ucsc.danrer10?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.drerio.ucsc.danrer10";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.drerio.ucsc.danrer10/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.drerio.ucsc.danrer10/README.html