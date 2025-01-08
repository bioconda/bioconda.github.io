:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenome.mmulatta.ucsc.rhemac8'
.. highlight: bash

bioconductor-bsgenome.mmulatta.ucsc.rhemac8
===========================================

.. conda:recipe:: bioconductor-bsgenome.mmulatta.ucsc.rhemac8
   :replaces_section_title:
   :noindex:

   Full genome sequences for Macaca mulatta \(UCSC version rheMac8\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/BSgenome.Mmulatta.UCSC.rheMac8.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenome.mmulatta.ucsc.rhemac8 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac8>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac8/meta.yaml>`_

   Full genome sequences for Macaca mulatta \(Rhesus\) as provided by UCSC \(rheMac8\, Nov. 2015\) and stored in Biostrings objects.


.. conda:package:: bioconductor-bsgenome.mmulatta.ucsc.rhemac8

   |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac8| |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac8|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-13</code>,  <code>1.4.2-12</code>,  <code>1.4.2-11</code>,  <code>1.4.2-10</code>,  <code>1.4.2-9</code>,  <code>1.4.2-8</code>,  <code>1.4.2-7</code>,  <code>1.4.2-6</code>,  <code>1.4.2-5</code>,  </span></summary>
      

      ``1.4.2-13``,  ``1.4.2-12``,  ``1.4.2-11``,  ``1.4.2-10``,  ``1.4.2-9``,  ``1.4.2-8``,  ``1.4.2-7``,  ``1.4.2-6``,  ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
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

      mamba install bioconductor-bsgenome.mmulatta.ucsc.rhemac8

   and update with::

      mamba update bioconductor-bsgenome.mmulatta.ucsc.rhemac8

  To create a new environment, run::

      mamba create --name myenvname bioconductor-bsgenome.mmulatta.ucsc.rhemac8

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac8:<tag>

   (see `bioconductor-bsgenome.mmulatta.ucsc.rhemac8/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenome.mmulatta.ucsc.rhemac8| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac8.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenome.mmulatta.ucsc.rhemac8
   :alt:   (downloads)
.. |docker_bioconductor-bsgenome.mmulatta.ucsc.rhemac8| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac8/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac8
.. _`bioconductor-bsgenome.mmulatta.ucsc.rhemac8/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenome.mmulatta.ucsc.rhemac8?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenome.mmulatta.ucsc.rhemac8";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac8/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenome.mmulatta.ucsc.rhemac8/README.html