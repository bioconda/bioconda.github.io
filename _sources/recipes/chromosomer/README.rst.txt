:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromosomer'
.. highlight: bash

chromosomer
===========

.. conda:recipe:: chromosomer
   :replaces_section_title:
   :noindex:

   A reference\-assisted assembly tool for producing draft chromosome sequences.

   :homepage: https://github.com/gtamazian/chromosomer
   :license: MIT
   :recipe: /`chromosomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromosomer/meta.yaml>`_

   


.. conda:package:: chromosomer

   |downloads_chromosomer| |docker_chromosomer|

   :versions:
      
      

      ``0.1.4a-2``,  ``0.1.4a-1``,  ``0.1.4a-0``

      

   
   :depends bioformats: 
   :depends future: 
   :depends pyfaidx: 
   :depends python: ``<3``
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

      mamba install chromosomer

   and update with::

      mamba update chromosomer

  To create a new environment, run::

      mamba create --name myenvname chromosomer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chromosomer:<tag>

   (see `chromosomer/tags`_ for valid values for ``<tag>``)


.. |downloads_chromosomer| image:: https://img.shields.io/conda/dn/bioconda/chromosomer.svg?style=flat
   :target: https://anaconda.org/bioconda/chromosomer
   :alt:   (downloads)
.. |docker_chromosomer| image:: https://quay.io/repository/biocontainers/chromosomer/status
   :target: https://quay.io/repository/biocontainers/chromosomer
.. _`chromosomer/tags`: https://quay.io/repository/biocontainers/chromosomer?tab=tags


.. raw:: html

    <script>
        var package = "chromosomer";
        var versions = ["0.1.4a","0.1.4a","0.1.4a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromosomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromosomer/README.html