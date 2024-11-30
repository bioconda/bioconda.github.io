:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transposonpsi'
.. highlight: bash

transposonpsi
=============

.. conda:recipe:: transposonpsi
   :replaces_section_title:
   :noindex:

   TransposonPSI is an analysis tool to identify protein or nucleic acid sequence homology to proteins encoded by diverse families of transposable elements.

   :homepage: http://transposonpsi.sourceforge.net/
   :license: artistic-2.0
   :recipe: /`transposonpsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposonpsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transposonpsi/meta.yaml>`_

   


.. conda:package:: transposonpsi

   |downloads_transposonpsi| |docker_transposonpsi|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends blast-legacy: ``2.2.26.*``
   :depends perl: ``>=5.8``
   :depends perl-bioperl: ``>=1.7.2``
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

      mamba install transposonpsi

   and update with::

      mamba update transposonpsi

  To create a new environment, run::

      mamba create --name myenvname transposonpsi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transposonpsi:<tag>

   (see `transposonpsi/tags`_ for valid values for ``<tag>``)


.. |downloads_transposonpsi| image:: https://img.shields.io/conda/dn/bioconda/transposonpsi.svg?style=flat
   :target: https://anaconda.org/bioconda/transposonpsi
   :alt:   (downloads)
.. |docker_transposonpsi| image:: https://quay.io/repository/biocontainers/transposonpsi/status
   :target: https://quay.io/repository/biocontainers/transposonpsi
.. _`transposonpsi/tags`: https://quay.io/repository/biocontainers/transposonpsi?tab=tags


.. raw:: html

    <script>
        var package = "transposonpsi";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transposonpsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transposonpsi/README.html