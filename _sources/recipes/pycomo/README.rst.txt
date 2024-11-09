:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycomo'
.. highlight: bash

pycomo
======

.. conda:recipe:: pycomo
   :replaces_section_title:
   :noindex:

   PyCoMo is a software package for generating and analysing compartmentalized community metabolic models

   :homepage: https://github.com/univieCUBE/PyCoMo
   :license: MIT
   :recipe: /`pycomo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycomo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycomo/meta.yaml>`_

   


.. conda:package:: pycomo

   |downloads_pycomo| |docker_pycomo|

   :versions:
      
      

      ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``

      

   
   :depends cobra: ``>=0.23.0``
   :depends numpy: ``>=1.22.4``
   :depends pandas: ``>=1.5.3``
   :depends python: ``>=3.9``
   :depends python-libsbml: ``>=5.20.1``
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

      mamba install pycomo

   and update with::

      mamba update pycomo

  To create a new environment, run::

      mamba create --name myenvname pycomo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pycomo:<tag>

   (see `pycomo/tags`_ for valid values for ``<tag>``)


.. |downloads_pycomo| image:: https://img.shields.io/conda/dn/bioconda/pycomo.svg?style=flat
   :target: https://anaconda.org/bioconda/pycomo
   :alt:   (downloads)
.. |docker_pycomo| image:: https://quay.io/repository/biocontainers/pycomo/status
   :target: https://quay.io/repository/biocontainers/pycomo
.. _`pycomo/tags`: https://quay.io/repository/biocontainers/pycomo?tab=tags


.. raw:: html

    <script>
        var package = "pycomo";
        var versions = ["0.2.4","0.2.2","0.2.1","0.2.0","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycomo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycomo/README.html