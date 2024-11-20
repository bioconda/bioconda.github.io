:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pango-designation'
.. highlight: bash

pango-designation
=================

.. conda:recipe:: pango-designation
   :replaces_section_title:
   :noindex:

   Repository for suggesting new lineages that should be added to the current scheme.

   :homepage: https://github.com/cov-lineages/pango-designation
   :license: CC-BY-NC-4.0
   :recipe: /`pango-designation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-designation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pango-designation/meta.yaml>`_

   


.. conda:package:: pango-designation

   |downloads_pango-designation| |docker_pango-designation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.31-0</code>,  <code>1.30-0</code>,  <code>1.29-0</code>,  <code>1.28-0</code>,  <code>1.27-0</code>,  <code>1.26-0</code>,  <code>1.25-0</code>,  <code>1.24-0</code>,  <code>1.23-0</code>,  </span></summary>
      

      ``1.31-0``,  ``1.30-0``,  ``1.29-0``,  ``1.28-0``,  ``1.27-0``,  ``1.26-0``,  ``1.25-0``,  ``1.24-0``,  ``1.23-0``,  ``1.22-0``,  ``1.21-0``,  ``1.20-0``,  ``1.19-0``,  ``1.18.1-0``,  ``1.18-0``,  ``1.17-0``,  ``1.16-0``,  ``1.15.1-0``,  ``1.14-0``,  ``1.13-0``,  ``1.12-0``,  ``1.11-0``,  ``1.9-0``,  ``1.8-0``,  ``1.7-0``,  ``1.6-0``,  ``1.4-0``,  ``1.3-0``,  ``1.2.141-0``,  ``1.2.140-0``,  ``1.2.139-0``,  ``1.2.138-0``,  ``1.2.137-0``,  ``1.2.136-0``,  ``1.2.135-0``,  ``1.2.134-0``,  ``1.2.133-0``,  ``1.2.132-0``,  ``1.2.131-0``,  ``1.2.130-0``,  ``1.2.129-0``,  ``1.2.128-0``,  ``1.2.127-0``,  ``1.2.126-0``,  ``1.2.125-0``,  ``1.2.124-0``,  ``1.2.123-0``,  ``1.2.122-0``,  ``1.2.121-0``,  ``1.2.120-0``,  ``1.2.119-0``,  ``1.2.118-0``,  ``1.2.116-0``,  ``1.2.114-0``,  ``1.2.113-0``,  ``1.2.112-0``,  ``1.2.111-0``,  ``1.2.110-0``,  ``1.2.109-0``,  ``1.2.108-0``,  ``1.2.107-0``,  ``1.2.106-0``,  ``1.2.105-0``,  ``1.2.103-0``,  ``1.2.102-0``,  ``1.2.101-0``,  ``1.2.100-0``,  ``1.2.98-0``,  ``1.2.97-0``,  ``1.2.96-0``,  ``1.2.95-0``,  ``1.2.94-0``,  ``1.2.93-0``,  ``1.2.92-0``,  ``1.2.91-0``,  ``1.2.90-0``,  ``1.2.89-0``,  ``1.2.88-0``,  ``1.2.87-0``,  ``1.2.86-0``,  ``1.2.84-0``,  ``1.2.83-0``,  ``1.2.82-0``,  ``1.2.81-0``,  ``1.2.78-0``,  ``1.2.77-0``,  ``1.2.76-0``,  ``1.2.75-0``,  ``1.2.73-0``,  ``1.2.71-0``,  ``1.2.70-0``,  ``1.2.68-0``,  ``1.2.66-0``,  ``1.2.65-0``,  ``1.2.64-0``,  ``1.2.63-0``,  ``1.2.62-0``,  ``1.2.61-0``,  ``1.2.59-0``,  ``1.2.58-0``,  ``1.2.56-0``,  ``1.2.55-0``,  ``1.2.54-0``,  ``1.2.53-0``,  ``1.2.52-0``,  ``1.2.51-0``,  ``1.2.50-0``,  ``1.2.47-0``,  ``1.2.46-0``,  ``1.2.44-0``,  ``1.2.43-0``,  ``1.2.42-0``,  ``1.2.41-0``,  ``1.2.39-0``,  ``1.2.38-0``,  ``1.2.37-0``,  ``1.2.36-0``,  ``1.2.34-0``,  ``1.2.33-0``,  ``1.2.32-0``,  ``1.2.29-0``,  ``1.2.27-0``,  ``1.2.26-0``,  ``1.2.25-0``,  ``1.2.23-0``,  ``1.2.22-0``,  ``1.2.21-0``,  ``1.2.20-0``,  ``1.2.18-0``,  ``1.2.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends python: ``>=3.7``
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

      mamba install pango-designation

   and update with::

      mamba update pango-designation

  To create a new environment, run::

      mamba create --name myenvname pango-designation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pango-designation:<tag>

   (see `pango-designation/tags`_ for valid values for ``<tag>``)


.. |downloads_pango-designation| image:: https://img.shields.io/conda/dn/bioconda/pango-designation.svg?style=flat
   :target: https://anaconda.org/bioconda/pango-designation
   :alt:   (downloads)
.. |docker_pango-designation| image:: https://quay.io/repository/biocontainers/pango-designation/status
   :target: https://quay.io/repository/biocontainers/pango-designation
.. _`pango-designation/tags`: https://quay.io/repository/biocontainers/pango-designation?tab=tags


.. raw:: html

    <script>
        var package = "pango-designation";
        var versions = ["1.31","1.30","1.29","1.28","1.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pango-designation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pango-designation/README.html