:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pubchempy'
.. highlight: bash

pubchempy
=========

.. conda:recipe:: pubchempy
   :replaces_section_title:
   :noindex:

   A simple Python wrapper around the PubChem PUG REST API.

   :homepage: https://github.com/mcs07/PubChemPy
   :documentation: http://pubchempy.readthedocs.io/
   
   :license: MIT
   :recipe: /`pubchempy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubchempy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pubchempy/meta.yaml>`_

   


.. conda:package:: pubchempy

   |downloads_pubchempy| |docker_pubchempy|

   :versions:
      
      

      ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``

      

   
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

      mamba install pubchempy

   and update with::

      mamba update pubchempy

  To create a new environment, run::

      mamba create --name myenvname pubchempy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pubchempy:<tag>

   (see `pubchempy/tags`_ for valid values for ``<tag>``)


.. |downloads_pubchempy| image:: https://img.shields.io/conda/dn/bioconda/pubchempy.svg?style=flat
   :target: https://anaconda.org/bioconda/pubchempy
   :alt:   (downloads)
.. |docker_pubchempy| image:: https://quay.io/repository/biocontainers/pubchempy/status
   :target: https://quay.io/repository/biocontainers/pubchempy
.. _`pubchempy/tags`: https://quay.io/repository/biocontainers/pubchempy?tab=tags


.. raw:: html

    <script>
        var package = "pubchempy";
        var versions = ["1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pubchempy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pubchempy/README.html