:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-datasets-pyclient'
.. highlight: bash

ncbi-datasets-pyclient
======================

.. conda:recipe:: ncbi-datasets-pyclient
   :replaces_section_title:
   :noindex:

   NCBI Datasets API

   :homepage: https://www.ncbi.nlm.nih.gov/datasets
   :documentation: https://github.com/misialq/ncbi-datasets-pyclient
   
   :developer docs: https://github.com/ncbi/datasets
   :license: BSD-3-Clause
   :recipe: /`ncbi-datasets-pyclient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-datasets-pyclient/meta.yaml>`_

   


.. conda:package:: ncbi-datasets-pyclient

   |downloads_ncbi-datasets-pyclient| |docker_ncbi-datasets-pyclient|

   :versions:
      
      

      ``18.0.5-0``,  ``18.0.2-0``,  ``18.0.1-0``,  ``17.3.0-0``,  ``17.2.0-0``

      

   
   :depends pydantic: ``>=2``
   :depends python: ``>=3.8.0,<4.0.0``
   :depends python-dateutil: ``>=2.8.2``
   :depends typing_extensions: ``>=4.7.1``
   :depends urllib3: ``>=1.25.3,<3.0.0``
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

      mamba install ncbi-datasets-pyclient

   and update with::

      mamba update ncbi-datasets-pyclient

  To create a new environment, run::

      mamba create --name myenvname ncbi-datasets-pyclient

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ncbi-datasets-pyclient:<tag>

   (see `ncbi-datasets-pyclient/tags`_ for valid values for ``<tag>``)


.. |downloads_ncbi-datasets-pyclient| image:: https://img.shields.io/conda/dn/bioconda/ncbi-datasets-pyclient.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-datasets-pyclient
   :alt:   (downloads)
.. |docker_ncbi-datasets-pyclient| image:: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient/status
   :target: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient
.. _`ncbi-datasets-pyclient/tags`: https://quay.io/repository/biocontainers/ncbi-datasets-pyclient?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-datasets-pyclient";
        var versions = ["18.0.5","18.0.2","18.0.1","17.3.0","17.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-datasets-pyclient/README.html