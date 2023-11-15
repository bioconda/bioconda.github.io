:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psims'
.. highlight: bash

psims
=====

.. conda:recipe:: psims
   :replaces_section_title:
   :noindex:

   Writers and controlled vocabulary manager for PSI\-MS\'s mzML and mzIdentML standards

   :homepage: https://github.com/mobiusklein/psims
   :documentation: https://mobiusklein.github.io/psims/docs/build/html/
   
   :license: APACHE / Apache-2.0
   :recipe: /`psims <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psims>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psims/meta.yaml>`_

   


.. conda:package:: psims

   |downloads_psims| |docker_psims|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.9-0</code>,  <code>1.2.8-0</code>,  <code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.50-0``,  ``0.1.47-0``,  ``0.1.46-0``,  ``0.1.45-0``

      
      .. raw:: html

         </details>
      

   
   :depends lxml: 
   :depends numpy: 
   :depends python: ``>=3.9``
   :depends six: 
   :depends sqlalchemy: 
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

      mamba install psims

   and update with::

      mamba update psims

  To create a new environment, run::

      mamba create --name myenvname psims

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psims:<tag>

   (see `psims/tags`_ for valid values for ``<tag>``)


.. |downloads_psims| image:: https://img.shields.io/conda/dn/bioconda/psims.svg?style=flat
   :target: https://anaconda.org/bioconda/psims
   :alt:   (downloads)
.. |docker_psims| image:: https://quay.io/repository/biocontainers/psims/status
   :target: https://quay.io/repository/biocontainers/psims
.. _`psims/tags`: https://quay.io/repository/biocontainers/psims?tab=tags


.. raw:: html

    <script>
        var package = "psims";
        var versions = ["1.3.1","1.3.0","1.2.9","1.2.8","1.2.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psims/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psims/README.html