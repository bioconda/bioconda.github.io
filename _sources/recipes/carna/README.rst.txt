:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'carna'
.. highlight: bash

carna
=====

.. conda:recipe:: carna
   :replaces_section_title:
   :noindex:

   Constraint\-based Alignment of RNA Ensembles

   :homepage: https://www.bioinf.uni-leipzig.de/~will/Software/CARNA/
   :license: GPL
   :recipe: /`carna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/carna/meta.yaml>`_
   :links: biotools: :biotools:`carna`

   


.. conda:package:: carna

   |downloads_carna| |docker_carna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.3-2</code>,  <code>1.3.3-1</code>,  <code>1.3.2-2</code>,  <code>1.3.2-1</code>,  <code>1.3.2-0</code>,  <code>1.3.1-5</code>,  <code>1.3.1-4</code>,  <code>1.3.1-3</code>,  <code>1.3.1-2</code>,  </span></summary>
      

      ``1.3.3-2``,  ``1.3.3-1``,  ``1.3.2-2``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-3``,  ``1.3.1-2``,  ``1.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends gecode: ``5.0.0.*``
   :depends libgcc-ng: ``>=4.9``
   :depends locarna: ``1.9.1.*``
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

      mamba install carna

   and update with::

      mamba update carna

  To create a new environment, run::

      mamba create --name myenvname carna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/carna:<tag>

   (see `carna/tags`_ for valid values for ``<tag>``)


.. |downloads_carna| image:: https://img.shields.io/conda/dn/bioconda/carna.svg?style=flat
   :target: https://anaconda.org/bioconda/carna
   :alt:   (downloads)
.. |docker_carna| image:: https://quay.io/repository/biocontainers/carna/status
   :target: https://quay.io/repository/biocontainers/carna
.. _`carna/tags`: https://quay.io/repository/biocontainers/carna?tab=tags


.. raw:: html

    <script>
        var package = "carna";
        var versions = ["1.3.3","1.3.3","1.3.2","1.3.2","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/carna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/carna/README.html