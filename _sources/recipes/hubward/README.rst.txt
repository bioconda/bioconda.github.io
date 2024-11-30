:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hubward'
.. highlight: bash

hubward
=======

.. conda:recipe:: hubward
   :replaces_section_title:
   :noindex:

   Manage the visualization of large amounts of other people\'s \[often messy\] genomics data

   :homepage: https://github.com/daler/hubward
   :license: BSD License
   :recipe: /`hubward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward/meta.yaml>`_

   


.. conda:package:: hubward

   |downloads_hubward| |docker_hubward|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.0-0``

      

   
   :depends argh: 
   :depends bleach: 
   :depends colorama: 
   :depends docutils: 
   :depends fabric: 
   :depends functools32: 
   :depends jsonschema: 
   :depends matplotlib: 
   :depends numpy: 
   :depends pyaml: 
   :depends pybedtools: 
   :depends pycurl: 
   :depends python: ``2.7*``
   :depends pyyaml: 
   :depends trackhub: 
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

      mamba install hubward

   and update with::

      mamba update hubward

  To create a new environment, run::

      mamba create --name myenvname hubward

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hubward:<tag>

   (see `hubward/tags`_ for valid values for ``<tag>``)


.. |downloads_hubward| image:: https://img.shields.io/conda/dn/bioconda/hubward.svg?style=flat
   :target: https://anaconda.org/bioconda/hubward
   :alt:   (downloads)
.. |docker_hubward| image:: https://quay.io/repository/biocontainers/hubward/status
   :target: https://quay.io/repository/biocontainers/hubward
.. _`hubward/tags`: https://quay.io/repository/biocontainers/hubward?tab=tags


.. raw:: html

    <script>
        var package = "hubward";
        var versions = ["0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward/README.html