:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lambda'
.. highlight: bash

lambda
======

.. conda:recipe:: lambda
   :replaces_section_title:
   :noindex:

   Lambda is a local aligner optimized for many query sequences and searches in protein space

   :homepage: http://seqan.github.io/lambda/
   :license: AGPLv3
   :recipe: /`lambda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lambda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lambda/meta.yaml>`_

   


.. conda:package:: lambda

   |downloads_lambda| |docker_lambda|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-1</code>,  <code>3.1.0-0</code>,  <code>3.0.0-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-6</code>,  <code>2.0.0-5</code>,  <code>2.0.0-4</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  </span></summary>
      

      ``3.1.0-1``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.1-0``,  ``2.0.0-6``,  ``2.0.0-5``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.3-6``,  ``1.0.3-5``,  ``1.0.3-4``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install lambda

   and update with::

      mamba update lambda

  To create a new environment, run::

      mamba create --name myenvname lambda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lambda:<tag>

   (see `lambda/tags`_ for valid values for ``<tag>``)


.. |downloads_lambda| image:: https://img.shields.io/conda/dn/bioconda/lambda.svg?style=flat
   :target: https://anaconda.org/bioconda/lambda
   :alt:   (downloads)
.. |docker_lambda| image:: https://quay.io/repository/biocontainers/lambda/status
   :target: https://quay.io/repository/biocontainers/lambda
.. _`lambda/tags`: https://quay.io/repository/biocontainers/lambda?tab=tags


.. raw:: html

    <script>
        var package = "lambda";
        var versions = ["3.1.0","3.1.0","3.0.0","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lambda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lambda/README.html