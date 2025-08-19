:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tgt'
.. highlight: bash

tgt
===

.. conda:recipe:: tgt
   :replaces_section_title:
   :noindex:

   TextGridTools \-\- Read\, write\, and manipulate Praat TextGrid files

   :homepage: https://github.com/hbuschme/TextGridTools/
   :license: GPL / GPL-3.0+
   :recipe: /`tgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt/meta.yaml>`_

   


.. conda:package:: tgt

   |downloads_tgt| |docker_tgt|

   :versions:
      
      

      ``1.4.3-3``,  ``1.4.3-2``,  ``1.4.3-0``,  ``1.4.2-0``

      

   
   :depends numpy: 
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

      mamba install tgt

   and update with::

      mamba update tgt

  To create a new environment, run::

      mamba create --name myenvname tgt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tgt:<tag>

   (see `tgt/tags`_ for valid values for ``<tag>``)


.. |downloads_tgt| image:: https://img.shields.io/conda/dn/bioconda/tgt.svg?style=flat
   :target: https://anaconda.org/bioconda/tgt
   :alt:   (downloads)
.. |docker_tgt| image:: https://quay.io/repository/biocontainers/tgt/status
   :target: https://quay.io/repository/biocontainers/tgt
.. _`tgt/tags`: https://quay.io/repository/biocontainers/tgt?tab=tags


.. raw:: html

    <script>
        var package = "tgt";
        var versions = ["1.4.3","1.4.3","1.4.3","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tgt/README.html