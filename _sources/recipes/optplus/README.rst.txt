:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optplus'
.. highlight: bash

optplus
=======

.. conda:recipe:: optplus
   :replaces_section_title:
   :noindex:

   additional options for optparse

   :homepage: http://noble.gs.washington.edu/~mmh1/software/optplus/
   :license: UNKNOWN
   :recipe: /`optplus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optplus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optplus/meta.yaml>`_

   


.. conda:package:: optplus

   |downloads_optplus| |docker_optplus|

   :versions:
      
      

      ``0.2-1``,  ``0.2-0``,  ``0.1.1-2``,  ``0.1.1-0``

      

   
   :depends python: 
   :depends six: 
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

      mamba install optplus

   and update with::

      mamba update optplus

  To create a new environment, run::

      mamba create --name myenvname optplus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/optplus:<tag>

   (see `optplus/tags`_ for valid values for ``<tag>``)


.. |downloads_optplus| image:: https://img.shields.io/conda/dn/bioconda/optplus.svg?style=flat
   :target: https://anaconda.org/bioconda/optplus
   :alt:   (downloads)
.. |docker_optplus| image:: https://quay.io/repository/biocontainers/optplus/status
   :target: https://quay.io/repository/biocontainers/optplus
.. _`optplus/tags`: https://quay.io/repository/biocontainers/optplus?tab=tags


.. raw:: html

    <script>
        var package = "optplus";
        var versions = ["0.2","0.2","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optplus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optplus/README.html