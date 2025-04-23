:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conservation'
.. highlight: bash

conservation
============

.. conda:recipe:: conservation
   :replaces_section_title:
   :noindex:

   Evolutionary Conservation of Amino Acids and Codons

   :homepage: https://github.com/hanjunlee21/conservation
   :license: MIT / MIT
   :recipe: /`conservation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conservation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conservation/meta.yaml>`_

   


.. conda:package:: conservation

   |downloads_conservation| |docker_conservation|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends biopython: 
   :depends importlib-resources: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends tqdm: 
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

      mamba install conservation

   and update with::

      mamba update conservation

  To create a new environment, run::

      mamba create --name myenvname conservation

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conservation:<tag>

   (see `conservation/tags`_ for valid values for ``<tag>``)


.. |downloads_conservation| image:: https://img.shields.io/conda/dn/bioconda/conservation.svg?style=flat
   :target: https://anaconda.org/bioconda/conservation
   :alt:   (downloads)
.. |docker_conservation| image:: https://quay.io/repository/biocontainers/conservation/status
   :target: https://quay.io/repository/biocontainers/conservation
.. _`conservation/tags`: https://quay.io/repository/biocontainers/conservation?tab=tags


.. raw:: html

    <script>
        var package = "conservation";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conservation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conservation/README.html