:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-goenrichment'
.. highlight: bash

python-goenrichment
===================

.. conda:recipe:: python-goenrichment
   :replaces_section_title:
   :noindex:

   GO enrichment analysis from a list of gene names using a precomputed database

   :homepage: https://pypi.org/project/goenrichment/
   :license: PUBLIC-DOMAIN
   :recipe: /`python-goenrichment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-goenrichment/meta.yaml>`_

   


.. conda:package:: python-goenrichment

   |downloads_python-goenrichment| |docker_python-goenrichment|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``0.0.10a3-0``

      

   
   :depends networkx: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
   :depends statsmodels: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install python-goenrichment

   and update with::

      mamba update python-goenrichment

  To create a new environment, run::

      mamba create --name myenvname python-goenrichment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-goenrichment:<tag>

   (see `python-goenrichment/tags`_ for valid values for ``<tag>``)


.. |downloads_python-goenrichment| image:: https://img.shields.io/conda/dn/bioconda/python-goenrichment.svg?style=flat
   :target: https://anaconda.org/bioconda/python-goenrichment
   :alt:   (downloads)
.. |docker_python-goenrichment| image:: https://quay.io/repository/biocontainers/python-goenrichment/status
   :target: https://quay.io/repository/biocontainers/python-goenrichment
.. _`python-goenrichment/tags`: https://quay.io/repository/biocontainers/python-goenrichment?tab=tags


.. raw:: html

    <script>
        var package = "python-goenrichment";
        var versions = ["1.0.3","1.0.2","0.0.10a3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-goenrichment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-goenrichment/README.html