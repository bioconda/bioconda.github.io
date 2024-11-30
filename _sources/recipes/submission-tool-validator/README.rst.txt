:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'submission-tool-validator'
.. highlight: bash

submission-tool-validator
=========================

.. conda:recipe:: submission-tool-validator
   :replaces_section_title:
   :noindex:

   This tool helps user to validate submissions in the client side before submitting to PRIDE.

   :homepage: https://github.com/bigbio/submission-tool-validator
   :license: Apache / Apache-2.0
   :recipe: /`submission-tool-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/submission-tool-validator/meta.yaml>`_

   


.. conda:package:: submission-tool-validator

   |downloads_submission-tool-validator| |docker_submission-tool-validator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.7-0</code>,  <code>1.0.6-0</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-4</code>,  <code>1.0.2-3</code>,  <code>1.0.2-2</code>,  </span></summary>
      

      ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends openjdk: ``>=8``
   :depends python: ``>=3.6``
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

      mamba install submission-tool-validator

   and update with::

      mamba update submission-tool-validator

  To create a new environment, run::

      mamba create --name myenvname submission-tool-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/submission-tool-validator:<tag>

   (see `submission-tool-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_submission-tool-validator| image:: https://img.shields.io/conda/dn/bioconda/submission-tool-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/submission-tool-validator
   :alt:   (downloads)
.. |docker_submission-tool-validator| image:: https://quay.io/repository/biocontainers/submission-tool-validator/status
   :target: https://quay.io/repository/biocontainers/submission-tool-validator
.. _`submission-tool-validator/tags`: https://quay.io/repository/biocontainers/submission-tool-validator?tab=tags


.. raw:: html

    <script>
        var package = "submission-tool-validator";
        var versions = ["1.0.7","1.0.6","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/submission-tool-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/submission-tool-validator/README.html