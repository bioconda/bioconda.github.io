:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'garnet'
.. highlight: bash

garnet
======

.. conda:recipe:: garnet
   :replaces_section_title:
   :noindex:

   GarNet uses gene expression and epigenetic data to impute transcription factors \(TFs\) that played an important role in a biological system.

   :homepage: https://github.com/fraenkel-lab/GarNet
   :license: MIT / MIT
   :recipe: /`garnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnet/meta.yaml>`_

   


.. conda:package:: garnet

   |downloads_garnet| |docker_garnet|

   :versions:
      
      

      ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.0-0``,  ``0.2.20-0``,  ``0.2.17-0``

      

   
   :depends intervaltree: 
   :depends jinja2: 
   :depends libgcc: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``3.5*``
   :depends statsmodels: 
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

      mamba install garnet

   and update with::

      mamba update garnet

  To create a new environment, run::

      mamba create --name myenvname garnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/garnet:<tag>

   (see `garnet/tags`_ for valid values for ``<tag>``)


.. |downloads_garnet| image:: https://img.shields.io/conda/dn/bioconda/garnet.svg?style=flat
   :target: https://anaconda.org/bioconda/garnet
   :alt:   (downloads)
.. |docker_garnet| image:: https://quay.io/repository/biocontainers/garnet/status
   :target: https://quay.io/repository/biocontainers/garnet
.. _`garnet/tags`: https://quay.io/repository/biocontainers/garnet?tab=tags


.. raw:: html

    <script>
        var package = "garnet";
        var versions = ["0.4.5","0.4.3","0.4.0","0.2.20","0.2.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnet/README.html