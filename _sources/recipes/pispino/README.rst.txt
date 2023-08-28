:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pispino'
.. highlight: bash

pispino
=======

.. conda:recipe:: pispino
   :replaces_section_title:
   :noindex:

   PISPINO \(PIpits SPIN\-Off tools\)\: Bioinformatics toolkits for processing NGS data

   :homepage: https://github.com/hsgweon/pispino
   :license: GPL3 / GNU General Public License v3.0
   :recipe: /`pispino <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pispino>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pispino/meta.yaml>`_

   


.. conda:package:: pispino

   |downloads_pispino| |docker_pispino|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends fastx_toolkit: 
   :depends python: 
   :depends vsearch: 
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

      mamba install pispino

   and update with::

      mamba update pispino

  To create a new environment, run::

      mamba create --name myenvname pispino

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pispino:<tag>

   (see `pispino/tags`_ for valid values for ``<tag>``)


.. |downloads_pispino| image:: https://img.shields.io/conda/dn/bioconda/pispino.svg?style=flat
   :target: https://anaconda.org/bioconda/pispino
   :alt:   (downloads)
.. |docker_pispino| image:: https://quay.io/repository/biocontainers/pispino/status
   :target: https://quay.io/repository/biocontainers/pispino
.. _`pispino/tags`: https://quay.io/repository/biocontainers/pispino?tab=tags


.. raw:: html

    <script>
        var package = "pispino";
        var versions = ["1.1","1.1","1.1","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pispino/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pispino/README.html