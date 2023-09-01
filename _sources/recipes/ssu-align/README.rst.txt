:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssu-align'
.. highlight: bash

ssu-align
=========

.. conda:recipe:: ssu-align
   :replaces_section_title:
   :noindex:

   SSU\-ALIGN\: structural alignment of SSU rRNA sequences

   :homepage: http://eddylab.org/software/ssu-align/
   :license: BSD
   :recipe: /`ssu-align <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssu-align>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssu-align/meta.yaml>`_

   


.. conda:package:: ssu-align

   |downloads_ssu-align| |docker_ssu-align|

   :versions:
      
      

      ``0.1.1-6``,  ``0.1.1-5``,  ``0.1.1-4``,  ``0.1.1-3``,  ``0.1.1-2``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
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

      mamba install ssu-align

   and update with::

      mamba update ssu-align

  To create a new environment, run::

      mamba create --name myenvname ssu-align

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ssu-align:<tag>

   (see `ssu-align/tags`_ for valid values for ``<tag>``)


.. |downloads_ssu-align| image:: https://img.shields.io/conda/dn/bioconda/ssu-align.svg?style=flat
   :target: https://anaconda.org/bioconda/ssu-align
   :alt:   (downloads)
.. |docker_ssu-align| image:: https://quay.io/repository/biocontainers/ssu-align/status
   :target: https://quay.io/repository/biocontainers/ssu-align
.. _`ssu-align/tags`: https://quay.io/repository/biocontainers/ssu-align?tab=tags


.. raw:: html

    <script>
        var package = "ssu-align";
        var versions = ["0.1.1","0.1.1","0.1.1","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssu-align/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssu-align/README.html