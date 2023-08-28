:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.rnorvegicus.ucsc.rn5'
.. highlight: bash

bioconductor-bsgenome.rnorvegicus.ucsc.rn5
==========================================

.. conda:recipe:: bioconductor-bsgenome.rnorvegicus.ucsc.rn5
   :replaces_section_title:
   :noindex:

   Full genome sequences for Rattus norvegicus \(UCSC version rn5\)

   :homepage: https://bioconductor.org/packages/3.17/data/annotation/html/BSgenome.Rnorvegicus.UCSC.rn5.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.rnorvegicus.ucsc.rn5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn5/meta.yaml>`_

   Full genome sequences for Rattus norvegicus \(Rat\) as provided by UCSC \(rn5\, Mar. 2012\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.rnorvegicus.ucsc.rn5

   |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn5| |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn5|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-11</code>,  <code>1.4.0-10</code>,  <code>1.4.0-9</code>,  <code>1.4.0-8</code>,  <code>1.4.0-7</code>,  <code>1.4.0-6</code>,  <code>1.4.0-5</code>,  <code>1.4.0-4</code>,  <code>1.4.0-3</code>,  </span></summary>
      

      ``1.4.0-11``,  ``1.4.0-10``,  ``1.4.0-9``,  ``1.4.0-8``,  ``1.4.0-7``,  ``1.4.0-6``,  ``1.4.0-5``,  ``1.4.0-4``,  ``1.4.0-3``,  ``1.4.0-2``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-bsgenome.rnorvegicus.ucsc.rn5

   and update with::

      mamba update bioconductor-bsgenome.rnorvegicus.ucsc.rn5

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.rnorvegicus.ucsc.rn5

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn5:<tag>

   (see `bioconductor-bsgenome.rnorvegicus.ucsc.rn5/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.rnorvegicus.ucsc.rn5| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn5.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.rnorvegicus.ucsc.rn5
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.rnorvegicus.ucsc.rn5| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn5/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn5
.. _`bioconductor-bsgenome.rnorvegicus.ucsc.rn5/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.rnorvegicus.ucsc.rn5?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.rnorvegicus.ucsc.rn5";
        var versions = ["1.4.0","1.4.0","1.4.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn5/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.rnorvegicus.ucsc.rn5/README.html