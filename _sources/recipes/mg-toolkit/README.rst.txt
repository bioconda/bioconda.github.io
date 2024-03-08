:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mg-toolkit'
.. highlight: bash

mg-toolkit
==========

.. conda:recipe:: mg-toolkit
   :replaces_section_title:
   :noindex:

   Metagenomics toolkit.

   :homepage: https://www.ebi.ac.uk/metagenomics
   :developer docs: https://github.com/EBI-metagenomics/emg-toolkit
   :license: APACHE / Apache-2.0
   :recipe: /`mg-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mg-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mg-toolkit/meta.yaml>`_
   :links: biotools: :biotools:`MGnify`

   


.. conda:package:: mg-toolkit

   |downloads_mg-toolkit| |docker_mg-toolkit|

   :versions:
      
      

      ``0.10.4-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
   :depends jsonapi-client: ``>=0.9.9``
   :depends pandas: ``2.0.3``
   :depends python: ``>=3.8``
   :depends requests: ``>=2.31.0``
   :depends tqdm: ``>=4.49.0``
   :depends urllib3: ``>=2.2.1``
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

      mamba install mg-toolkit

   and update with::

      mamba update mg-toolkit

  To create a new environment, run::

      mamba create --name myenvname mg-toolkit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mg-toolkit:<tag>

   (see `mg-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_mg-toolkit| image:: https://img.shields.io/conda/dn/bioconda/mg-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/mg-toolkit
   :alt:   (downloads)
.. |docker_mg-toolkit| image:: https://quay.io/repository/biocontainers/mg-toolkit/status
   :target: https://quay.io/repository/biocontainers/mg-toolkit
.. _`mg-toolkit/tags`: https://quay.io/repository/biocontainers/mg-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "mg-toolkit";
        var versions = ["0.10.4","0.10.1","0.10.0","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mg-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mg-toolkit/README.html