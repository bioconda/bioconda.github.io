:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'endorspy'
.. highlight: bash

endorspy
========

.. conda:recipe:: endorspy
   :replaces_section_title:
   :noindex:

   endorS.py calculates endogenous DNA from samtools flagstat files and print to screen

   :homepage: https://github.com/aidaanva/endorS.py
   :license: MIT
   :recipe: /`endorspy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/endorspy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/endorspy/meta.yaml>`_

   


.. conda:package:: endorspy

   |downloads_endorspy| |docker_endorspy|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends python: ``>=3.6``
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

      mamba install endorspy

   and update with::

      mamba update endorspy

  To create a new environment, run::

      mamba create --name myenvname endorspy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/endorspy:<tag>

   (see `endorspy/tags`_ for valid values for ``<tag>``)


.. |downloads_endorspy| image:: https://img.shields.io/conda/dn/bioconda/endorspy.svg?style=flat
   :target: https://anaconda.org/bioconda/endorspy
   :alt:   (downloads)
.. |docker_endorspy| image:: https://quay.io/repository/biocontainers/endorspy/status
   :target: https://quay.io/repository/biocontainers/endorspy
.. _`endorspy/tags`: https://quay.io/repository/biocontainers/endorspy?tab=tags


.. raw:: html

    <script>
        var package = "endorspy";
        var versions = ["1.3","1.2","1.1","1.0","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/endorspy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/endorspy/README.html