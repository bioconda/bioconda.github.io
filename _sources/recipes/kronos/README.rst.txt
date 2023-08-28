:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kronos'
.. highlight: bash

kronos
======

.. conda:recipe:: kronos
   :replaces_section_title:
   :noindex:

   Kronos is a highly flexible Python\-based software tool that mainly enables bioinformatics developers\, i.e. bioinformaticians who develop workflows for analyzing genomic data\, to quickly make a workflow.

   :homepage: https://github.com/jtaghiyar/kronos
   :documentation: https://kronos.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`kronos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kronos/meta.yaml>`_

   


.. conda:package:: kronos

   |downloads_kronos| |docker_kronos|

   :versions:
      
      

      ``2.3.0-1``,  ``2.3.0-0``

      

   
   :depends python: ``<3``
   :depends pyyaml: ``>=3.11``
   :depends ruffus: ``2.4.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install kronos

   and update with::

      mamba update kronos

  To create a new environment, run::

      mamba create --name myenvname kronos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kronos:<tag>

   (see `kronos/tags`_ for valid values for ``<tag>``)


.. |downloads_kronos| image:: https://img.shields.io/conda/dn/bioconda/kronos.svg?style=flat
   :target: https://anaconda.org/bioconda/kronos
   :alt:   (downloads)
.. |docker_kronos| image:: https://quay.io/repository/biocontainers/kronos/status
   :target: https://quay.io/repository/biocontainers/kronos
.. _`kronos/tags`: https://quay.io/repository/biocontainers/kronos?tab=tags


.. raw:: html

    <script>
        var package = "kronos";
        var versions = ["2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kronos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kronos/README.html