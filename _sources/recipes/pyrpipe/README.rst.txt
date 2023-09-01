:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrpipe'
.. highlight: bash

pyrpipe
=======

.. conda:recipe:: pyrpipe
   :replaces_section_title:
   :noindex:

   pyrpipe is a lightweight python package for RNA\-Seq workflows.

   :homepage: https://github.com/urmi-21/pyrpipe
   :documentation: https://pyrpipe.readthedocs.io/en/latest/?badge=latest
   
   :license: MIT / MIT
   :recipe: /`pyrpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrpipe/meta.yaml>`_

   


.. conda:package:: pyrpipe

   |downloads_pyrpipe| |docker_pyrpipe|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends colorama: 
   :depends dill: 
   :depends importlib_resources: 
   :depends jinja2: 
   :depends multiqc: 
   :depends psutil: 
   :depends python: ``>=3``
   :depends pyyaml: 
   :depends seaborn: 
   :depends weasyprint: 
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

      mamba install pyrpipe

   and update with::

      mamba update pyrpipe

  To create a new environment, run::

      mamba create --name myenvname pyrpipe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyrpipe:<tag>

   (see `pyrpipe/tags`_ for valid values for ``<tag>``)


.. |downloads_pyrpipe| image:: https://img.shields.io/conda/dn/bioconda/pyrpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrpipe
   :alt:   (downloads)
.. |docker_pyrpipe| image:: https://quay.io/repository/biocontainers/pyrpipe/status
   :target: https://quay.io/repository/biocontainers/pyrpipe
.. _`pyrpipe/tags`: https://quay.io/repository/biocontainers/pyrpipe?tab=tags


.. raw:: html

    <script>
        var package = "pyrpipe";
        var versions = ["0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrpipe/README.html