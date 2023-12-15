:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pylib'
.. highlight: bash

ncbi-datasets-pylib
===================

.. conda:recipe:: ncbi-datasets-pylib
   :replaces_section_title:
   :noindex:

   Easily gather data from across NCBI databases

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :documentation: https://www.ncbi.nlm.nih.gov/datasets/docs/v2/download-and-install/
   
   :developer docs: https://github.com/ncbi/datasets
   :license: Unlicense
   :recipe: /`ncbi-datasets-pylib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pylib/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pylib

   |downloads_ncbi-datasets-pylib| |docker_ncbi-datasets-pylib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>15.33.0-0</code>,  <code>15.32.0-0</code>,  <code>15.31.3-0</code>,  <code>15.31.2-0</code>,  <code>15.31.1-0</code>,  <code>15.31.0-0</code>,  <code>15.30.0-0</code>,  <code>15.29.0-0</code>,  <code>15.28.0-0</code>,  </span></summary>
      

      ``15.33.0-0``,  ``15.32.0-0``,  ``15.31.3-0``,  ``15.31.2-0``,  ``15.31.1-0``,  ``15.31.0-0``,  ``15.30.0-0``,  ``15.29.0-0``,  ``15.28.0-0``,  ``15.27.1-0``,  ``15.27.0-0``,  ``15.26.0-0``,  ``15.25.0-0``,  ``15.24.0-0``,  ``15.23.0-0``,  ``15.21.1-0``,  ``15.19.1-0``,  ``15.19.0-0``,  ``15.18.0-0``,  ``15.17.0-0``,  ``15.16.3-0``,  ``15.16.2-0``,  ``15.16.1-0``,  ``15.16.0-0``,  ``15.15.0-0``,  ``15.14.0-0``,  ``15.13.1-0``,  ``15.13.0-0``,  ``15.12.0-0``,  ``15.11.0-0``,  ``14.27.0-0``,  ``14.26.0-0``,  ``14.25.1-0``,  ``14.23.0-0``,  ``14.22.1-0``,  ``14.22.0-0``,  ``14.21.0-0``,  ``14.20.0-0``,  ``14.19.0-0``,  ``14.18.0-0``,  ``14.17.0-0``,  ``14.16.0-0``,  ``14.15.0-0``,  ``14.13.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends gffutils: ``0.10.*``
   :depends jinja2: ``3.1.*``
   :depends jsonlines: ``3.0.*``
   :depends protobuf: ``3.20.*``
   :depends python: ``>=3.8``
   :depends python-dateutil: ``2.8.*``
   :depends urllib3: ``1.26.*``
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

      mamba install ncbi-datasets-pylib

   and update with::

      mamba update ncbi-datasets-pylib

  To create a new environment, run::

      mamba create --name myenvname ncbi-datasets-pylib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-datasets-pylib:<tag>

   (see `ncbi-datasets-pylib/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-datasets-pylib| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pylib.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pylib
   :alt:   (downloads)
.. |docker_ncbi-datasets-pylib| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pylib/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pylib
.. _`ncbi-datasets-pylib/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pylib?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-datasets-pylib";
        var versions = ["15.33.0","15.32.0","15.31.3","15.31.2","15.31.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pylib/README.html