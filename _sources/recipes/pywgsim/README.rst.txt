:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pywgsim'
.. highlight: bash

pywgsim
=======

.. conda:recipe:: pywgsim
   :replaces_section_title:
   :noindex:

   pywgsim

   :homepage: https://github.com/ialbert/pywgsim
   :license: MIT
   :recipe: /`pywgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pywgsim/meta.yaml>`_

   


.. conda:package:: pywgsim

   |downloads_pywgsim| |docker_pywgsim|

   :versions:
      
      

      ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``

      

   
   :depends plac: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pywgsim

   and update with::

      mamba update pywgsim

  To create a new environment, run::

      mamba create --name myenvname pywgsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pywgsim:<tag>

   (see `pywgsim/tags`_ for valid values for ``<tag>``)


.. |downloads_pywgsim| image:: https://img.shields.io/conda/dn/bioconda/pywgsim.svg?style=flat
   :target: https://anaconda.org/bioconda/pywgsim
   :alt:   (downloads)
.. |docker_pywgsim| image:: https://quay.io/repository/biocontainers/pywgsim/status
   :target: https://quay.io/repository/biocontainers/pywgsim
.. _`pywgsim/tags`: https://quay.io/repository/biocontainers/pywgsim?tab=tags


.. raw:: html

    <script>
        var package = "pywgsim";
        var versions = ["0.5.2","0.5.2","0.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pywgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pywgsim/README.html