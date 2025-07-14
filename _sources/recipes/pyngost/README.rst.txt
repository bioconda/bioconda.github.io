:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyngost'
.. highlight: bash

pyngost
=======

.. conda:recipe:: pyngost
   :replaces_section_title:
   :noindex:

   pyngoST\: fast\, simultaneous and accurate and multiple sequence typing of Neisseria gonorrhoeae genome collections

   :homepage: https://github.com/leosanbu/pyngoST
   :license: GPL-3.0-only
   :recipe: /`pyngost <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyngost>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyngost/meta.yaml>`_
   :links: doi: :doi:`10.1099/mgen.0.001189`

   


.. conda:package:: pyngost

   |downloads_pyngost| |docker_pyngost|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends biopython: 
   :depends blast: ``2.12.0``
   :depends openpyxl: 
   :depends pandas: 
   :depends pyahocorasick: 
   :depends pyfaidx: 
   :depends python: 
   :depends requests: 
   :depends urllib3: ``1.26.6``
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

      mamba install pyngost

   and update with::

      mamba update pyngost

  To create a new environment, run::

      mamba create --name myenvname pyngost

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyngost:<tag>

   (see `pyngost/tags`_ for valid values for ``<tag>``)


.. |downloads_pyngost| image:: https://img.shields.io/conda/dn/bioconda/pyngost.svg?style=flat
   :target: https://anaconda.org/bioconda/pyngost
   :alt:   (downloads)
.. |docker_pyngost| image:: https://quay.io/repository/biocontainers/pyngost/status
   :target: https://quay.io/repository/biocontainers/pyngost
.. _`pyngost/tags`: https://quay.io/repository/biocontainers/pyngost?tab=tags


.. raw:: html

    <script>
        var package = "pyngost";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyngost/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyngost/README.html