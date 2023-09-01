:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'opencontactcli'
.. highlight: bash

opencontactcli
==============

.. conda:recipe:: opencontactcli
   :replaces_section_title:
   :noindex:

   Static contact mapping algorithm to identify potential peptide biomimetics from protein interaction partner structure files.

   :homepage: https://github.com/galaxyproteomics/OpenContact/tree/master
   :license: https://github.com/galaxyproteomics/OpenContact/blob/master/LICENSE_AGREEMENT/OpenContact_License.txt
   :recipe: /`opencontactcli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opencontactcli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/opencontactcli/meta.yaml>`_

   


.. conda:package:: opencontactcli

   |downloads_opencontactcli| |docker_opencontactcli|

   :versions:
      
      

      ``1.1-7``,  ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libgfortran-ng: 
   :depends libgfortran5: ``>=12.2.0``
   :depends numpy: ``>=1.21.6,<2.0a0``
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

      mamba install opencontactcli

   and update with::

      mamba update opencontactcli

  To create a new environment, run::

      mamba create --name myenvname opencontactcli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/opencontactcli:<tag>

   (see `opencontactcli/tags`_ for valid values for ``<tag>``)


.. |downloads_opencontactcli| image:: https://img.shields.io/conda/dn/bioconda/opencontactcli.svg?style=flat
   :target: https://anaconda.org/bioconda/opencontactcli
   :alt:   (downloads)
.. |docker_opencontactcli| image:: https://quay.io/repository/biocontainers/opencontactcli/status
   :target: https://quay.io/repository/biocontainers/opencontactcli
.. _`opencontactcli/tags`: https://quay.io/repository/biocontainers/opencontactcli?tab=tags


.. raw:: html

    <script>
        var package = "opencontactcli";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/opencontactcli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/opencontactcli/README.html