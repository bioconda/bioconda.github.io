:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msmb'
.. highlight: bash

bioconductor-msmb
=================

.. conda:recipe:: bioconductor-msmb
   :replaces_section_title:
   :noindex:

   Data sets for the book \'Modern Statistics for Biology\'

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/MSMB.html
   :license: LGPL
   :recipe: /`bioconductor-msmb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msmb/meta.yaml>`_

   Data sets for the book \'Modern Statistics for Modern Biology\'\, S.P. Holmes and W. Huber.


.. conda:package:: bioconductor-msmb

   |downloads_bioconductor-msmb| |docker_bioconductor-msmb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.15.2-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.2-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-tibble: 
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

      mamba install bioconductor-msmb

   and update with::

      mamba update bioconductor-msmb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-msmb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msmb:<tag>

   (see `bioconductor-msmb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msmb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msmb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msmb
   :alt:   (downloads)
.. |docker_bioconductor-msmb| image:: https://quay.io/repository/biocontainers/bioconductor-msmb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msmb
.. _`bioconductor-msmb/tags`: https://quay.io/repository/biocontainers/bioconductor-msmb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msmb";
        var versions = ["1.20.0","1.18.0","1.15.2","1.12.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msmb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msmb/README.html