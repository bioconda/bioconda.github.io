:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzpaf'
.. highlight: bash

mzpaf
=====

.. conda:recipe:: mzpaf
   :replaces_section_title:
   :noindex:

   HUPO\-PSI Peptide peak annotation format

   :homepage: https://github.com/HUPO-PSI/mzPAF
   :documentation: https://mzpaf.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/HUPO-PSI/mzPAF/implementations/python
   :license: CC / CC-BY-1.0
   :recipe: /`mzpaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzpaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzpaf/meta.yaml>`_

   


.. conda:package:: mzpaf

   |downloads_mzpaf| |docker_mzpaf|

   :versions:
      
      

      ``0.2.0b0-0``,  ``0.2.0a0-0``

      

   
   :depends pyteomics: 
   :depends python: 
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

      mamba install mzpaf

   and update with::

      mamba update mzpaf

  To create a new environment, run::

      mamba create --name myenvname mzpaf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mzpaf:<tag>

   (see `mzpaf/tags`_ for valid values for ``<tag>``)


.. |downloads_mzpaf| image:: https://img.shields.io/conda/dn/bioconda/mzpaf.svg?style=flat
   :target: https://anaconda.org/bioconda/mzpaf
   :alt:   (downloads)
.. |docker_mzpaf| image:: https://quay.io/repository/biocontainers/mzpaf/status
   :target: https://quay.io/repository/biocontainers/mzpaf
.. _`mzpaf/tags`: https://quay.io/repository/biocontainers/mzpaf?tab=tags


.. raw:: html

    <script>
        var package = "mzpaf";
        var versions = ["0.2.0b0","0.2.0a0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzpaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzpaf/README.html