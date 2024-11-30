:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'translatorx'
.. highlight: bash

translatorx
===========

.. conda:recipe:: translatorx
   :replaces_section_title:
   :noindex:

   Multiple alignment of nucleotide sequences guided by amino acid information

   :homepage: http://pc16141.mncn.csic.es/
   :license: unknown
   :recipe: /`translatorx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translatorx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translatorx/meta.yaml>`_
   :links: biotools: :biotools:`translatorx`

   


.. conda:package:: translatorx

   |downloads_translatorx| |docker_translatorx|

   :versions:
      
      

      ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends muscle: 
   :depends perl: 
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

      mamba install translatorx

   and update with::

      mamba update translatorx

  To create a new environment, run::

      mamba create --name myenvname translatorx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/translatorx:<tag>

   (see `translatorx/tags`_ for valid values for ``<tag>``)


.. |downloads_translatorx| image:: https://img.shields.io/conda/dn/bioconda/translatorx.svg?style=flat
   :target: https://anaconda.org/bioconda/translatorx
   :alt:   (downloads)
.. |docker_translatorx| image:: https://quay.io/repository/biocontainers/translatorx/status
   :target: https://quay.io/repository/biocontainers/translatorx
.. _`translatorx/tags`: https://quay.io/repository/biocontainers/translatorx?tab=tags


.. raw:: html

    <script>
        var package = "translatorx";
        var versions = ["1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/translatorx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/translatorx/README.html