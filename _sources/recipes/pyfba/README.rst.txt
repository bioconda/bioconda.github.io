:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyfba'
.. highlight: bash

pyfba
=====

.. conda:recipe:: pyfba
   :replaces_section_title:
   :noindex:

   Python\-based Flux Balance Analysis using the ModelSEED

   :homepage: https://linsalrob.github.io/PyFBA/
   :developer docs: https://github.com/linsalrob/PyFBA/
   :license: MIT / MIT
   :recipe: /`pyfba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyfba/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4972064`

   


.. conda:package:: pyfba

   |downloads_pyfba| |docker_pyfba|

   :versions:
      
      

      ``2.62-5``,  ``2.62-4``,  ``2.62-3``,  ``2.62-2``,  ``2.62-1``,  ``2.62-0``,  ``2.59-0``,  ``2.58-0``,  ``2.55-0``

      

   
   :depends beautifulsoup4: 
   :depends glpk: ``>=5.0,<6.0a0``
   :depends importlib_resources: 
   :depends jupyter: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends lxml: 
   :depends pyglpk: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pyfba

   and update with::

      mamba update pyfba

  To create a new environment, run::

      mamba create --name myenvname pyfba

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyfba:<tag>

   (see `pyfba/tags`_ for valid values for ``<tag>``)


.. |downloads_pyfba| image:: https://img.shields.io/conda/dn/bioconda/pyfba.svg?style=flat
   :target: https://anaconda.org/bioconda/pyfba
   :alt:   (downloads)
.. |docker_pyfba| image:: https://quay.io/repository/biocontainers/pyfba/status
   :target: https://quay.io/repository/biocontainers/pyfba
.. _`pyfba/tags`: https://quay.io/repository/biocontainers/pyfba?tab=tags


.. raw:: html

    <script>
        var package = "pyfba";
        var versions = ["2.62","2.62","2.62","2.62","2.62"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyfba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyfba/README.html