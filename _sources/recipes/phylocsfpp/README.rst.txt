:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylocsfpp'
.. highlight: bash

phylocsfpp
==========

.. conda:recipe:: phylocsfpp
   :replaces_section_title:
   :noindex:

   A fast and user\-friendly implementation of PhyloCSF with annotation tools.

   :homepage: https://github.com/cpockrandt/PhyloCSFpp
   :license: AGPLv3
   :recipe: /`phylocsfpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylocsfpp/meta.yaml>`_

   


.. conda:package:: phylocsfpp

   |downloads_phylocsfpp| |docker_phylocsfpp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0_9643238d-6</code>,  <code>1.2.0_9643238d-5</code>,  <code>1.2.0_9643238d-4</code>,  <code>1.2.0_9643238d-3</code>,  <code>1.2.0_9643238d-2</code>,  <code>1.2.0_9643238d-1</code>,  <code>1.2.0_9643238d-0</code>,  <code>1.1.1_4bb3c87a-0</code>,  <code>1.1.0_519b603e-0</code>,  </span></summary>
      

      ``1.2.0_9643238d-6``,  ``1.2.0_9643238d-5``,  ``1.2.0_9643238d-4``,  ``1.2.0_9643238d-3``,  ``1.2.0_9643238d-2``,  ``1.2.0_9643238d-1``,  ``1.2.0_9643238d-0``,  ``1.1.1_4bb3c87a-0``,  ``1.1.0_519b603e-0``,  ``1.0.0_f5ab2559-1``,  ``1.0.0_f5ab2559-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libbigwig: ``>=0.4.7,<0.5.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install phylocsfpp

   and update with::

      mamba update phylocsfpp

  To create a new environment, run::

      mamba create --name myenvname phylocsfpp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylocsfpp:<tag>

   (see `phylocsfpp/tags`_ for valid values for ``<tag>``)


.. |downloads_phylocsfpp| image:: https://img.shields.io/conda/dn/bioconda/phylocsfpp.svg?style=flat
   :target: https://anaconda.org/bioconda/phylocsfpp
   :alt:   (downloads)
.. |docker_phylocsfpp| image:: https://quay.io/repository/biocontainers/phylocsfpp/status
   :target: https://quay.io/repository/biocontainers/phylocsfpp
.. _`phylocsfpp/tags`: https://quay.io/repository/biocontainers/phylocsfpp?tab=tags


.. raw:: html

    <script>
        var package = "phylocsfpp";
        var versions = ["1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d","1.2.0_9643238d"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylocsfpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylocsfpp/README.html